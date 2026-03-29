"use client";

import { useState } from "react";
import { Artwork } from "../data/Programs";
import Card from "./Card";
import Modal from "./Modal";

interface CardGridProps {
  artworks: Artwork[];
}

export default function CardGrid({ artworks }: CardGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 md:gap-7">
        {artworks.map((artwork) => (
          <Card
            key={artwork.id}
            artwork={artwork}
            onClick={setSelectedArtwork}
          />
        ))}
      </div>

      <Modal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </>
  );
}
