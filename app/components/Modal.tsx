"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Artwork } from "../data/Programs";

interface ModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function Modal({ artwork, onClose }: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent background scroll while open
  useEffect(() => {
    document.body.style.overflow = artwork ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [artwork]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
    >
      <div
        className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl sm:grid-cols-[280px_1fr]"
        style={{ maxHeight: "80vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/70"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image panel — matches grid card style */}
        <div className="relative hidden sm:block">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            sizes="280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-viga text-xl font-black leading-tight text-white">
              {artwork.title}
            </h3>
          </div>
        </div>

        {/* Content panel */}
        <div className="flex flex-col justify-start gap-4 p-8">
          <p className="font-viga text-xs font-semibold uppercase tracking-widest text-orange-500">
            {artwork.years}
          </p>
          <h2 className="font-viga text-2xl font-black uppercase leading-tight tracking-tight text-white">
            {artwork.title}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            {artwork.description}
          </p>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(
              artwork.artist + " " + artwork.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-viga mt-2 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            Learn more ↗
          </a>
        </div>
      </div>
    </div>
  );
}
