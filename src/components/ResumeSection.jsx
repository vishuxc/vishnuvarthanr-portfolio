import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Calendar, Sparkles, CheckCircle2, Award, Briefcase, GraduationCap, Code2, Download } from 'lucide-react';
import { personalDetails, experiences, projects, skillCategories } from '../data/portfolioData';
import resumePdf from '../assets/Vishnuvarthan_Raja_Resume.pdf';

export default function ResumeSection({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#030712] text-slate-100">
      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-indigo-300 border border-indigo-500/30"
          >
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span>Resume Updated: {personalDetails.resumeDate}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading"
          >
            Interactive <span className="gradient-text">Resume Data</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Explore verified experience, completed projects (Full Stack, GenAI & ML), technical skills matrix, and official resume document.
          </motion.p>
        </div>

        {/* Action Panel / Resume Date Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-card rounded-3xl p-6 sm:p-8 border border-indigo-500/20 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900/70"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                {personalDetails.name} — Software Developer Resume
              </h3>
            </div>
            <p className="text-sm text-slate-300 max-w-xl">
              Includes Sopti AI Software Developer Trainee role (Mar–Aug 2026), Vector RAG Engine, and React/Node.js enterprise applications.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-slate-300 pt-1 font-semibold">
              <span className="text-indigo-400">Latest Version: {personalDetails.resumeDate}</span>
              <span>•</span>
              <span>3 Completed Professional Roles</span>
              <span>•</span>
              <span>55% Max Effort Saved</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumePdf}
              download="Vishnuvarthan_Raja_Resume.pdf"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 hover:scale-105 transition-all duration-300 border border-indigo-400/30 font-heading cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 rounded-full glass-panel hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700/80 flex items-center gap-2 hover:scale-105 transition-all duration-300 font-heading cursor-pointer"
            >
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>View Interactive Modal</span>
            </button>
          </div>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass-panel p-1.5 rounded-2xl border border-indigo-500/20 flex flex-wrap gap-1 max-w-2xl w-full bg-slate-900/80">
            {[
              { id: 'experience', label: 'Work Experience', icon: Briefcase },
              { id: 'projects', label: 'Projects & GenAI', icon: Code2 },
              { id: 'skills', label: 'Skills Matrix', icon: Sparkles },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="cyber-card rounded-3xl p-6 sm:p-10 border border-indigo-500/20 bg-slate-900/70 shadow-2xl">
          
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-indigo-500/40 space-y-3">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white font-heading">{exp.role}</h4>
                      <div className="text-sm font-semibold text-indigo-400">{exp.company} • {exp.location}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {exp.period} ({exp.status})
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5 text-sm text-slate-200 pt-2 font-normal">
                    {exp.responsibilities.slice(0, 4).map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((proj) => (
                <div key={proj.id} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                        {proj.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-heading">{proj.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{proj.description}</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                    {proj.metrics && (
                      <div className="text-xs font-semibold text-emerald-400">
                        Metrics: {proj.metrics.join(' • ')}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Skills Matrix Tab */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <h4 className="text-sm font-extrabold text-indigo-400 uppercase tracking-wider font-heading">{cat.category}</h4>
                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold text-slate-200">
                          <span>{skill.name}</span>
                          <span className="text-indigo-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}