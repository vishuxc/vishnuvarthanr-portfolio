import React from 'react';
import { Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-[#030712] pt-12 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-white block font-heading">
                {personalDetails.name}
              </span>
              <span className="text-xs text-slate-400">
                Software Developer | Laravel, PHP & Full Stack Engineer
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Work</a>
            <a href="#resume" className="hover:text-indigo-400 transition-colors">Resume</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-indigo-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.socials.email}
              className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 font-medium">
          <span>© 2026 Vishnuvarthan Raja. All rights reserved.</span>
          <span className="flex items-center gap-1 text-slate-400">
            Built with Three.js, React, Tailwind CSS & Framer Motion
          </span>
        </div>

      </div>
    </footer>
  );
}