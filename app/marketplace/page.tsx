"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { marketplaceBusinesses } from "../data/MarketplaceBusinesses";
import type { MarketplaceBusiness } from "../data/MarketplaceBusinesses";

function getSiteDomain(website: string): string {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website;
  }
}

export default function MarketplacePage() {
  const [query, setQuery] = useState("");
  const [selectedBusinessId, setSelectedBusinessId] = useState<number | null>(
    null
  );

  const selectedBusiness = useMemo((): MarketplaceBusiness | null => {
    if (selectedBusinessId === null) return null;
    return (
      marketplaceBusinesses.find((business) => business.id === selectedBusinessId) ??
      null
    );
  }, [selectedBusinessId]);

  const filteredBusinesses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return marketplaceBusinesses.filter((business) => {
      if (!normalizedQuery) return true;

      const haystack = [
        business.name,
        business.blurb,
        business.description,
        business.cohort,
        business.founders.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  const totalFounders = useMemo(
    () =>
      marketplaceBusinesses.reduce(
        (count, business) => count + business.founders.length,
        0
      ),
    []
  );

  useEffect(() => {
    if (!selectedBusiness) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedBusinessId(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedBusiness]);

  return (
    <main className="min-h-screen bg-yep-yellow font-vazirmatn text-yep-black">
      <section className="marketplace-hero relative overflow-hidden border-b-2 border-yep-black">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-10 md:pb-12 md:pt-16">
          <p className="font-viga text-xs font-black uppercase tracking-[0.2em] text-yep-black/75">
            YEP Marketplace
          </p>
          <div className="mt-5 grid items-start gap-7 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
            <div>
              <h1 className="font-viga text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
                Businesses Built Through YEP
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-yep-black/85 sm:text-base">
                Explore youth-founded businesses from the YEP program and meet the
                student teams behind each venture.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border-2 border-yep-black bg-yep-yellow/75 p-4 backdrop-blur">
                <p className="font-viga text-[0.68rem] font-black uppercase tracking-[0.16em] text-yep-black/65">
                  Businesses
                </p>
                <p className="font-viga mt-2 text-4xl font-black leading-none">
                  {marketplaceBusinesses.length}
                </p>
              </div>
              <div className="rounded-2xl border-2 border-yep-black bg-yep-yellow/75 p-4 backdrop-blur">
                <p className="font-viga text-[0.68rem] font-black uppercase tracking-[0.16em] text-yep-black/65">
                  Student Founders
                </p>
                <p className="font-viga mt-2 text-4xl font-black leading-none">
                  {totalFounders}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace-grid" className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-10 md:pb-20">
        <div className="rounded-2xl border-2 border-yep-black bg-yep-yellow/70 p-4 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="w-full">
              <span className="font-viga block text-xs font-black uppercase tracking-[0.14em] text-yep-black/65">
                Search
              </span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Business name, founder, or cohort"
                className="mt-2 w-full rounded-xl border-2 border-yep-black bg-white/80 px-4 py-3 text-sm outline-none transition focus:bg-white"
              />
            </label>
          </div>
        </div>

        <div className="mt-7">
          {filteredBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredBusinesses.map((business) => (
                <article key={business.id} className="group flex flex-col">
                  <button
                    type="button"
                    onClick={() => setSelectedBusinessId(business.id)}
                    className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-yep-black"
                    aria-label={`Open details for ${business.name}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border-2 border-yep-black bg-yep-blue">
                      <Image
                        src={business.imageUrl}
                        alt={`${business.name} visual`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        quality={100}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white sm:p-5">
                        <h2 className="font-viga text-3xl font-black uppercase leading-[0.95] sm:text-[2.15rem]">
                          {business.name}
                        </h2>
                        <p className="mt-2 text-sm leading-snug text-white/88">
                          {business.blurb}
                        </p>
                        <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                          {getSiteDomain(business.website)}
                        </p>
                      </div>
                    </div>
                  </button>

                  <div className="mt-3 text-[0.66rem] font-semibold uppercase tracking-wide text-yep-black/80">
                    <span>{business.cohort}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-yep-black bg-white/60 p-8 text-center">
              <p className="font-viga text-2xl font-black uppercase tracking-wide">
                No Businesses Found
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm text-yep-black/80">
                Try adjusting your search to see more YEP ventures.
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedBusiness && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedBusiness.name} details`}
          onClick={() => setSelectedBusinessId(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border-2 border-yep-black bg-yep-yellow"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedBusinessId(null)}
              className="font-viga absolute right-3 top-3 z-10 rounded-md border border-yep-black bg-yep-yellow px-3 py-1 text-sm font-black hover:bg-yep-black hover:text-yep-yellow"
            >
              Close
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[44%_56%]">
              <div className="relative aspect-[4/5] border-b-2 border-yep-black md:aspect-auto md:min-h-[560px] md:border-b-0 md:border-r-2">
                <Image
                  src={selectedBusiness.imageUrl}
                  alt={`${selectedBusiness.name} visual`}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              </div>

              <div className="p-6 pt-14 sm:p-8 sm:pt-16 md:p-10 md:pt-12">
                <h2 className="font-viga text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
                  {selectedBusiness.name}
                </h2>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-yep-black/80">
                  {selectedBusiness.blurb}
                </p>

                <dl className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-viga text-[0.62rem] font-black uppercase tracking-[0.18em] text-yep-black/65">
                      Founders
                    </dt>
                    <dd className="mt-1 font-semibold text-yep-black">
                      {selectedBusiness.founders.join(", ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-viga text-[0.62rem] font-black uppercase tracking-[0.18em] text-yep-black/65">
                      Cohort
                    </dt>
                    <dd className="mt-1 font-semibold text-yep-black">
                      {selectedBusiness.cohort}
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-relaxed text-yep-black/90">
                  {selectedBusiness.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={selectedBusiness.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-viga rounded-xl border-2 border-yep-black bg-yep-black px-5 py-2 text-xs font-black uppercase tracking-widest text-yep-yellow transition hover:bg-yep-blue"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
