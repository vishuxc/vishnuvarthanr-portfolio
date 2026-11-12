import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Cpu, Database, CheckCircle2, Sparkles, Layers, Terminal, ShieldCheck } from 'lucide-react';
import { aboutContent, personalDetails } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Mastery",
    desc: "Seamlessly bridging frontend React.js UIs with robust Node.js, Express & Laravel REST APIs."
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Optimizing relational MySQL & MongoDB schemas, writing efficient queries & CRUD operations."
  },
  {
    icon: Cpu,
    title: "Automation & Logic",
    desc: "Developing Python automation scripts, sensor data monitoring & real-time analytics."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#030712] text-slate-100 overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-indigo-300 border border-indigo-500/30">
            <User className="w-4 h-4 text-indigo-400" />
            <span>Developer Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 cyber-card p-8 sm:p-10 rounded-3xl border border-indigo-500/20 flex flex-col justify-between bg-slate-900/70 shadow-2xl"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-white flex items-center gap-3 font-heading">
                <span className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                  <User className="w-5 h-5" />
                </span>
                Driven Software Developer
              </h3>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                {aboutContent.bio}
              </p>

              {/* Bulleted Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-800">
                {[
                  "Scalable Web Architecture",
                  "RESTful API Development",
                  "Real-time Sensor Monitoring",
                  "Agile & Scrum Methodologies",
                  "Database Optimization",
                  "Clean & Maintainable Code"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-200 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-slate-800/80">
              {personalDetails.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold gradient-text font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards: Professional Profile Card + Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
          >
            {/* Premium Professional Profile Card (Real Photograph) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-5 sm:p-6 rounded-3xl bg-slate-900/80 border border-indigo-500/30 hover:border-indigo-400/60 shadow-[0_12px_35px_rgba(99,102,241,0.18)] flex flex-col sm:flex-row items-center gap-5 backdrop-blur-xl group transition-all"
            >
              {/* Professional Headshot Frame with subtle blue-purple glowing border */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/20 shrink-0 group-hover:scale-105 transition-transform duration-500 ring-4 ring-indigo-500/10">
                <img
                  src={profileImg}
                  alt="Vishnuvarthan Raja - Professional Headshot"
                  className="w-full h-full object-cover object-top"
                />
                <span
                  className="absolute bottom-1.5 right-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-md animate-pulse"
                  title="Available for Opportunities"
                />
              </div>

              {/* Card Details */}
              <div className="space-y-1.5 text-center sm:text-left flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-[11px] font-bold text-indigo-300 uppercase tracking-wider font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Verified Profile</span>
                </div>
                <div className="text-lg font-bold text-white font-heading">
                  {personalDetails.name}
                </div>
                <p className="text-xs text-indigo-300 font-medium">
                  Software Developer / Laravel PHP Developer
                </p>
                <div className="pt-1 flex items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-400 font-medium">
                  <span className="text-emerald-400 font-semibold">● Sopti AI</span>
                  <span>•</span>
                  <span>March 2026 – September 2026</span>
                </div>
              </div>
            </motion.div>

            {highlights.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="cyber-card p-6 sm:p-7 rounded-3xl border border-indigo-500/20 hover:border-indigo-400 transition-all duration-300 group hover:-translate-y-1 bg-slate-900/70 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors font-heading">
                        {card.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}