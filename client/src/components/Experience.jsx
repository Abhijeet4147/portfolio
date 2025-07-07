import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "IT Operations (DevOps), Yotta Data Center – Navi Mumbai",
    date: "Feb 2024 – Aug 2024",
    description:
      "Monitored IT systems and responded to system alerts to ensure smooth infrastructure operations. Maintained and updated company websites automation pipelines. Worked within structured SLAs ensuring timely issue resolution.",
    technologies: [
      "Jira",
      "Confluence",
      "CI/CD",
      "AWS services",
      "Docker",
      "Kubernetes",
      "CloudWatch",
      "Load balancer",
    ],
  },
  {
    title: "Frontend Developer, Bambhari ",
    date: "JUL 2023 - AUG 2023",
    description:
      "Developed an admin panel with CRUD operations for a website builder application. Implemented secure login and sign-up features for user authentication. Worked on the frontend and backend of the application.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Git", "Git Actions"],
  },
  {
    title: "Web Developer Intern, Sparks Foundation",
    date: "DEC 2022",
    description:
      "Created a Banking System with React. Migrated legacy PHP code to React. Implemented fund transfers, account creation, and transaction tracking. Automated deployment of the website using git actions, docker containerization and kubernatics",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "React",
      "Docker",
      "Kubernetes",
    ],
  },
];

const Experience = () => (
  <motion.section
    id="experience"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="py-20 bg-[#e3e7ec] text-gray-900"
  >
    <div className="max-w-3xl mx-auto px-4">
      {/* Section Title */}
      <div className="text-center mb-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-2 bg-[#2563eb] rounded-full mb-2" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Experience</h3>
        <a
          href="/resume.pdf"
          download
          onClick={() => {
            if (typeof window.gtag !== 'undefined') {
              window.gtag('event', 'resume_download', {
                event_category: 'engagement',
                event_label: 'Resume Button in Experience',
              });
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-2 bg-[#19212a] text-white rounded-md font-semibold shadow hover:bg-[#223042] transition mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Download Resume
        </a>

      </div>
      {/* Timeline */}
      <div className="relative pl-8 ml-2 border-l-2 border-gray-400">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-10 flex items-start">
            <span className="absolute -left-4 mt-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-violet-400 border-4 border-white shadow-lg ring-2 ring-violet-300/40" />
            <div className="ml-4">
              <h4 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h4>
              <div className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">{exp.date}</div>
              <p className="text-base text-gray-800 mb-2">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 bg-gray-900 text-white rounded-full text-sm font-medium shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Experience; 