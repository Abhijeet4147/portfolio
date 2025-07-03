import React from "react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 flex justify-center w-full pointer-events-none">
    <div className="pointer-events-auto bg-black/70 rounded-full shadow-2xl px-8 py-4 flex items-center gap-6 border border-violet-700/40 backdrop-blur-xl max-w-3xl w-[85vw] mx-auto relative ring-1 ring-violet-700/20">
      <ul className="flex items-center gap-4 md:gap-6 w-full justify-center">
        {navLinks.map((link, idx) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`px-6 py-2 rounded-full font-bold text-base md:text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-600 text-white relative
                ${link.active
                  ? "bg-gradient-to-r from-purple-700 to-violet-600 shadow-lg text-white border-2 border-violet-400/80 drop-shadow-[0_2px_8px_rgba(168,85,247,0.7)] ring-2 ring-violet-500/40"
                  : "hover:text-violet-400 hover:underline hover:underline-offset-8"}
              `}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar; 