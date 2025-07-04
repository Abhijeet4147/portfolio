import React, { useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const activeSection = useActiveSection(["home", "experience", "skills", "projects", "contact"]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 flex justify-center w-full pointer-events-none">
      <div className="pointer-events-auto bg-black/70 rounded-full px-8 py-4 flex items-center gap-6 backdrop-blur-xl max-w-3xl w-[85vw] mx-auto relative">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center text-white focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Nav links - desktop */}
        <ul className="hidden md:flex items-center gap-4 md:gap-6 w-full justify-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`px-6 py-2 rounded-full font-bold text-base md:text-lg transition-all duration-200 text-white relative
                  ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-gradient-to-r from-purple-700 to-violet-600 text-white"
                      : "hover:text-violet-400 hover:underline hover:underline-offset-8"
                  }
                `}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-1/2 -translate-x-1/2 bg-black/90 rounded-xl py-4 px-8 flex flex-col gap-4 items-center md:hidden w-64 z-50">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full">
                <a
                  href={link.href}
                  className={`block w-full px-4 py-2 rounded-full font-bold text-base transition-all duration-200 text-white text-center
                    ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-gradient-to-r from-purple-700 to-violet-600 text-white"
                        : "hover:text-violet-400 hover:underline hover:underline-offset-8"
                    }
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
