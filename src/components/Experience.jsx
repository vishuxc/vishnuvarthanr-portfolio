import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Trophy, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#030712] text-slate-100 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span>Career History & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 -translate-x-1/2 hidden sm:block opacity-35" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.6)] z-20 hidden sm:block">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 m-auto mt-0.5 animate-pulse" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="cyber-card p-6 sm:p-8 rounded-3xl border border-indigo-500/20 bg-slate-900/70 shadow-2xl group hover:border-indigo-500/40 transition-all duration-300">
                      
                      {/* Role & Company Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4">
                        <div>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            {exp.type || exp.status}
                          </span>
                          <h3 className="text-xl font-extrabold text-white mt-2 group-hover:text-indigo-400 transition-colors font-heading">
                            {exp.role}
                          </h3>
                          <h4 className="text-base font-semibold text-indigo-400 mt-0.5">
                            {exp.company}
                          </h4>
                        </div>

                        <div className="text-xs text-slate-300 space-y-1 text-left font-medium">
                          <div className="flex items-center justify-end gap-1.5 text-indigo-300">
                            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center justify-end gap-1.5 text-slate-400">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                            <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key Achievement */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-4 p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 flex items-start gap-2 text-xs font-medium text-indigo-300">
                          <Trophy className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold text-indigo-300">Key Impact: </span>
                            {exp.achievements.join(' ')}
                          </div>
                        </div>
                      )}

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-800/80">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
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