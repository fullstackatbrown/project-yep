import Image from "next/image";
import { Artwork } from "../data/Programs";

interface CardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

function getPreview(description: string): string {
  if (description.length <= 100) return description;
  return `${description.slice(0, 100).trimEnd()}...`;
}

export default function Card({ artwork, onClick }: CardProps) {
  const preview = getPreview(artwork.description);

  return (
    <button
      onClick={() => onClick(artwork)}
      className="group relative w-full cursor-pointer overflow-hidden rounded-[18px] border-2 border-yep-blue-border focus:outline-none focus-visible:ring-2 focus-visible:ring-yep-black"
      style={{ aspectRatio: "0.62" }}
      aria-label={artwork.title}
    >
      {/* Full-bleed image */}
      <Image
        src={artwork.imageUrl}
        alt={artwork.title}
        fill
        sizes="(max-width: 600px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        quality={100}
      />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-left sm:p-5">
        {artwork.years ? (
          <p className="font-viga text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/80">
            {artwork.years}
          </p>
        ) : null}
        <h3 className="font-viga mt-2 text-[2rem] font-black leading-[0.95] text-white sm:text-[2.15rem]">
          {artwork.title}
        </h3>
        <p className="mt-1 text-sm leading-snug text-white/85">
          {preview}
        </p>
      </div>
    </button>
  );
}
