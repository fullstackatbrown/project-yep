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
    description: "YEP 1.0 is our semester-long after-school program that provides an immersive and hands-on experience that introduces high school students to the entrepreneurial process and equips them with the skills necessary to develop and pitch their own business ideas. Spanning 5 to 7 weeks, the program provides structured learning and mentorship in an engaging, university-led environment.",
  },
  {
    id: 2,
    artist: "YEP",
    years: "Intermediate",
    title: "YEP 2.0",
    imageUrl: "/yep2.png",
    description: "Building upon the foundation established in YEP 1.0, our YEP 2.0 program offers returning students who have already completed the YEP 1.0 program the opportunity to take their entrepreneurial ventures to the next level! YEP 2.0 students continue to receive mentorship from Brown University students and get to go more in-depth into the entrepreneurial and business scaling process. YEP 2.0 is the perfect program for students interested in helping their business grow!",
  },
  {
    id: 3,
    artist: "YEP",
    years: "All levels",
    title: "YEP Summer Camp",
    imageUrl: "/camp.png",
    description: "Join us for an exciting summer camp where high school students can dive deep into the world of entrepreneurship! Our YEP Summer Camp offers a unique opportunity to learn from experienced mentors and peers, while building valuable skills and connections.",
  },
];
