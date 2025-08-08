import React from "react";
import { FaPython, FaNodeJs, FaJs, FaDocker, FaGitAlt, FaGithub, FaLinux, FaReact, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";



const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL" },
      { name: "DSA" },
    ],
  },
  {
    title: "DevOps Tools",
    skills: [
      { name: "Kubernetes" },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Terraform" },
      { name: "Jenkins" },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "CI/CD" },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Ansible" },
    ],
  },
  {
    title: "AWS Services",
    skills: [
      { name: "Lambda" },
      { name: "S3" },
      { name: "RDS" },
      { name: "DynamoDB" },
      { name: "CloudWatch" },
      { name: "ECS" },
      { name: "EKS" },
      { name: "IAM" },
      { name: "VPC" },
      { name: "CloudFormation" },
    ],
  },
  {
    title: "Frontend Developments",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Maven" },
    ],
  },
];

const Skills = () => (
  <motion.section
    id="skills"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="py-20 bg-[#181824] text-white bg-gradient-to-br from-[#181824] via-[#221a2f] to-[#181824]"
  >
    <div className="max-w-5xl mx-auto px-4">
      <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white drop-shadow-lg">Skills</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-700/30 via-purple-500/10 to-transparent rounded-2xl blur-2xl opacity-60 pointer-events-none" />
            <h4 className="text-xl font-semibold mb-4 text-white drop-shadow">{group.title}</h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-violet-700/80 to-purple-600/80 text-white rounded-full text-sm font-medium border border-violet-700 shadow-md hover:shadow-violet-600/60 transition relative group backdrop-blur-md"
                >
                  {skill.icon && <span className="text-lg">{skill.icon}</span>}
                  {skill.name}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-[#181824] text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10 shadow-lg border border-violet-700">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Skills; 