import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Terminal,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Sparkles,
  Layers,
  Code2,
  CheckCircle2
} from 'lucide-react';
import {
  FaPhp,
  FaLaravel,
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase
} from 'react-icons/fa6';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  "Languages": Terminal,
  "Frontend": Layout,
  "Generative AI & Machine Learning": Sparkles,
  "Backend & Web Frameworks": Server,
  "Databases": Database,
  "Tools & Platforms": Wrench,
  "Concepts & Testing": Brain,
};

// Core Spotlight Technologies Highlighted Specifically
const coreSpotlight = [
  {
    name: "Laravel",
    icon: FaLaravel,
    role: "Enterprise PHP Framework",
    experience: "6 Months Professional (Sopti AI)",
    skills: ["MVC Architecture", "Sensor Telemetry Modules", "RESTful APIs", "Bug Fixing"],
    color: "from-red-500 to-rose-600",
    badgeColor: "text-red-400 border-red-500/30 bg-red-500/10"
  },
  {
    name: "PHP",
    icon: FaPhp,
    role: "Server-Side Engineering",
    experience: "Enterprise Web Applications",
    skills: ["Backend Logic", "Database Transactions", "API Endpoints", "Testing"],
    color: "from-indigo-500 to-purple-600",
    badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
  },
  {
    name: "React.js",
    icon: FaReact,
    role: "Interactive Frontend Architecture",
    experience: "Commercial & Freelance Builds",
    skills: ["Hooks & State", "Component Architecture", "Modern Tailwind", "REST Integration"],
    color: "from-cyan-400 to-blue-600",
    badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    role: "Asynchronous Backend Services",
    experience: "Full Stack & Microservices",
    skills: ["Express.js", "RESTful Routing", "Authentication", "Workflow Dispatch"],
    color: "from-emerald-400 to-teal-600",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
  },
  {
    name: "JavaScript",
    icon: FaJs,
    role: "Modern ES6+ Core Logic",
    experience: "Full Lifecycle Development",
    skills: ["Async / Await", "Dynamic DOM", "API Integration", "Modular Code"],
    color: "from-amber-400 to-yellow-500",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10"
  },
  {
    name: "MySQL",
    icon: FaDatabase,
    role: "Relational Database Management",
    experience: "High-Volume Production Data",
    skills: ["Query Optimization", "Schema Design", "Relational Integrity", "Data Persistence"],
    color: "from-blue-400 to-indigo-600",
    badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10"
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('spotlight'); // 'spotlight' | 'all'

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#030712] text-slate-100 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-indigo-300 border border-indigo-500/30">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span>Technical Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Core <span className="gradient-text">Skills & Tech Stack</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Deep hands-on experience in Laravel, PHP, React, Node.js, JavaScript, and MySQL across full-stack production environments.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* 1. SPOTLIGHT: KEY TECHNOLOGIES */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Primary Production Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSpotlight.map((tech, idx) => {
              const IconComp = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="cyber-card p-6 rounded-3xl border border-indigo-500/20 bg-slate-900/70 hover:border-indigo-500/50 shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${tech.color} text-white shadow-lg`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors font-heading">
                            {tech.name}
                          </h4>
                          <p className="text-xs text-slate-400 font-medium">
                            {tech.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-3 py-1.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-indigo-300">
                      ⚡ {tech.experience}
                    </div>

                    <div className="space-y-2 pt-2">
                      {tech.skills.map((s, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono">Production Level</span>
                    <span className="text-indigo-400 font-bold">Advanced</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. COMPREHENSIVE SKILLS BY CATEGORY */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Full Spectrum Capabilities & Meters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((catGroup, idx) => {
              const IconComponent = categoryIcons[catGroup.category] || Cpu;
              return (
                <motion.div
                  key={catGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="cyber-card p-6 sm:p-7 rounded-3xl border border-indigo-500/20 bg-slate-900/60 shadow-xl group hover:-translate-y-1 hover:border-indigo-500/40 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4 mb-6">
                    <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-white group-hover:text-indigo-300 transition-colors font-heading">
                      {catGroup.category}
                    </h3>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4">
                    {catGroup.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-200">{skill.name}</span>
                          <span className="text-indigo-400 font-bold">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}