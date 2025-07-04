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
      className="py-10 px-2 bg-[#0a0a0f] min-h-[30vh] flex items-center justify-center"
    >
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
        <div className="text-white flex flex-col gap-4 items-center text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Let's Connect</h3>
          <p className="text-base md:text-lg text-gray-300">
            I'm open to roles where I can bring value through my DevOps expertise and passion for building reliable, scalable systems.<br />
            If you think we'd be a good fit — feel free to reach out.
          </p>
          <a
            href="mailto:abhijeetmundhe55@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-700 to-violet-600 text-white rounded-lg font-medium text-base md:text-lg shadow-lg hover:from-purple-800 hover:to-violet-700 transition w-fit mt-2"
          >
            <FaPaperPlane className="text-lg" /> abhijeetmundhe55@gmail.com
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 