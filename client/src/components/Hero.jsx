import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-[#0a0a0f] relative overflow-hidden"
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white flex items-center justify-center gap-2 drop-shadow-[0_2px_16px_rgba(168,85,247,0.5)]">
      Hello
      <span className="inline-block animate-wave origin-bottom">👋🏻</span>
    </h1>
    <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">
      I'm <span className="text-violet-400 font-extrabold drop-shadow-[0_2px_16px_rgba(168,85,247,0.7)]">Abhijeet Mundhe</span>, a DevOps Engineer.
    </h2>
    <p className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-200">
       I'm a DevOps Engineer with a passion for building scalable and efficient systems.
    </p>
    <div className="flex gap-4 justify-center">
      <a
        href="#projects"
        className="flex items-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-violet-700 to-purple-600 text-white font-semibold shadow-xl hover:scale-105 hover:from-violet-800 hover:to-purple-700 transition-transform duration-200 drop-shadow-[0_2px_16px_rgba(168,85,247,0.5)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4m0 0V7m0 4l-4-4m4 4l4-4" /></svg>
        My Projects
      </a>
      <a
        href="#experience"
        className="flex items-center gap-2 px-7 py-3 rounded-lg border border-violet-400 text-violet-300 font-semibold hover:bg-violet-900/20 transition drop-shadow-[0_2px_16px_rgba(168,85,247,0.3)]"
      >
        Experience
        <span className="ml-1">→</span>
      </a>
    </div>
    <style>{`
      .animate-wave {
        animation: wave 2s infinite;
      }
      @keyframes wave {
        0% { transform: rotate(0deg); }
        10% { transform: rotate(14deg); }
        20% { transform: rotate(-8deg); }
        30% { transform: rotate(14deg); }
        40% { transform: rotate(-4deg); }
        50% { transform: rotate(10deg); }
        60% { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
      }
    `}</style>
  </motion.section>
);

export default Hero; 