import { NextResponse } from "next/server";

import { teamSections } from "@/app/data/Team";
import { getTeamSectionsFromCosmic } from "@/app/lib/cosmicTeam";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const sections = await getTeamSectionsFromCosmic();

  return NextResponse.json(
    {
      sections: sections ?? teamSections,
      source: sections ? "cosmic" : "local",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
