import ArtworkGrid from "./components/CardGrid";
import FullWidthCard from "./components/FullWidthCard";
import Masthead from "./components/Masthead";
import { mockArtworks } from "./data/Programs";

const heroImages = [
  "/heroImage1.png",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFDE7C]">
      {/* Hero masthead */}
      <Masthead
        images={heroImages}
        heading="YEP@Brown"
        ctaText="Join Now"
        ctaHref="#"
      />

      {/* Programs section */}
      <div className="px-8 py-8 sm:px-14">
      {/* Header row */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tight text-[#0f0f2d]">
            Our Programs
          </h1>
          <p className="mt-2 text-sm text-[#0f0f2d]/70">
            Text about what programs are offered and for who go here.
          </p>
        </div>
        <a
          href="#"
          className="mt-1 rounded-lg border-2 border-[#0f0f2d] px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#0f0f2d] transition hover:bg-[#0f0f2d] hover:text-[#FFD93D]"
        >
          Apply Here
        </a>
      </div>

      {/* Program grid */}
      <div className="mt-8">
        <ArtworkGrid artworks={mockArtworks} />
        </div>
        
        {/* Our History */}
      <div className="mt-12">
        <FullWidthCard
          title="Our History"
          body="YEP! was founded in 2019 by three Brown University students: Audrey Shapiro, Lucia Winton, and Leah Lam to address strained town-gown relations and the lack of entrepreneurship opportunities in under-resourced communities."
        />
      </div>
      </div>
    </main>
  );
}
