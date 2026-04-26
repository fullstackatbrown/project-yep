import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-[#FFDE7C] flex flex-col items-center relative pb-32">
      
      {/* 1. HEADER BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-[#141837] z-0 rounded-b-[2rem]"></div>

      <div className="w-full max-w-5xl px-8 md:px-0 pt-[180px] z-10 flex flex-col items-center">
        
        {/* --- TITLE & BUTTON SECTION --- */}
        <div className="w-full flex justify-between items-end mb-12">
          <h1 
            className="text-[#141837] font-black tracking-wide uppercase" 
            style={{ fontFamily: "'Arial Black', sans-serif", fontSize: "2.5rem" }}
          >
            About Us
          </h1>
          
          <Link 
            href="/apply"
            className="border-[2px] border-[#141837] text-[#141837] font-black text-xs px-4 py-3.5 rounded transition-all duration-200 hover:-translate-y-1 hover:bg-[#141837] hover:text-[#FFDE7C]"
          >
            APPLY HERE
          </Link>
        </div>

        {/* --- LARGE IMAGE/VIDEO PLACEHOLDER --- */}
        <div className="w-full h-[60vh] min-h-[400px] bg-[#d9d9d9] rounded-[2rem] border-[1.5px] border-[#141837] mb-32 shadow-sm"></div>

        {/* --- OUR 3 MISSIONS SECTION --- */}
        <div className="w-full relative flex items-center justify-end mb-32 min-h-[450px]">
          
          {/* Dark Blue Background Box */}
          <div className="w-[85%] md:w-[75%] h-full min-h-[450px] bg-[#141837] rounded-[2rem]"></div>
          
          {/* Overlapping Light Grey Text Box */}
          <div className="absolute left-0 w-[90%] md:w-[55%] bg-[#E5E6EB] border-[1.5px] border-[#141837] rounded-[2rem] p-8 md:p-12 shadow-lg">
            <h2 className="text-[#141837] font-black text-2xl md:text-3xl mb-6 uppercase tracking-wide">
              Our 3 Missions
            </h2>
            <ol className="list-decimal pl-4 text-[#141837] space-y-4 font-semibold text-sm leading-relaxed">
              <li>Develop capable entrepreneurs who will grow the resources and wealth of their respective communities.</li>
              {/* FIXED: Replaced ' with &apos; */}
              <li>Grow its participants&apos;, aka you guys&apos;, Confidence.</li>
              <li>Improve the relationship between universities and their local community.</li>
            </ol>
          </div>
        </div>

        {/* --- OUR HISTORY SECTION --- */}
        <div className="w-full min-h-[450px] flex flex-col justify-between bg-[#E5E6EB] border-[1.5px] border-[#141837] rounded-[2rem] py-16 px-10 md:px-24 text-center mb-32 shadow-sm">
          <h2 className="text-[#141837] font-black text-3xl uppercase tracking-wide">
            Our History
          </h2>
          
          <div className="flex-grow"></div>
          
          <p className="text-[#141837] font-semibold text-sm leading-relaxed">
            YEP! was founded in 2019 by three Brown University students- Audrey Shapiro, Lucas Watson, and Leah Lam to address strained town-gown relations and the lack of entrepreneurship opportunities in under-resourced communities.
          </p>
        </div>

        {/* --- YEP NATIONAL SECTION --- */}
        <div className="w-full flex flex-col items-center bg-[#E5E6EB] border-[1.5px] border-[#141837] rounded-[2rem] py-16 px-10 md:px-24 text-center shadow-sm">
          <h2 className="text-[#141837] font-black text-3xl mb-12 uppercase tracking-wide">
            YEP National
          </h2>
          {/* FIXED: Replaced ' with &apos; */}
          <p className="text-[#141837] font-semibold text-sm leading-relaxed mb-10">
            YEP!@Brown is one of YEP National&apos;s seven chapters across the world! YEP National has chapters in Providence, New Haven, Berkeley, Los Angeles, Santa Barbara, New York City, and Australia
          </p>
          
          <Link 
            href="/national"
            className="border-[2px] border-[#141837] text-[#141837] font-black text-xs px-6 py-3 rounded transition-all duration-200 hover:-translate-y-1 hover:bg-[#141837] hover:text-[#FFDE7C]"
          >
            LEARN MORE
          </Link>
        </div>

      </div>
    </main>
  );
}