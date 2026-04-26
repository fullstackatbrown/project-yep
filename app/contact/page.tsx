"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen w-full bg-[#FFDE7C] flex flex-col items-center relative pb-32">

      {/* HEADER BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-[#141837] z-0 rounded-b-[2rem]"></div>

      <div className="w-full max-w-5xl px-8 md:px-0 pt-[180px] z-10 flex flex-col items-center">

        {/* TITLE & BUTTON */}
        <div className="w-full flex justify-between items-end mb-12">
          <h1
            className="text-[#141837] font-black tracking-wide uppercase"
            style={{ fontFamily: "'Arial Black', sans-serif", fontSize: "2.5rem" }}
          >
            Contact Us
          </h1>

          <Link
            href="/apply"
            className="border-[2px] border-[#141837] text-[#141837] font-black text-xs px-4 py-3.5 rounded transition-all duration-200 hover:-translate-y-1 hover:bg-[#141837] hover:text-[#FFDE7C]"
          >
            APPLY HERE
          </Link>
        </div>

        {/* CONTACT CARD */}
        <div className="w-full bg-[#141837] rounded-[2rem] py-14 px-10 md:px-16 shadow-lg">

          <p className="text-white font-semibold text-sm leading-relaxed mb-10">
            Please email us any questions you may have at{" "}
            <a
              href="mailto:pvd.outreach@yepprogram.org"
              className="font-black underline underline-offset-2"
            >
              pvd.outreach@yepprogram.org
            </a>
            . If you would like to join our mailing list for more updates and monthly newsletters, please fill out our contact form!
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="text-[#FFDE7C] font-black text-2xl uppercase tracking-wide">
                Thanks for reaching out!
              </div>
              <p className="text-white font-semibold text-sm">
                We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-white font-black text-xs uppercase tracking-widest"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#E5E6EB] rounded-lg px-4 py-3 text-[#141837] font-semibold text-sm outline-none focus:ring-2 focus:ring-[#FFDE7C] transition-all"
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-white font-black text-xs uppercase tracking-widest"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#E5E6EB] rounded-lg px-4 py-3 text-[#141837] font-semibold text-sm outline-none focus:ring-2 focus:ring-[#FFDE7C] transition-all"
                  placeholder=""
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-white font-black text-xs uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#E5E6EB] rounded-lg px-4 py-3 text-[#141837] font-semibold text-sm outline-none focus:ring-2 focus:ring-[#FFDE7C] transition-all resize-none"
                  placeholder=""
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end mt-2">
                <button
                  onClick={handleSubmit}
                  className="border-[2px] border-[#FFDE7C] text-[#FFDE7C] font-black text-xs px-8 py-3.5 rounded transition-all duration-200 hover:-translate-y-1 hover:bg-[#FFDE7C] hover:text-[#141837]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}