"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

interface MastheadProps {
  images: (string | StaticImageData)[];
  heading: string;
  ctaText?: string;
  ctaHref?: string;
  interval?: number;
}

export default function Masthead({
  images,
  heading,
  ctaText = "Join Now",
  ctaHref = "#",
  interval = 5000,
}: MastheadProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-advance carousel
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden rounded-b-3xl">
      {/* Carousel images */}
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          quality={100}
          unoptimized
          className={`object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-10 sm:p-16">
        <h1 className="text-5xl font-black text-white sm:text-7xl">
          {heading}
        </h1>
        <a
          href={ctaHref}
          className="mt-6 inline-block rounded-full bg-[#FFDE7C] px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#0f0f2d] transition hover:bg-[#f5d060]"
        >
          {ctaText}
        </a>
      </div>

      {/* Carousel indicators */}
      {images.length > 1 && (
        <>
          {/* Dots */}
          <div className="absolute bottom-6 right-10 flex gap-2 sm:right-16">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/60"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/60"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}
    </section>
  );
}
