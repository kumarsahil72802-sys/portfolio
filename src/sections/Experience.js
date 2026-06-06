"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCalendar, FiBriefcase, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

// Certificate Slider Component
function CertificateSlider({ certificates, company }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative h-72 sm:h-80 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={certificate}
              alt={`${company} Certificate ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain p-6 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => window.open(certificate, '_blank')}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        {certificates.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transition-all border border-white/10 z-10"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transition-all border border-white/10 z-10"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {certificates.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                index === currentIndex ? "bg-purple-500 w-6" : "bg-white/20 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const experiences = [
  {
    company: "Venturing Digitally Pvt Ltd",
    duration: "15 September 2025 – 15 November 2025",
    role: "Full Stack Developer Intern",
    responsibilities: [
      "Worked on full-stack Inventory Management System",
      "Fixed and improved frontend and backend integration",
      "Connected MongoDB database with application",
      "Built and tested REST APIs",
      "Deployed application on cloud platforms",
    ],
    certificates: ["/internship-cert-1.jpeg", "/internship-cert-2.jpeg"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Section Transition Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Subtle Background Decor */}
      <div className="absolute top-[10%] right-0 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              My Experience
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Glowing Timeline Line */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.3)]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Luminous Timeline Dot */}
              <div className="hidden md:flex absolute left-4 -translate-x-1/2 w-6 h-6 items-center justify-center z-10">
                 <div className="w-4 h-4 bg-slate-950 rounded-full border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] relative z-20" />
                 <motion.div 
                   animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute inset-0 bg-purple-500/40 rounded-full blur-sm"
                 />
              </div>

              {/* Experience Card */}
              <div className="md:ml-12 bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl hover:border-blue-500/30 transition-all duration-500 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-2 text-blue-400 text-sm mb-3 font-mono tracking-wider">
                      <FiBriefcase className="w-4 h-4" />
                      <span>{exp.role.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full self-start shadow-inner">
                    <FiCalendar className="w-4 h-4 text-purple-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-4 mb-10">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + respIndex * 0.1,
                      }}
                      className="flex items-start gap-4"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                      <span className="text-slate-300 leading-relaxed font-light text-base sm:text-lg">
                        {resp}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Certificates */}
                {exp.certificates && exp.certificates.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 pt-8 border-t border-white/5"
                  >
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                       <h4 className="text-xl font-bold text-white">
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                           {exp.certificates.length === 1 ? 'Job Certificate' : 'Certificates'}
                         </span>
                       </h4>
                    </div>
                    <CertificateSlider certificates={exp.certificates} company={exp.company} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
