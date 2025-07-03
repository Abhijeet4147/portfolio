import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/Abhijeet4147",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/abhijeet-mundhe-59578b207/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "mailto:abhijeetmundhe55@gmai.com",
    icon: <FaEnvelope />,
    label: "Email",
  }
];

const Footer = () => (
  <footer className="bg-[#0a0a0f] pb-2 px-2 text-gray-400 text-sm">
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Social Icons */}
      <div className="flex gap-8 mb-2">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#232336] hover:bg-violet-700 text-white text-2xl transition shadow-lg"
          >
            {s.icon}
          </a>
        ))}
      </div>
      {/* Divider with purple dot */}
      <div className="flex items-center w-full max-w-xs mx-auto">
        <div className="flex-1 h-px bg-gray-700" />
        <span className="mx-3 w-2 h-2 rounded-full bg-violet-600 block" />
        <div className="flex-1 h-px bg-gray-700" />
      </div>
      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-2">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 