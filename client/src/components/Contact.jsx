import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder: Add backend/email integration here
  };

  return (
    <section id="contact" className="py-20 px-2 bg-[#0a0a0f] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Info */}
        <div className="text-white flex flex-col gap-6 md:pr-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Let's work together</h3>
          <p className="text-base md:text-lg text-gray-300">I'm available for full-time roles & freelance projects.</p>
          <p className="text-base md:text-lg text-gray-300">My inbox is always open, whether you have a question or just want to say hi.</p>
          <p className="text-base md:text-lg text-gray-300 mb-2">I'll try my best to get back to you!</p>
          <a
            href="mailto:abhijeetmundhe55@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-700 to-violet-600 text-white rounded-lg font-medium text-base md:text-lg shadow-lg hover:from-purple-800 hover:to-violet-700 transition w-fit mt-2"
          >
            <FaPaperPlane className="text-lg" /> abhijeetmundhe55@gmail.com
          </a>
        </div>
        {/* Right: Form */}
        <div className="bg-[#181824] rounded-2xl shadow-2xl p-6 md:p-10 border border-[#28283a] w-full max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center text-green-400 font-semibold py-12 text-lg">
              Thank you for reaching out! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="text-gray-400 text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-[#232336] border border-[#232336] rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-gray-400 text-sm mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-[#232336] border border-[#232336] rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="bg-[#232336] border border-[#232336] rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Hello, I'd like to discuss a project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[#232336] border border-[#232336] rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600 resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-violet-600 text-white rounded-lg font-semibold text-base md:text-lg shadow-lg hover:from-purple-800 hover:to-violet-700 transition focus:outline-none focus:ring-2 focus:ring-violet-600"
              >
                <FaPaperPlane className="text-lg" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact; 