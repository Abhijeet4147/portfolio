import React from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaCloud, FaDatabase, FaCogs } from "react-icons/fa";
import { SiKubernetes, SiJenkins, SiNginx, SiSonarqube, SiVite } from "react-icons/si";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import { motion } from "framer-motion";

const techIcons = {
  React: <FaReact />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  Docker: <FaDocker />,
  Cloudinary: <FaCloud />,
  MongoDB: <FaDatabase />,
  "GitHub Actions": <FaCogs />,
  Kubernetes: <SiKubernetes />,
  Jenkins: <SiJenkins />,
  Nginx: <SiNginx />,
  SonarQube: <SiSonarqube />,
  Vite: <SiVite />,
};

const projects = [
  {
    title: "Zaply Social Platform",
    repo: "Abhijeet4147/zaply",
    branch: "main",
    commit: "a3f9b2c",
    environment: "production",
    deployedAt: "5 months ago",
    image: project1Img,
    description:
      "A full-featured social platform with user authentication, follow/unfollow, and profile customization. CI/CD pipelines built with Jenkins, Docker, and Kubernetes on EC2.",
    actions: [
      { label: "View Code", href: "https://github.com/Abhijeet4147/zaply", icon: <FaGithub /> },
    ],
    tech: ["React", "Vite", "MongoDB", "Cloudinary", "Docker", "GitHub Actions", "Kubernetes", "Jenkins", "SonarQube"],
  },
  {
    title: "Logistics Web App",
    repo: "Abhijeet4147/east-in",
    branch: "main",
    commit: "f8d2e1a",
    environment: "production",
    deployedAt: "1 year ago",
    domain: "east-in.com",
    image: project2Img,
    description:
      "Responsive logistics website for East-In Marine Freight with service listings, shipment tracking, and contact forms.",
    actions: [
      { label: "Live Site", href: "https://east-in.com/", icon: <FaExternalLinkAlt /> },
    ],
    tech: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio",
    repo: "Abhijeet4147/portfolio",
    branch: "main",
    commit: "c7b4e9d",
    environment: "production",
    deployedAt: "2 months ago",
    domain: "abhijeet.lol",
    image: project3Img,
    description:
      "Personal portfolio deployed using DevOps practices — GitHub Actions, Docker, AWS EC2, and Nginx for HTTPS.",
    actions: [
      { label: "Live Site", href: "https://abhijeet.lol", icon: <FaExternalLinkAlt /> },
      { label: "View Code", href: "https://github.com/Abhijeet4147/portfolio", icon: <FaGithub /> },
    ],
    tech: ["React", "Vite", "Docker", "Nginx", "GitHub Actions"],
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.05 }}
    className="py-24 text-white border-t border-white/5"
  >
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">

      {/* Header */}
      <div className="text-center mb-14">
        <h3 className="text-3xl md:text-4xl font-bold text-white">Projects</h3>
        <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />
      </div>

      {/* Deploy dashboard header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="rounded-t-2xl border border-white/10 bg-[#0f0f1a] px-5 py-3 flex items-center justify-between mb-0"
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-xs font-mono text-gray-500">deployments · Abhijeet4147</span>
        </div>
        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          3 active
        </span>
      </motion.div>

      {/* Project cards grid */}
      <div className="border-x border-b border-white/10 rounded-b-2xl bg-[#0f0f1a] p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="group rounded-xl border border-white/10 bg-white/[0.03] hover:border-violet-500/40 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Card top bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-mono text-gray-400 truncate max-w-[140px]">{project.repo}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-mono shrink-0">
                  {project.environment}
                </span>
              </div>

              {/* Preview image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
              </div>

              {/* Card body */}
              <div className="px-6 py-5 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1 bg-white/10 text-gray-200 rounded-full text-xs font-medium border border-white/10 hover:border-violet-500/60 hover:bg-violet-900/30 transition-all duration-200"
                    >
                      {techIcons[tech] && <span className="text-violet-400 text-xs">{techIcons[tech]}</span>}
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-3 py-1 bg-white/5 text-gray-600 rounded-full text-xs border border-white/10">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* Card footer */}
                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 font-mono">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.deployedAt}
                    <span className="mx-1 text-gray-700">·</span>
                    <span className="text-gray-700">{project.commit}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-violet-700/50 hover:border-violet-500 transition text-sm"
                        aria-label={action.label}
                      >
                        {action.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard footer */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <span className="text-xs text-gray-700 font-mono">3 deployments · all systems operational</span>
        </div>
      </div>

    </div>
  </motion.section>
);

export default Projects;
