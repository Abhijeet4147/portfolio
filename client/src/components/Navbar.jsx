import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 pointer-events-none">
      <div
        className={`pointer-events-auto rounded-full px-6 py-4 flex items-center gap-1 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
            : "bg-transparent"
        }`}
      >
        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.label} className="relative">
                <a
                  href={link.href}
                  className="relative z-10 px-5 py-2 rounded-full text-base font-medium transition-colors duration-200 block"
                  style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.6)" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-700 to-purple-600"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto flex items-center justify-center text-white focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Open navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-2 bg-black/90 backdrop-blur-xl rounded-2xl py-3 px-4 flex flex-col gap-1 border border-white/10 pointer-events-auto"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-700 to-purple-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
