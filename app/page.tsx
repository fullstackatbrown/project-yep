import ArtworkGrid from "./components/CardGrid";
import FullWidthCard from "./components/FullWidthCard";
import Masthead from "./components/Masthead";
import { mockArtworks } from "./data/Programs";

const heroImages = [
  "/heroImage1.png",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFDE7C] font-vazirmatn">
      {/* Hero masthead */}
      <Masthead
        images={heroImages}
        heading="YEP@Brown"
        ctaText="Join Now"
        ctaHref="#"
      />

      {/* Programs section */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 md:py-16">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-viga text-4xl font-black uppercase tracking-tight text-[#0f0f2d] sm:text-5xl md:text-6xl">
              Our Programs
            </h1>
            <p className="mt-2 max-w-xl text-sm text-[#0f0f2d]/80 md:text-base">
              Text about what programs are offered and for who go here.
            </p>
          </div>
          <a
            href="#"
            className="font-viga w-fit rounded-xl border-2 border-[#0f0f2d] px-5 py-2 text-xs font-extrabold uppercase tracking-wide text-[#0f0f2d] transition hover:bg-[#0f0f2d] hover:text-[#FFDE7C]"
          >
            Apply Here
          </a>
        </div>

        {/* Program grid */}
        <div className="mt-10">
          <ArtworkGrid artworks={mockArtworks} />
        </div>

        {/* Our History */}
        <div className="mt-12">
          <FullWidthCard
            title="Our History"
            body="YEP! was founded in 2019 by three Brown University students: Audrey Shapiro, Lucia Winton, and Leah Lam to address strained town-gown relations and the lack of entrepreneurship opportunities in under-resourced communities."
          />
        </div>
      </section>
    </main>
  );
}
