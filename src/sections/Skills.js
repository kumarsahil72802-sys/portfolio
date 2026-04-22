"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
      { name: "Material UI", icon: SiMui, color: "text-blue-600" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-300" },
      { name: "REST APIs", icon: SiNodedotjs, color: "text-green-600" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "npm", icon: SiNpm, color: "text-red-600" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Render", icon: SiNodedotjs, color: "text-green-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Section Transition Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:bg-white/10 hover:border-white/20"
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5
                      }}
                      className="group/badge relative flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl cursor-default transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    >
                      {/* Badge Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/badge:opacity-100 transition-opacity" />
                      
                      <Icon className={`relative z-10 w-6 h-6 ${skill.color} transition-transform group-hover/badge:rotate-12`} />
                      <span className="relative z-10 text-sm font-semibold text-slate-300 group-hover/badge:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
