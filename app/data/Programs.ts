export interface Artwork {
  id: number;
  artist: string;
  years?: string;
  title: string;
  imageUrl: string;
  description: string;
}

export const mockArtworks: Artwork[] = [
  {
    id: 1,
    artist: "YEP",
    years: "Beginner",
    title: "YEP 1.0",
    imageUrl: "/yep1.png",
    description: "Text about YEP 1.0 goes here.",
  },
  {
    id: 2,
    artist: "YEP",
    years: "Intermediate",
    title: "YEP 2.0",
    imageUrl: "/yep2.png",
    description: "Text about YEP 2.0 goes here.",
  },
  {
    id: 3,
    artist: "YEP",
    years: "All levels",
    title: "YEP Summer Camp",
    imageUrl: "/camp.png",
    description: "Text about YEP Summer Camp goes here.",
  },
];
