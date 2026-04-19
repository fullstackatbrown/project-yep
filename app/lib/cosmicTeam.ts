import "server-only";

import { createBucketClient } from "@cosmicjs/sdk";

import { teamSections } from "@/app/data/Team";
import type { TeamMember, TeamSection } from "@/app/data/Team";

type CosmicObject = {
  id?: string;
  title?: string;
  metadata?: unknown;
};

type CosmicResponse = {
  objects?: CosmicObject[];
};

const DEFAULT_SECTION_TITLE = "Team";
const DEFAULT_SECTION_INTRO = "Meet the people behind YEP.";
const DEFAULT_MEMBER_BLURB = "More details coming soon.";
const SECTION_ID_BY_CATEGORY = new Map<string, string>([
  ["directors", "directors"],
  ["student mentors", "student-mentors"],
  ["program management", "program-management"],
  ["liaison", "liaison"],
  ["student engagement", "school-engagement"],
  ["school engagement", "school-engagement"],
  ["media and design", "media-design"],
]);
const SECTION_ORDER = new Map(
  teamSections.map((section, index) => [section.id, index])
);

function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }

  return value as Record<string, unknown>;
}

function firstNonEmptyString(values: unknown[]): string | null {
  for (const value of values) {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed) {
        return trimmed;
      }
    }
  }

  return null;
}

function extractLabel(value: unknown): string | null {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed ? trimmed : null;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const label = extractLabel(item);
      if (label) {
        return label;
      }
    }

    return null;
  }

  const record = asRecord(value);
  if (!record) {
    return null;
  }

  return firstNonEmptyString([
    record.title,
    record.name,
    record.label,
    record.value,
    record.slug,
  ]);
}

function normalizeCategoryLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function toSectionId(sectionTitle: string): string {
  const knownSectionId = SECTION_ID_BY_CATEGORY.get(
    normalizeCategoryLabel(sectionTitle)
  );
  if (knownSectionId) {
    return knownSectionId;
  }

  const slug = sectionTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "team";
}

function getSectionTitle(metadata: Record<string, unknown> | null): string {
  if (!metadata) {
    return DEFAULT_SECTION_TITLE;
  }

  return (
    extractLabel(metadata.position_category) ??
    extractLabel(metadata.positionCategory) ??
    extractLabel(metadata.section) ??
    extractLabel(metadata.team_section) ??
    extractLabel(metadata.teamSection) ??
    extractLabel(metadata.department) ??
    extractLabel(metadata.group) ??
    DEFAULT_SECTION_TITLE
  );
}

function getImageUrl(metadata: Record<string, unknown> | null): string {
  if (!metadata) {
    return "";
  }

  const directMatch = firstNonEmptyString([
    metadata.imageUrl,
    metadata.image_url,
    metadata.photo_url,
    metadata.avatar_url,
  ]);

  if (directMatch) {
    return directMatch;
  }

  const nestedFields = [
    metadata.image,
    metadata.photo,
    metadata.avatar,
    metadata.headshot,
    metadata.picture,
  ];

  for (const field of nestedFields) {
    const record = asRecord(field);
    if (!record) {
      continue;
    }

    const nestedMatch = firstNonEmptyString([
      record.imgix_url,
      record.url,
      asRecord(record.img)?.imgix_url,
      asRecord(record.img)?.url,
    ]);

    if (nestedMatch) {
      return nestedMatch;
    }
  }

  return "";
}

function fallbackIntroFor(sectionId: string, sectionTitle: string): string {
  const sectionById = teamSections.find((section) => section.id === sectionId);
  if (sectionById) {
    return sectionById.intro;
  }

  const sectionByTitle = teamSections.find(
    (section) => section.title.toLowerCase() === sectionTitle.toLowerCase()
  );
  if (sectionByTitle) {
    return sectionByTitle.intro;
  }

  return DEFAULT_SECTION_INTRO;
}

function mapObjectToMember(person: CosmicObject, index: number): TeamMember {
  const metadata = asRecord(person.metadata);

  return {
    id: index + 1,
    name:
      firstNonEmptyString([person.title, metadata?.name, metadata?.full_name]) ??
      `Team Member ${index + 1}`,
    imageUrl: getImageUrl(metadata),
    role:
      firstNonEmptyString([
        metadata?.role,
        metadata?.position,
        metadata?.job_title,
      ]) ?? "Team Member",
    email: firstNonEmptyString([metadata?.email, metadata?.contact_email]) ?? "",
    classYear:
      firstNonEmptyString([
        metadata?.year,
        metadata?.classYear,
        metadata?.class_year,
        metadata?.graduation_year,
      ]) ?? "",
    major:
      firstNonEmptyString([
        metadata?.major,
        metadata?.field_of_study,
        metadata?.department_name,
      ]) ?? "",
    blurb:
      firstNonEmptyString([metadata?.blurb, metadata?.bio, metadata?.description]) ??
      DEFAULT_MEMBER_BLURB,
  };
}

function shapeSections(objects: CosmicObject[]): TeamSection[] {
  const grouped = new Map<string, TeamMember[]>();
  const sectionTitles = new Map<string, string>();

  objects.forEach((person, index) => {
    const metadata = asRecord(person.metadata);
    const sectionTitle = getSectionTitle(metadata);
    const sectionId = toSectionId(sectionTitle);
    const member = mapObjectToMember(person, index);

    const existingMembers = grouped.get(sectionId);
    if (existingMembers) {
      existingMembers.push(member);
    } else {
      grouped.set(sectionId, [member]);
      sectionTitles.set(sectionId, sectionTitle);
    }
  });

  return Array.from(grouped.entries())
    .map(([sectionId, members]) => {
      const title = sectionTitles.get(sectionId) ?? DEFAULT_SECTION_TITLE;

      return {
        id: sectionId,
        title,
        intro: fallbackIntroFor(sectionId, title),
        members,
      };
    })
    .sort((a, b) => {
      const orderA = SECTION_ORDER.get(a.id) ?? Number.POSITIVE_INFINITY;
      const orderB = SECTION_ORDER.get(b.id) ?? Number.POSITIVE_INFINITY;

      if (orderA !== orderB) {
        return orderA - orderB;
      }

      return a.title.localeCompare(b.title);
    });
}

export async function getTeamSectionsFromCosmic(): Promise<TeamSection[] | null> {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG;
  const readKey = process.env.COSMIC_READ_KEY;
  const objectType = process.env.COSMIC_PEOPLE_OBJECT_TYPE ?? "people";

  if (!bucketSlug || !readKey) {
    return null;
  }

  const cosmic = createBucketClient({
    bucketSlug,
    readKey,
  });

  try {
    const data = (await cosmic.objects
      .find({ type: objectType })
      .limit(200)
      .props("slug,title,metadata,type")
      .depth(1)) as CosmicResponse;

    if (!Array.isArray(data.objects) || data.objects.length === 0) {
      return null;
    }

    const sections = shapeSections(data.objects).filter(
      (section) => section.members.length > 0
    );

    return sections.length > 0 ? sections : null;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[cosmicTeam] Cosmic SDK request failed", error);
    }
    return null;
  }
}
