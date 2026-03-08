import Image from "next/image";
import { Artwork } from "../data/Programs";

interface CardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

export default function Card({ artwork, onClick }: CardProps) {
  return (
    <button
      onClick={() => onClick(artwork)}
      className="group relative w-full overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
      style={{ aspectRatio: "357 / 604", maxHeight: "65vh" }}
      aria-label={artwork.title}
    >
      {/* Full-bleed image */}
      <Image
        src={artwork.imageUrl}
        alt={artwork.title}
        fill
        sizes="(max-width: 600px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        quality={100}
      />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
        <h3 className="text-2xl font-black text-white leading-tight">
          {artwork.title}
        </h3>
        <p className="mt-1 text-sm text-white/80 leading-snug">
          {artwork.description}
        </p>
      </div>
    </button>
  );
}
