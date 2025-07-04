import React from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaCloud, FaDatabase, FaCogs } from "react-icons/fa";
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';
import { motion } from "framer-motion";

const techIcons = {
  React: <FaReact />, HTML: <FaHtml5 />, CSS: <FaCss3Alt />, JavaScript: <FaJs />, Docker: <FaDocker />, Cloudinary: <FaCloud />, MongoDB: <FaDatabase />, "GitHub actions": <FaCogs />,
};

const projects = [
  {
    title: "Zaply Social Platform",
    image: project1Img,
    description:
      "Successfully developed a social platform for posting text and images with features such as user authentication, follow/unfollow capabilities, and profile customization, utilizing React, Vite, and MongoDB. Integrated Cloudinary for seamless image uploads and styled the user interface with Daisy UI for an intuitive experience. Added quality checks by SonarQube Cloud. Created automated CI/CD pipelines for build, test and deploy using Jenkins.",
    actions: [
      { label: "View Code", href: "#", icon: <FaGithub /> },
    ],
    tech: ["React", "Vite", "Daisy UI", "MongoDB", "Cloudinary", "Docker", "git", "GitHub actions", "Kubernetes", "Jenkins", "SonarQube", "EC2"],
  },
  {
    title: "Logistics Web Application",
    image: project2Img,
    description:
      "Developed a responsive, user-centric logistics website for East-In Marine Freight using React, HTML, CSS, and JavaScript. The platform features service listings, shipment tracking interfaces, and contact forms, optimized for both desktop and mobile users.",
    actions: [
      { label: "Live Website", href: "#", icon: <FaExternalLinkAlt /> },
    ],
    tech: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Project Management Application",
    image: project3Img,
    description:
      "Developed a user-friendly website creation platform with an intuitive drag-and-drop interface. Implemented secure user registration and login functionality, ensuring robust authentication measures. Designed and constructed an admin panel for efficient management of websites, templates, and user data. Additionally, integrated CRUD operations, enabling users to effortlessly create, edit, and delete website content.",
    actions: [
      { label: "View Code", href: "#", icon: <FaGithub /> },
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "GrapeJs"],
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="py-10 min-h-screen bg-[#e3e7ec] text-gray-900"
  >
    <div className="max-w-7xl mx-auto px-4">
      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h3>
      <div className="flex flex-col gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            {/* Alternate order: even idx = text left, image right; odd idx = image left, text right */}
            {idx % 2 === 1 ? (
              <>
                {/* Image left */}
                <div className="order-2 md:order-1 flex justify-center items-center">
                  <div className="rounded-2xl w-full max-w-md flex items-center justify-center p-0 min-h-[200px] md:min-h-[220px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-[120px] md:h-[200px] rounded-2xl shadow-lg border border-gray-200 transition-transform duration-200 hover:scale-105 hover:brightness-110"
                    />
                  </div>
                </div>
                {/* Details right */}
                <div className="order-1 md:order-2 flex flex-col justify-center items-start text-left w-full h-full">
                  <h4 className="text-lg md:text-xl font-bold mb-2 leading-tight">{project.title}</h4>
                  <div className="flex gap-2 mb-2 flex-wrap">
                    {project.actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-xl font-semibold text-sm shadow hover:bg-gray-800 transition"
                      >
                        {action.icon}
                        {action.label}
                      </a>
                    ))}
                  </div>
                  <p className="mb-3 text-sm md:text-base text-gray-800 leading-relaxed max-w-2xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 bg-gray-900 text-white rounded-full text-xs font-semibold shadow"
                      >
                        {techIcons[tech] && <span className="text-xs">{techIcons[tech]}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Details left */}
                <div className="order-2 md:order-1 flex flex-col justify-center items-start text-left w-full h-full">
                  <h4 className="text-lg md:text-xl font-bold mb-2 leading-tight">{project.title}</h4>
                  <div className="flex gap-2 mb-2 flex-wrap">
                    {project.actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-xl font-semibold text-sm shadow hover:bg-gray-800 transition"
                      >
                        {action.icon}
                        {action.label}
                      </a>
                    ))}
                  </div>
                  <p className="mb-3 text-sm md:text-base text-gray-800 leading-relaxed max-w-2xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 bg-gray-900 text-white rounded-full text-xs font-semibold shadow"
                      >
                        {techIcons[tech] && <span className="text-xs">{techIcons[tech]}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Image right */}
                <div className="order-1 md:order-2 flex justify-center items-center">
                  <div className="rounded-2xl w-full max-w-md flex items-center justify-center p-0 min-h-[200px] md:min-h-[220px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-[120px] md:h-[200px] rounded-2xl shadow-lg border border-gray-200 transition-transform duration-200 hover:scale-105 hover:brightness-110"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Projects; 