"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Artwork } from "../data/Programs";

interface ModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function Modal({ artwork, onClose }: ModalProps) {
  useEffect(() => {
    if (!artwork) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, [artwork, onClose]);

  useEffect(() => {
    document.body.style.overflow = artwork ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [artwork]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
    >
      <div
        className="relative grid max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl border-2 border-yep-blue-border bg-yep-yellow shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:grid-cols-[42%_58%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="font-viga absolute right-3 top-3 z-10 rounded-md border border-yep-blue-border bg-yep-yellow px-3 py-1 text-sm font-black text-yep-black transition hover:bg-yep-blue hover:text-yep-yellow"
          aria-label="Close"
        >
          Close
        </button>

        <div className="relative aspect-[4/3] border-b-2 border-yep-blue-border md:aspect-auto md:min-h-[560px] md:border-b-0 md:border-r-2">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        </div>

        <div className="overflow-y-auto p-6 pt-14 sm:p-8 sm:pt-16 md:p-10 md:pt-14">
          {artwork.years ? (
            <p className="font-viga text-[0.7rem] font-black uppercase tracking-[0.18em] text-yep-blue">
              {artwork.years}
            </p>
          ) : null}
          <h2 className="font-viga mt-2 text-4xl font-black uppercase leading-[0.95] text-yep-black sm:text-5xl">
            {artwork.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-yep-black/90">
            {artwork.description}
          </p>

          <Link
            href="/contact"
            className="font-viga mt-5 inline-block text-sm font-black uppercase tracking-wide text-yep-black underline decoration-yep-black/60 underline-offset-4"
          >
            Questions? Contact the Team
          </Link>
        </div>
      </div>
    </div>
  );
}
