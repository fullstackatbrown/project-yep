import Link from "next/link";

const forms = [
  {
    key: "general",
    title: "General Interest Form",
    subtitle: "Are you a high school student interested in starting your own business?",
    description:
      "Our spring incubator is currently closed. Our student showcase will occur on April 15th 5–7pm. For application details of our upcoming programs (summer and fall incubators) please fill out our general interest form.",
    buttonText: "General Interest Form",
    link: "https://forms.google.com/placeholder-general",
    photo: "/apply_general.jpeg",
  },
  {
    key: "student",
    title: "Student Application",
    subtitle: "Ready to build your business idea?",
    description:
      "Apply to join YEP!@Brown's incubator program as a student entrepreneur. This is a free program open to high school students in the Providence area. Spots are limited — apply early!",
    buttonText: "Student Application Form",
    link: "https://forms.google.com/placeholder-student",
    photo: "/apply_student.jpeg",
  },
  {
    key: "parent",
    title: "Parent / Guardian Form",
    subtitle: "Want to learn more about the program?",
    description:
      "We welcome parents and guardians to fill out this form to stay informed about YEP!@Brown, upcoming events, and how your student can get involved.",
    buttonText: "Parent / Guardian Form",
    link: "https://forms.google.com/placeholder-parent",
    photo: null,
  },
];

export default function Apply() {
  return (
    <main className="min-h-screen w-full bg-[#FFDE7C] flex flex-col items-center relative pb-48">

      {/* HEADER BAR */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-[#141837] z-0 rounded-b-[2rem]" />

      <div className="w-full max-w-5xl px-8 md:px-0 pt-[180px] z-10 flex flex-col items-center">

        {/* TITLE ROW */}
        <div className="w-full flex justify-between items-end mb-16">
          <h1
            className="text-[#141837] font-black tracking-wide uppercase"
            style={{ fontFamily: "'Arial Black', sans-serif", fontSize: "2.5rem" }}
          >
            Apply
          </h1>
          <Link
            href="/contact"
            className="border-[2px] border-[#141837] text-[#141837] font-black text-xs px-4 py-3.5 rounded transition-all duration-200 hover:-translate-y-1 hover:bg-[#141837] hover:text-[#FFDE7C]"
          >
            CONTACT US
          </Link>
        </div>

        {/* FORM CARDS */}
        <div className="w-full flex flex-col gap-64">
          {forms.map((form, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={form.key} className="w-full relative" style={{ marginBottom: "80px" }}>

                {/* PHOTO BUBBLE */}
                <div
                  className="w-full rounded-[2rem] overflow-hidden border-[1.5px] border-[#141837] shadow-md"
                  style={{ height: "400px" }}
                >
                  {form.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={form.photo}
                      alt={form.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#d9d9d9] flex items-center justify-center">
                      <span className="text-[#141837] font-black text-sm uppercase tracking-widest opacity-40">
                        Photo Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* INFO BUBBLE — overlapping from bottom */}
                <div
                  className="absolute w-[92%] md:w-[56%] bg-[#E5E6EB] border-[1.5px] border-[#141837] rounded-[2rem] p-8 md:p-10 shadow-xl"
                  style={{
                    bottom: "-180px",
                    [isEven ? "right" : "left"]: "0",
                  }}
                >
                  <p className="text-[#141837] font-semibold text-[10px] mb-2 opacity-60 uppercase tracking-widest">
                    {form.subtitle}
                  </p>
                  <h2
                    className="text-[#141837] font-black text-xl md:text-2xl mb-4 uppercase tracking-wide leading-tight"
                    style={{ fontFamily: "'Arial Black', sans-serif" }}
                  >
                    {form.title}
                  </h2>
                  <p className="text-[#141837] font-semibold text-sm leading-relaxed mb-6">
                    {form.description}
                  </p>
                  <a
                    href={form.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#141837] text-[#FFDE7C] font-black text-xs px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-1 hover:opacity-80"
                  >
                    {form.buttonText}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}