"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "kumarsahil72802@gmail.com",
    href: "mailto:kumarsahil72802@gmail.com",
    color: "group-hover:text-blue-400",
    glow: "bg-blue-500/20",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sahilkumar0007",
    href: "https://in.linkedin.com/in/sahilkumar0007",
    color: "group-hover:text-cyan-400",
    glow: "bg-cyan-500/20",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/kumarsahil72802-sys",
    href: "https://github.com/kumarsahil72802-sys",
    color: "group-hover:text-purple-400",
    glow: "bg-purple-500/20",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:kumarsahil72802@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Section Transition Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      {/* Background Decor */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full" />

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
              Contact Me
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s Connect</h3>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 font-light">
              I&apos;m always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative flex items-center gap-6 p-5 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 overflow-hidden"
                  >
                    {/* Hover Background Glow */}
                    <div className={`absolute inset-0 ${info.glow} opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />
                    
                    <div className="relative z-10 w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5 shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <Icon className={`w-7 h-7 text-slate-400 transition-colors ${info.color}`} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-1">
                        {info.label}
                      </p>
                      <p className="text-lg text-white font-medium group-hover:text-blue-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative group bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl transition-all duration-500 hover:border-blue-500/20"
            >
              {/* Form Corner Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-300 ml-1 tracking-wide">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-4 bg-slate-900/40 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all shadow-inner"
                    placeholder="Sahil Kumar"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-300 ml-1 tracking-wide">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 bg-slate-900/40 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all shadow-inner"
                    placeholder="example@gmail.com"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-300 ml-1 tracking-wide">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-5 py-4 bg-slate-900/40 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all shadow-inner resize-none"
                    placeholder="Let's build something amazing together..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group/btn w-full relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  <FiSend className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  <span className="relative z-10">SEND MESSAGE</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
