import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => (
  <motion.section
    id="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center justify-center h-screen -mt-15 text-center px-4 relative overflow-hidden"
  >
    {/* Background glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white flex items-center justify-center gap-3 drop-shadow-[0_2px_16px_rgba(168,85,247,0.5)]">
        Hello
        <span className="inline-block animate-wave origin-bottom">👋🏻</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">
        I'm{" "}
        <span className="text-violet-400 font-extrabold drop-shadow-[0_2px_16px_rgba(168,85,247,0.7)]">
          Abhijeet Mundhe
        </span>
        , a DevOps Engineer.
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-400">
        Passionate about building scalable, automated infrastructure and efficient CI/CD pipelines.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <a
          href="#projects"
          className="flex items-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-violet-700 to-purple-600 text-white font-semibold shadow-xl hover:scale-105 hover:from-violet-800 hover:to-purple-700 transition-transform duration-200"
        >
          My Projects
        </a>
        <a
          href="#experience"
          className="flex items-center gap-2 px-7 py-3 rounded-lg border border-violet-500/50 text-violet-300 font-semibold hover:bg-violet-900/30 hover:border-violet-400 transition"
        >
          Experience →
        </a>
      </div>

      {/* Social links */}
      <div className="flex gap-4 justify-center">
        <a
          href="https://github.com/Abhijeet4147"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white text-xl hover:bg-violet-700 hover:border-violet-500 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhijeet-mundhe-59578b207/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white text-xl hover:bg-violet-700 hover:border-violet-500 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.div>

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
