"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const headerBase = "top-0 z-40 w-full transition-colors duration-300";
  const headerScheme = isHome
    ? "fixed bg-transparent"
    : "sticky bg-yep-black border-b-2 border-yep-yellow/10";

  const logoScheme = isHome
    ? "border-white bg-transparent text-white shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white] active:shadow-[1px_1px_0px_white]"
    : "border-yep-yellow bg-yep-black text-yep-yellow shadow-[3px_3px_0px_var(--color-yep-yellow)] hover:shadow-[4px_4px_0px_var(--color-yep-yellow)] active:shadow-[1px_1px_0px_var(--color-yep-yellow)]";

  const linkScheme = isHome
    ? "text-white after:bg-white"
    : "text-yep-yellow after:bg-yep-yellow";

  const applyScheme = isHome
    ? "border-white text-white hover:bg-white hover:text-yep-black"
    : "border-yep-yellow text-yep-yellow hover:bg-yep-yellow hover:text-yep-black";

  const hamburgerScheme = isHome ? "bg-white" : "bg-yep-yellow";

  const mobileMenuScheme = isHome
    ? "border-white/20 bg-black/70 backdrop-blur-md"
    : "border-yep-yellow/10 bg-yep-black";

  const mobileLinkScheme = isHome ? "text-white" : "text-yep-yellow";

  const mobileApplyScheme = isHome
    ? "border-white text-white hover:bg-white hover:text-yep-black"
    : "border-yep-yellow text-yep-yellow hover:bg-yep-yellow hover:text-yep-black";

  return (
    <header className={`${headerBase} ${headerScheme}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        {/* Logo */}
        <Link
          href="/"
          className={`font-viga inline-flex items-center justify-center border-2 px-4 py-1.5 text-xl font-black italic transition hover:-translate-x-px hover:-translate-y-px active:translate-x-0.5 active:translate-y-0.5 ${logoScheme}`}
        >
          YEP!
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-viga relative text-sm font-black uppercase tracking-wide opacity-80 transition hover:opacity-100 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full ${linkScheme}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`font-viga rounded-xl border-2 px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition ${applyScheme}`}
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className={`block h-0.5 w-6 transition-all ${hamburgerScheme} ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all ${hamburgerScheme} ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all ${hamburgerScheme} ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className={`border-t-2 px-6 py-4 sm:hidden ${mobileMenuScheme}`}>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-viga block text-base font-black uppercase tracking-wide ${mobileLinkScheme}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`font-viga mt-2 block rounded-xl border-2 px-4 py-2 text-center text-xs font-extrabold uppercase tracking-wide transition ${mobileApplyScheme}`}
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
