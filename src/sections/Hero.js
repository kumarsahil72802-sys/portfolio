"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si";
import { FiArrowRight, FiMail } from "react-icons/fi";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-blue-500 ml-1 align-middle"
      />
    </span>
  );
};

const TechBadge = ({ icon: Icon, name, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      y: [0, -10, 0] 
    }}
    transition={{ 
      duration: 0.5, 
      delay,
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl"
  >
    <Icon className="w-5 h-5 text-blue-400" />
    <span className="text-sm font-medium text-slate-200">{name}</span>
  </motion.div>
);

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-slate-950">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-purple-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-mono text-sm sm:text-base tracking-widest uppercase mb-4"
          >
            Welcome to my universe
          </motion.p>

          {/* Name with Glow */}
          <div className="relative inline-block mb-4">
            <motion.div
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white"
            >
              Sahil Kumar
            </motion.h1>
          </div>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-3xl md:text-4xl font-semibold text-slate-300 mb-8"
          >
            I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              <Typewriter text="Full Stack Developer" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light px-4 sm:px-0"
          >
            Crafting immersive digital experiences with modern web technologies. Focus on performance, scalability, and user-centric design.
          </motion.p>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <TechBadge icon={SiNextdotjs} name="Next.js" delay={0.9} />
            <TechBadge icon={SiNodedotjs} name="Node.js" delay={1.0} />
            <TechBadge icon={SiMongodb} name="MongoDB" delay={1.1} />
          </div>

          {/* CTA Buttons using MUI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              variant="contained"
              size="large"
              onClick={(e) => handleScroll(e, "#projects")}
              className="!bg-blue-600 hover:!bg-blue-700 !text-white !rounded-full !px-8 !py-4 !text-base !font-semibold !capitalize !shadow-lg !shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
              endIcon={<FiArrowRight />}
            >
              View My Work
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={(e) => handleScroll(e, "#contact")}
              className="!border-slate-700 !text-slate-300 hover:!border-blue-500 hover:!text-blue-400 !rounded-full !px-8 !py-4 !text-base !font-semibold !capitalize transition-all hover:scale-105 active:scale-95"
              startIcon={<FiMail />}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs font-medium text-slate-500 tracking-[0.2em] uppercase">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-2"
        >
          <motion.div
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-blue-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
