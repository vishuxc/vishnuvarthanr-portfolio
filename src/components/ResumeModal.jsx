import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Calendar, Briefcase, GraduationCap, Award, Code, ArrowLeft, Download } from 'lucide-react';
import { personalDetails, experiences, projects, skillCategories, certifications, educationDetails } from '../data/portfolioData';
import resumePdf from '../assets/Vishnuvarthan_Raja_Resume.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
VISHNUVARTHAN RAJA
Software Developer & Full Stack Specialist
Email: ${personalDetails.email} | Phone: ${personalDetails.phone}
LinkedIn: ${personalDetails.socials.linkedin} | GitHub: ${personalDetails.socials.github}
Resume Date: ${personalDetails.resumeDate} (Status: ${personalDetails.resumeVersion})

SUMMARY
${personalDetails.heroDescription}

WORK EXPERIENCE
${experiences.map(e => `
- ${e.role} at ${e.company} (${e.period}) - ${e.location}
  ${e.responsibilities.map(r => `  * ${r}`).join('\n')}
`).join('\n')}

PROJECTS
${projects.map(p => `
- ${p.title} (${p.category}) [Tech: ${p.technologies.join(', ')}]
  ${p.description}
  Metrics: ${p.metrics ? p.metrics.join(' | ') : 'N/A'}
`).join('\n')}

TECHNICAL SKILLS
${skillCategories.map(s => `${s.category}: ${s.skills.map(k => k.name).join(', ')}`).join('\n')}

CERTIFICATIONS
${certifications.map(c => `- ${c.title} (${c.issuer})`).join('\n')}

EDUCATION
${educationDetails.map(ed => `- ${ed.degree} | ${ed.institution} (${ed.status})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-lg flex items-start justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white print:static"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-7xl min-h-[90vh] bg-slate-900 rounded-3xl shadow-2xl border border-indigo-500/20 overflow-hidden my-2 sm:my-4 print:shadow-none print:border-none print:w-full print:max-w-none print:my-0 print:bg-white print:text-black"
        >
          {/* Header Controls */}
          <div className="sticky top-0 z-30 px-6 sm:px-8 py-4 bg-slate-950/95 backdrop-blur-xl border-b border-indigo-500/20 flex flex-wrap items-center justify-between gap-4 print:hidden">
            
            {/* PROMINENT GO BACK SYMBOL BUTTON */}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all border border-indigo-500/30 group font-heading cursor-pointer"
              title="Back to Portfolio (Esc)"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
              <span>← Back to Portfolio</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex px-3.5 py-1 text-xs font-bold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Official Resume Document
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1.5 font-mono font-semibold">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Date: {personalDetails.resumeDate}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={resumePdf}
                download="Vishnuvarthan_Raja_Resume.pdf"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all hover:scale-105 font-heading cursor-pointer border border-indigo-400/30"
                title="Download Official Resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={handleCopyText}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy Plain Text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-indigo-400" />}
                <span>{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Full Page Resume Document Content */}
          <div className="p-6 sm:p-12 md:p-14 font-sans text-slate-200 print:text-black print:p-8 space-y-8 max-w-6xl mx-auto">
            
            {/* Header / Contact Info */}
            <div className="border-b border-indigo-500/20 print:border-black pb-8 text-center space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white print:text-black tracking-tight font-heading">
                {personalDetails.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-indigo-400 print:text-gray-800">
                Software Developer | Full Stack & Generative AI Specialist
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-xs sm:text-sm text-slate-300 print:text-black font-medium">
                <span>📧 {personalDetails.email}</span>
                <span>•</span>
                <span>📞 {personalDetails.phone}</span>
                <span>•</span>
                <span>📍 {personalDetails.location}</span>
                <span>•</span>
                <a href={personalDetails.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 underline">
                  linkedin.com/in/vishnuvarthan-r
                </a>
                <span>•</span>
                <a href={personalDetails.socials.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 underline">
                  github.com/vishuxc
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-indigo-400 print:text-black uppercase tracking-wider flex items-center gap-2 font-heading">
                <Code className="w-4 h-4 text-indigo-400 print:hidden" /> Professional Summary
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300 print:text-black font-normal">
                {personalDetails.heroDescription}
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-indigo-400 print:text-black uppercase tracking-wider flex items-center gap-2 font-heading">
                <Briefcase className="w-4 h-4 text-indigo-400 print:hidden" /> Work Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2 p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 print:bg-white print:border-none print:p-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-800 pb-2 print:border-black">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white print:text-black font-heading">
                          {exp.role} <span className="font-semibold text-indigo-400 print:text-black">– {exp.company}</span>
                        </h3>
                      </div>
                      <div className="text-xs font-semibold text-slate-400 print:text-black">
                        {exp.period} | {exp.location} <span className="font-bold text-emerald-400 print:text-black">({exp.status})</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-black pt-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="leading-relaxed">{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-indigo-400 print:text-black uppercase tracking-wider flex items-center gap-2 font-heading">
                <Code className="w-4 h-4 text-indigo-400 print:hidden" /> Key Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2 flex flex-col justify-between print:bg-white print:border-none print:p-0">
                    <div className="space-y-2">
                      <h3 className="text-sm sm:text-base font-bold text-white print:text-black font-heading">
                        {proj.title} <span className="font-mono text-xs text-indigo-400 print:text-black">({proj.category})</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {proj.metrics && (
                      <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px] font-semibold text-emerald-400 print:text-black">
                        {proj.metrics.map((m, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">✓ {m}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-indigo-400 print:text-black uppercase tracking-wider flex items-center gap-2 font-heading">
                <Code className="w-4 h-4 text-indigo-400 print:hidden" /> Technical Skills Matrix
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-wrap gap-2 items-center">
                    <span className="font-bold text-white print:text-black font-heading min-w-[140px]">
                      {cat.category}:
                    </span>
                    <span className="text-slate-300 print:text-black font-medium">
                      {cat.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3 p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 print:bg-white print:border-none print:p-0">
                <h2 className="text-xs font-bold text-indigo-400 print:text-black uppercase tracking-wider flex items-center gap-2 font-heading">
                  <Award className="w-4 h-4 text-indigo-400 print:hidden" /> Certifications
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center justify-between border-b border-slate-800/60 pb-1.5 last:border-none">
                      <span className="font-bold text-white print:text-black font-heading">{cert.title}</span>
                      <span className="text-indigo-400 font-semibold print:text-black">{cert.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 print:bg-white print:border-none print:p-0">
                <h2 className="text-xs font-bold text-indigo-400 print:text-black uppercase tracking-wider flex items-center gap-2 font-heading">
                  <GraduationCap className="w-4 h-4 text-indigo-400 print:hidden" /> Education
                </h2>
                <div className="space-y-3 text-xs sm:text-sm">
                  {educationDetails.map((edu) => (
                    <div key={edu.id} className="border-b border-slate-800/60 pb-1.5 last:border-none">
                      <div className="font-bold text-white print:text-black font-heading">{edu.institution}</div>
                      <div className="text-indigo-400 font-semibold print:text-black">{edu.degree} ({edu.status})</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Bottom Back Button, Download & Metadata */}
            <div className="pt-8 border-t border-slate-800 print:hidden flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-all border border-indigo-500/30 font-heading cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-indigo-400" />
                  <span>← Back to Portfolio Website</span>
                </button>

                <a
                  href={resumePdf}
                  download="Vishnuvarthan_Raja_Resume.pdf"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-all font-heading cursor-pointer border border-indigo-400/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

              <span className="text-slate-400 text-xs font-medium">
                Official Resume Date: {personalDetails.resumeDate} ({personalDetails.resumeVersion})
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}