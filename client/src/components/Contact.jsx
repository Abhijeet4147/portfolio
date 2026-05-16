import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-28 px-4 border-t border-white/5"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">

        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs text-emerald-400 font-medium">Open to opportunities</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Let's Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
            Together
          </span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I'm open to DevOps roles where I can build scalable infrastructure and reliable systems.
          If you think we'd be a good fit — feel free to reach out.
        </p>

        <a
          href="mailto:abhijeetmundhe55@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-violet-700 to-purple-600 text-white rounded-xl font-semibold text-base shadow-lg shadow-violet-900/30 hover:from-violet-800 hover:to-purple-700 hover:scale-105 transition-all duration-200 mt-2"
        >
          <FaPaperPlane />
          abhijeetmundhe55@gmail.com
        </a>

      </div>
    </motion.section>
  );
};

export default Contact;
