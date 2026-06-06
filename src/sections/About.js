"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Top Section Transition Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-500/5 blur-[120px] rounded-full" />

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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Profile Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Glowing Border Wrapper */}
              <div className="relative p-1.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-[2.2rem] shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <Image
                  src="/sahil-kumar-profile.jpeg"
                  alt="Sahil Kumar"
                  width={400}
                  height={400}
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[1.8rem] object-cover border-4 border-slate-900"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <p className="text-xl text-slate-200 leading-relaxed font-medium">
                I am a Full Stack Developer passionate about building scalable and user-friendly web
                applications using modern technologies like Next.js, Node.js, and
                MongoDB.
              </p>

              <p className="text-lg text-slate-400 leading-relaxed font-light">
                I enjoy turning ideas into real-world products and continuously improving my development skills through hands-on projects.
              </p>

              <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
                Currently, I am focused on building production-ready applications and preparing for opportunities in service-based companies, product-based companies, freelancing, and remote roles. I have built 5+ personal and internship-based projects that helped me understand real-world development workflows.
              </p>
            </div>

            {/* Stats Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
