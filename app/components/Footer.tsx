import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-yep-black/10 bg-yep-black px-6 py-16 text-yep-yellow sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-10">
        {/* Brand */}
        <div className="max-w-xs">
          <p className="font-viga text-sm font-black uppercase tracking-widest text-yep-yellow/60">
            YEP!@Brown
          </p>
          <h3 className="font-viga mt-2 text-2xl font-black leading-tight">
            Empowering Student Entrepreneurs
          </h3>
        </div>

        {/* Divider */}
        <div className="hidden w-px bg-yep-yellow/20 md:block" />

        {/* Contact info */}
        <div className="flex flex-col gap-1 text-sm text-yep-yellow/80">
          <p>(401) 863-1000</p>
          <p>yep@brown.edu</p>
          <p className="max-w-[260px]">
            Nelson Center For Entrepreneurship, Euclid Avenue, Providence, RI
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.instagram.com/yep.providence/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image src="/insta.svg" alt="Instagram" width={28} height={28} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm text-yep-yellow/80">
          <Link href="/faq" className="hover:text-yep-yellow transition">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-yep-yellow transition">
            Contact
          </Link>
          <Link href="/marketplace" className="hover:text-yep-yellow transition">
            Marketplace
          </Link>
          <Link href="/team" className="hover:text-yep-yellow transition">
            Our Team
          </Link>
          <span className="mt-2 text-yep-yellow/40 text-xs">
            © {new Date().getFullYear()} YEP!@Brown
          </span>
        </div>
      </div>
    </footer>
  );
}
