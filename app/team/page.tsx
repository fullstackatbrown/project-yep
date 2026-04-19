"use client";

import { useEffect, useMemo, useState } from "react";
import { teamSections } from "../data/Team";
import type { TeamMember, TeamSection } from "../data/Team";

type TeamApiResponse = {
  sections?: TeamSection[];
  source?: "cosmic" | "local";
};

export default function TeamPage() {
  const [sections, setSections] = useState<TeamSection[]>(teamSections);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeSectionId) ?? null,
    [activeSectionId, sections]
  );

  const selectedMember = useMemo((): TeamMember | null => {
    if (selectedMemberId === null) return null;
    for (const section of sections) {
      const member = section.members.find((m) => m.id === selectedMemberId);
      if (member) return member;
    }
    return null;
  }, [sections, selectedMemberId]);

  const visibleSections = useMemo(
    () => (activeSection ? [activeSection] : sections),
    [activeSection, sections]
  );

  useEffect(() => {
    let isMounted = true;

    const loadTeamData = async () => {
      try {
        const response = await fetch("/api/team", { cache: "no-store" });
        if (!response.ok) return;

        const data = (await response.json()) as TeamApiResponse;
        if (!Array.isArray(data.sections) || data.sections.length === 0) return;
        if (!isMounted) return;

        if (process.env.NODE_ENV !== "production" && data.source !== "cosmic") {
          console.warn("Team page is using local fallback data from /api/team");
        }

        setSections(data.sections);
      } catch {
        // Keep local Team.ts data as fallback.
      }
    };

    void loadTeamData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!selectedMember) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMemberId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMember]);

  return (
    <main className="min-h-screen bg-yep-yellow px-6 py-10 text-yep-black font-vazirmatn sm:px-10 md:px-14 md:py-12">
      <div className="mx-auto max-w-7xl">
        <header>
          <h1 className="font-viga text-5xl font-black uppercase tracking-tight sm:text-6xl">
            Our Team
          </h1>
          <nav className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => {
              const isActive = section.id === activeSectionId;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    setActiveSectionId((id) =>
                      id === section.id ? null : section.id
                    );
                    setSelectedMemberId(null);
                  }}
                  className={`font-viga rounded-xl border-2 border-yep-blue-border px-4 py-3 text-center text-lg font-black leading-none transition sm:text-xl ${
                    isActive
                      ? "bg-yep-blue text-yep-yellow"
                      : "bg-transparent text-yep-black hover:bg-yep-blue hover:text-yep-yellow"
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </nav>
        </header>

        <div className="mt-16 space-y-20">
          {visibleSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-10">
              <h2 className="font-viga text-center text-5xl font-black uppercase tracking-[0.04em] sm:text-6xl">
                {section.title}
              </h2>
              <p className="mx-auto mt-4 max-w-5xl text-center text-sm font-semibold text-yep-black/85 sm:text-base">
                {section.intro}
              </p>

              <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
                {[...section.members].reverse().map((member) => (
                  <article
                    key={member.id}
                    className="mx-auto flex w-full max-w-[285px] flex-col"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedMemberId(member.id)}
                      className="group relative w-full cursor-pointer rounded-[14px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-yep-blue"
                      aria-label={`Open details for ${member.name}`}
                    >
                      <div
                        className="aspect-[3/4] rounded-[14px] border-2 border-yep-blue bg-[#cdced5] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                        style={
                          member.imageUrl
                            ? { backgroundImage: `url(\"${member.imageUrl}\")` }
                            : undefined
                        }
                      />
                      <div className="absolute -bottom-8 left-12 w-[86%] rounded-[14px] border-2 border-yep-blue bg-yep-blue px-3 py-3 text-center text-yep-yellow">
                        <p className="font-viga text-[2.05rem] font-black leading-none">
                          {member.name}
                        </p>
                        <p className="font-viga mt-1 text-[0.74rem] font-bold tracking-wide">
                          {member.role}
                        </p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="/contact"
                  className="font-viga mt-[30px] w-full max-w-sm rounded-xl border-2 border-yep-blue-border px-5 py-3 text-center text-sm font-black uppercase tracking-widest transition hover:bg-yep-blue hover:text-yep-yellow"
                >
                  Apply Here
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Member modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMember.name} details`}
          onClick={() => setSelectedMemberId(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border-2 border-yep-blue-border bg-yep-yellow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMemberId(null)}
              className="font-viga absolute right-3 top-3 z-10 rounded-md border border-yep-blue-border bg-yep-yellow px-3 py-1 text-sm font-black text-yep-black hover:bg-yep-blue hover:text-yep-yellow"
            >
              Close
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[45%_55%]">
              <div
                className="aspect-[4/5] border-b-2 border-yep-blue-border bg-[#cdced5] bg-cover bg-center md:aspect-auto md:min-h-[520px] md:border-b-0 md:border-r-2"
                style={
                  selectedMember.imageUrl
                    ? { backgroundImage: `url(\"${selectedMember.imageUrl}\")` }
                    : undefined
                }
              />

              <div className="p-6 pt-14 sm:p-8 sm:pt-16 md:p-10 md:pt-12">
                <p className="font-viga text-sm font-black tracking-widest text-yep-blue">
                  {selectedMember.role}
                </p>
                <h3 className="font-viga mt-2 text-4xl font-black leading-tight text-yep-black sm:text-5xl">
                  {selectedMember.name}
                </h3>
                {selectedMember.classYear ? (
                  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-yep-black/80">
                    Class of {selectedMember.classYear}
                  </p>
                ) : null}
                <p className="mt-5 text-base font-medium leading-relaxed text-yep-black sm:text-lg">
                  {selectedMember.blurb}
                </p>
                {selectedMember.email ? (
                  <a
                    className="mt-6 inline-block text-base font-semibold underline text-yep-black"
                    href={`mailto:${selectedMember.email}`}
                  >
                    {selectedMember.email}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
