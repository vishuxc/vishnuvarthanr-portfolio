import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, MapPin } from 'lucide-react';
import { educationDetails } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-[#030712] text-slate-100 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationDetails.map((edu, idx) => (
            <motion.div
              key={edu.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cyber-card p-8 rounded-3xl border border-indigo-500/20 bg-slate-900/70 shadow-2xl relative flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                    {edu.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white font-heading">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm font-bold text-indigo-400 mt-1">
                    {edu.institution}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-3 border-t border-slate-800/80 font-normal">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}