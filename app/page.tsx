import Link from "next/link";
import ContentSection from "../components/ContentSection/ContentSection";
export default function Home() {
  return (
    // Figma Yellow #FFDE7C
    <main className="min-h-screen w-full flex flex-col bg-[#FFDE7C]">
      
      {/* --- HERO SECTION --- */}
      <section 
        className="relative w-full flex items-end justify-start pb-20 pl-8 md:pl-24"
        style={{ 
          height: '80vh', 
          minHeight: '500px',
          backgroundImage: "url('/yep_home_page.avif')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay so the header and text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/40 z-10"></div>
        
        <div className="relative z-20 flex flex-col items-start gap-4">
          <h1 
            className="text-white font-bold tracking-wide"
            style={{ 
              fontFamily: "'Arial Black', sans-serif", 
              fontSize: "clamp(3rem, 6vw, 4.5rem)", 
              textShadow: "2px 4px 10px rgba(0, 0, 0, 0.5)" 
            }}
          >
            YEP@Brown
          </h1>
          
          <Link 
            href="/apply" 
            className="bg-[#FFDE7C] text-[#141837] font-black text-sm px-5 py-3.5 rounded-md shadow-lg transition-transform hover:-translate-y-1"
          >
            JOIN NOW
          </Link>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="py-20 flex justify-center">
        <ContentSection 
          title="WHO WE ARE"
          text="YEP!@Brown is an entirely free entrepreneurship program for local high school students in college towns. The program is led and facilitated by university students. We believe that by opening Brown's doors to the Providence community, we will hopefully teach the entrepreneurial process to the next generation of change makers."
          imageSrc="/yep_whoweare.avif" 
          imageAlt="Students collaborating at a table"
          buttonText="ABOUT US"
          buttonLink="/about"
        />
      </div>

    </main>
  );
}