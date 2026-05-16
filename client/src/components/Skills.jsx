import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaNodeJs, FaJs, FaDocker, FaGitAlt, FaGithub, FaLinux, FaReact, FaHtml5, FaCss3Alt, FaAws } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins, SiMongodb, SiNginx, SiAnsible, SiVite, SiJira, SiSonarqube, SiRedhatopenshift, SiArgo, SiOpentelemetry, SiTrivy, SiGrafana } from "react-icons/si";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL" },
      { name: "Bash / Shell" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "CI/CD" },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "SonarQube", icon: <SiSonarqube /> },
      { name: "Jira", icon: <SiJira /> },
      { name: "OpenShift", icon: <SiRedhatopenshift /> },
      { name: "ArgoCD / GitOps", icon: <SiArgo /> },
      { name: "OpenTelemetry", icon: <SiOpentelemetry /> },
      { name: "Trivy", icon: <SiTrivy /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "Azure" },
    ],
  },
  {
    title: "AWS Services",
    skills: [
      { name: "EC2", icon: <FaAws /> },
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
      { name: "CodeCommit" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
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
    className="py-20 text-white border-t border-white/5"
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-14">
        <h3 className="text-3xl md:text-4xl font-bold text-white">Skills</h3>
        <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 flex flex-col relative overflow-hidden hover:border-violet-500/40 transition-colors duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-700/20 via-purple-500/5 to-transparent rounded-2xl blur-2xl opacity-60 pointer-events-none" />
            <h4 className="text-xl font-semibold mb-5 text-violet-300">{group.title}</h4>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-200 rounded-full text-sm font-medium border border-white/10 hover:border-violet-500/60 hover:bg-violet-900/30 transition-all duration-200"
                >
                  {skill.icon && <span className="text-violet-400 text-base">{skill.icon}</span>}
                  {skill.name}
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
