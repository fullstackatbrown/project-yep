"use client";

import { useEffect, useMemo, useState } from "react";
import { teamSections } from "../data/Team";

export default function TeamPage() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  const activeSection = useMemo(
    () => teamSections.find((section) => section.id === activeSectionId) ?? null,
    [activeSectionId]
  );

  const selectedMember = useMemo(() => {
    if (selectedMemberId === null) {
      return null;
    }

    for (const section of teamSections) {
      const member = section.members.find((item) => item.id === selectedMemberId);
      if (member) {
        return member;
      }
    }

    return null;
  }, [selectedMemberId]);

  const visibleSections = useMemo(
    () => (activeSection ? [activeSection] : teamSections),
    [activeSection]
  );

  useEffect(() => {
    if (!selectedMember) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMemberId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <main className="min-h-screen bg-[#f0d777] px-6 py-10 text-[#0f0f2d] font-vazirmatn sm:px-10 md:px-14 md:py-12">
      <div className="mx-auto max-w-7xl">
        <header>
          <h1 className="font-viga text-5xl font-black uppercase tracking-tight sm:text-6xl">Our Team</h1>
          <nav className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {teamSections.map((section) => {
              const isActive = section.id === activeSectionId;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    setActiveSectionId((currentSectionId) =>
                      currentSectionId === section.id ? null : section.id
                    );
                    setSelectedMemberId(null);
                  }}
                  className={`font-viga rounded-xl border-2 border-[#4e5676] px-4 py-3 text-center text-lg font-black leading-none transition sm:text-xl ${
                    isActive
                      ? "bg-[#121b4f] text-[#f0d777]"
                      : "bg-transparent text-[#0f0f2d] hover:bg-[#121b4f] hover:text-[#f0d777]"
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
              <p className="mx-auto mt-4 max-w-5xl text-center text-sm font-semibold text-[#0f0f2d]/85 sm:text-base">
                {section.intro}
              </p>

              <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
                {section.members.map((member) => (
                  <article key={member.id} className="mx-auto flex w-full max-w-[285px] flex-col">
                    <button
                      type="button"
                      onClick={() => setSelectedMemberId(member.id)}
                      className="group relative w-full cursor-pointer rounded-[14px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#121b4f]"
                      aria-label={`Open details for ${member.name}`}
                    >
                      <div className="aspect-[3/4] rounded-[14px] border-2 border-[#1a2054] bg-[#cdced5] transition-transform duration-500 group-hover:scale-[1.03]" />

                      <div className="absolute -bottom-8 left-12 w-[86%] rounded-[14px] border-2 border-[#1a2054] bg-[#121b4f] px-3 py-3 text-center text-[#f0d777]">
                        <p className="font-viga text-[2.05rem] font-black leading-none">{member.name}</p>
                        <p className="font-viga mt-1 text-[0.74rem] font-bold tracking-wide">{member.role}</p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="#"
                  className="font-viga mt-[30px] w-full max-w-sm rounded-xl border-2 border-[#4e5676] px-5 py-3 text-center text-sm font-black uppercase tracking-widest transition hover:bg-[#121b4f] hover:text-[#f0d777]"
                >
                  Apply Here
                </a>
              </div>
            </section>
          ))}
        </div>

        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedMember.name} details`}
            onClick={() => setSelectedMemberId(null)}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border-2 border-[#4e5676] bg-[#f4df84]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedMemberId(null)}
                className="font-viga absolute right-3 top-3 z-10 rounded-md border border-[#4e5676] bg-[#f0d777] px-3 py-1 text-sm font-black text-[#0f0f2d] hover:bg-[#121b4f] hover:text-[#f0d777]"
              >
                Close
              </button>

              <div className="grid grid-cols-1 md:grid-cols-[45%_55%]">
                <div className="aspect-[4/5] border-b-2 border-[#4e5676] bg-[#cdced5] md:aspect-auto md:min-h-[520px] md:border-b-0 md:border-r-2" />

                <div className="p-6 pt-14 sm:p-8 sm:pt-16 md:p-10 md:pt-12">
                  <p className="font-viga text-sm font-black tracking-widest text-[#121b4f]">{selectedMember.role}</p>
                  <h3 className="font-viga mt-2 text-4xl font-black leading-tight text-[#0f0f2d] sm:text-5xl">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-relaxed text-[#0f0f2d] sm:text-lg">
                    {selectedMember.blurb}
                  </p>
                  <a
                    className="mt-6 inline-block text-base font-semibold underline text-[#0f0f2d]"
                    href={`mailto:${selectedMember.email}`}
                  >
                    {selectedMember.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
