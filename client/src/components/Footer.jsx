import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { href: "https://github.com/Abhijeet4147", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abhijeet-mundhe-59578b207/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:abhijeetmundhe55@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

const Footer = () => (
  <footer className="border-t border-white/5 py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">

      {/* Social icons */}
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-violet-700/60 hover:border-violet-500/60 text-xl transition-all duration-200"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center w-full max-w-sm">
        <div className="flex-1 h-px bg-white/5" />
        <span className="mx-3 w-2 h-2 rounded-full bg-violet-600 block" />
        <div className="flex-1 h-px bg-white/5" />
      </div>

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2">
        <span className="text-xs text-gray-700">
          &copy; {new Date().getFullYear()} Abhijeet Mundhe. All rights reserved.
        </span>
        <span className="text-xs text-gray-700 font-mono">
          Built with React · Deployed on Render
        </span>
      </div>

    </div>
  </footer>
);

export default Footer;
