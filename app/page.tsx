import CardGrid from "./components/CardGrid";
import FullWidthCard from "./components/FullWidthCard";
import Masthead from "./components/Masthead";
import { mockArtworks } from "./data/Programs";

const heroImages = ["/heroImage1.png"];

export default function Home() {
  return (
    <main className="min-h-screen bg-yep-yellow font-vazirmatn">
      <Masthead
        images={heroImages}
        heading="YEP@Brown"
        ctaText="Apply Now"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 md:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-viga text-4xl font-black uppercase tracking-tight text-yep-black sm:text-5xl md:text-6xl">
              Our Programs
            </h1>
            <p className="mt-2 max-w-xl text-sm text-yep-black/80 md:text-base">
              From first-time founders to returning student entrepreneurs, YEP
              programs help participants build real ventures with mentorship,
              teamwork, and hands-on learning.
            </p>
          </div>
          <a
            href="/contact"
            className="font-viga w-fit rounded-xl border-2 border-yep-black px-5 py-2 text-xs font-extrabold uppercase tracking-wide text-yep-black transition hover:bg-yep-black hover:text-yep-yellow"
          >
            Apply Here
          </a>
        </div>

        <div className="mt-10">
          <CardGrid artworks={mockArtworks} />
        </div>

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
