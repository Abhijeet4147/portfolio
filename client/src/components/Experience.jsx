import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Mahity Systems Pvt Ltd",
    date: "Dec 2024 – Present",
    current: true,
    description:
      "Working as a DevOps Engineer focused on deploying and managing containerized workloads on Red Hat OpenShift and Kubernetes. Building and maintaining CI/CD pipelines, and supporting day-to-day AWS and Azure cloud infrastructure tasks.",
    technologies: [
      "Red Hat OpenShift", "Kubernetes", "AWS", "Azure", "Docker",
      "NGINX", "ArgoCD", "OpenTelemetry", "CI/CD", "Grafana",
    ],
  },
  {
    title: "IT Operations (DevOps)",
    company: "Yotta Data Center – Navi Mumbai",
    date: "Feb 2024 – Aug 2024",
    description:
      "Monitored IT systems and responded to system alerts to ensure smooth infrastructure operations. Maintained and updated company websites and automation pipelines. Worked within structured SLAs ensuring timely issue resolution.",
    technologies: ["Jira", "Confluence", "CI/CD", "AWS", "Docker", "Kubernetes", "CloudWatch", "Load Balancer"],
  },
  {
    title: "Frontend Developer",
    company: "Bambhari",
    date: "Jul 2023 – Aug 2023",
    description:
      "Developed an admin panel with CRUD operations for a website builder application. Implemented secure login and sign-up features for user authentication. Worked on both frontend and backend of the application.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Git", "GitHub Actions"],
  },
  {
    title: "Web Developer Intern",
    company: "Sparks Foundation",
    date: "Dec 2022",
    description:
      "Built a Banking System with React and migrated legacy PHP code. Implemented fund transfers, account creation, and transaction tracking. Automated deployment using GitHub Actions, Docker containerization, and Kubernetes.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "React", "Docker", "Kubernetes"],
  },
];

const StatusBadge = ({ current }) =>
  current ? (
    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      RUNNING
    </span>
  ) : (
    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-gray-500 border border-white/10">
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
      SUCCESS
    </span>
  );

const Experience = () => (
  <motion.section
    id="experience"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.05 }}
    className="py-24 text-white border-t border-white/5"
  >
    <div className="max-w-5xl mx-auto px-6 md:px-12">

      {/* Header */}
      <div className="text-center mb-14">
        <h3 className="text-3xl md:text-4xl font-bold text-white">Experience</h3>
        <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />
      </div>

      {/* Pipeline top bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="rounded-t-2xl border border-white/10 bg-[#0d1117] px-5 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-sm text-gray-500 font-mono">pipeline: career-journey.yml</span>
        </div>
        <a
          href="/resume.pdf"
          download
          onClick={() => {
            if (typeof window.gtag !== "undefined") {
              window.gtag("event", "resume_download", { event_category: "engagement" });
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-violet-700 to-purple-600 text-white rounded-lg text-sm font-semibold hover:from-violet-800 hover:to-purple-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Resume
        </a>
      </motion.div>

      {/* Stages */}
      <div className="border-x border-white/10 bg-[#0d1117] px-4 py-4 flex flex-col gap-3">
        {experiences.map((exp, idx) => (
          <React.Fragment key={idx}>
            {/* Connector */}
            {idx > 0 && (
              <div className="flex flex-col items-center gap-0.5 py-0.5">
                <div className="w-px h-4 bg-white/10" />
                <svg className="w-3 h-3 text-white/15" fill="currentColor" viewBox="0 0 10 10">
                  <polygon points="5,8 0,2 10,2" />
                </svg>
              </div>
            )}

            {/* Stage card — rolls in from bottom */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className={`rounded-xl border overflow-hidden transition-colors duration-300 ${
                exp.current
                  ? "border-emerald-500/25 shadow-lg shadow-emerald-900/10"
                  : "border-white/10 hover:border-violet-500/40"
              }`}
            >
              {/* Stage header row */}
              <div className={`flex items-center justify-between gap-4 px-6 py-4 ${
                exp.current ? "bg-emerald-500/5" : "bg-white/[0.03]"
              }`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-600 shrink-0">
                    #{String(experiences.length - idx).padStart(2, "0")}
                  </span>
                  <StatusBadge current={exp.current} />
                </div>
                <span className="text-xs font-mono text-gray-600">{exp.date}</span>
              </div>

              {/* Stage body */}
              <div className="px-6 py-6 backdrop-blur-md bg-white/5 border-t border-white/5 relative overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-700/10 via-purple-500/5 to-transparent rounded-xl blur-2xl opacity-60 pointer-events-none" />
                <div className="mb-3">
                  <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
                  <p className="text-violet-300 text-base font-semibold mt-0.5">{exp.company}</p>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-gray-200 rounded-full text-xs font-medium border border-white/10 hover:border-violet-500/60 hover:bg-violet-900/30 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      {/* Pipeline footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="rounded-b-2xl border-x border-b border-white/10 bg-[#0d1117] px-5 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs text-gray-600 font-mono">3 stages completed · 1 running</span>
        </div>
        <span className="text-xs text-gray-700 font-mono">triggered by: Abhijeet</span>
      </motion.div>

    </div>
  </motion.section>
);

export default Experience;
