"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiCode } from "react-icons/fi";
import { useState } from "react";

// Image Slider Component
function ImageSlider({ images, projectName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hidden lg:block relative h-full rounded-2xl overflow-hidden bg-slate-900/50 border border-white/5 shadow-2xl">
      <div className="relative w-full h-full min-h-[380px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={image}
              alt={`${projectName} - ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index === 0 ? "eager" : "lazy"}
              className="object-contain p-6"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg transition-all border border-white/10"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg transition-all border border-white/10"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex ? "bg-blue-500 w-6 h-2" : "bg-white/20 w-2 h-2"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const projects = [
  {
    name: "Inventory Management System",
    description:
      "A comprehensive web application for managing inventory, tracking stock levels, and generating reports. Features real-time updates and role-based access control.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://inventorymanagementsystem-frontendlatest.onrender.com/login/",
    github: "https://github.com/kumarsahil72802-sys/inventoryManagementSystem",
    featured: true,
    images: ["/inventory-login.png", "/inventory-dashboard.png", "/inventory-supplier.png", "/inventory-staff.png"],
  },
  {
    name: "Weather App",
    description:
      "A modern weather application that fetches real-time meteorological data using the OpenWeather API. Features a clean, responsive interface for searching and viewing city-based weather conditions globally.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "REST API"],
    github: "https://github.com/kumarsahil72802-sys/WeatherAPI",
    featured: true,
    images: ["/weather-app-1.png", "/weather-app-2.png"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Section Transition Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Background Decor */}
      <div className="absolute -top-[10%] left-[20%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />

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
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 ${
                project.featured
                  ? "lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
                  : ""
              }`}
            >
              {/* Project Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30 tracking-wider">
                    FEATURED PROJECT
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-semibold rounded-lg group-hover:border-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-600/20"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/10 hover:border-white/30 hover:scale-105 active:scale-95 transition-all"
                  >
                    <FiGithub className="w-5 h-5" />
                    GitHub Code
                  </a>
                </div>
              </div>

              {/* Slider Component */}
              <div className="mt-10 lg:mt-0">
                <ImageSlider images={project.images} projectName={project.name} />
              </div>
            </motion.div>
          ))}

          {/* Upcoming Project Card - Redesigned 2-column style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-slate-900/40 rounded-3xl p-8 sm:p-10 border border-dashed border-white/20 hover:border-blue-500/50 transition-all duration-500 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 font-mono text-xs font-bold text-blue-500">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                BUILDING NEXT...
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Upcoming Project
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed font-light mb-8">
                Currently architecting a specialized full-stack application with advanced real-time features. Stay tuned for the release.
              </p>
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <FiCode className="w-5 h-5 text-blue-500" />
                <span>Development in progress</span>
              </div>
            </div>

            {/* Placeholder Visual Design */}
            <div className="mt-10 lg:mt-0 relative h-64 bg-slate-950/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
               {/* Animated Background Grids/Patterns */}
               <div className="absolute inset-0 opacity-[0.03] pattern-grid" />
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-48 h-48 border-4 border-dashed border-white/5 rounded-full"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute w-32 h-32 border-2 border-dashed border-white/10 rounded-full"
               />
               <FiCode className="w-16 h-16 text-slate-700/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
