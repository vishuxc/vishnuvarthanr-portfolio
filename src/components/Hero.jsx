import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  FolderKanban,
  Mail,
  ArrowRight,
  Sparkles,
  FileText,
  Calendar,
  ShieldCheck,
  Zap,
  Download,
  Laptop,
  User,
  Terminal,
  Code2
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import TypingText from './TypingText';
import Workspace3D from './Workspace3D';
import { personalDetails } from '../data/portfolioData';
import avatar3D from '../assets/avatar_3d.jpg';
import resumePdf from '../assets/Vishnuvarthan_Raja_Resume.pdf';

export default function Hero({ onOpenResumeModal }) {
  const [activeView, setActiveView] = useState('3d-workspace'); // '3d-workspace' | 'avatar'

  // Motion values for smooth 3D tilt on the Avatar card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-200, 200], [8, -8]), { stiffness: 180, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-200, 200], [-8, 8]), { stiffness: 180, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#030712] text-slate-100"
    >
      {/* Premium Subtle Ambient Lighting (Electric Blue, Purple, Indigo Flares) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-16 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Modern Developer Subtle Matrix/Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center space-y-8">
        
        {/* Staggered Entrance Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl"
        >
          {/* Status & Availability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-emerald-500/25 shadow-lg shadow-emerald-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Available for Software Engineering Roles</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 text-slate-300 text-xs font-medium border border-indigo-500/20 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume: {personalDetails.resumeDate}</span>
            </div>
          </div>

          {/* Intro & Name */}
          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-bold tracking-[0.25em] text-indigo-400 uppercase font-mono">
              // SOFTWARE DEVELOPER & FULL-STACK ENGINEER
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-white font-heading">
                Hi, I'm{' '}
                <span className="gradient-text drop-shadow-[0_0_35px_rgba(99,102,241,0.35)]">
                  {personalDetails.name}
                </span>
              </h1>
              <ShieldCheck
                className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 shrink-0 drop-shadow"
                title="Verified Software Developer Profile"
              />
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="text-lg sm:text-2xl font-bold text-slate-300 h-10 flex items-center justify-center font-heading">
              <TypingText titles={personalDetails.titles} />
            </div>
          </div>
        </motion.div>

        {/* View Switcher: Interactive 3D Workstation vs 3D Avatar Persona */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-indigo-500/20 backdrop-blur-xl shadow-xl shadow-black/50"
        >
          <button
            onClick={() => setActiveView('3d-workspace')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeView === '3d-workspace'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Laptop className="w-4 h-4" />
            <span>3D Interactive Workspace</span>
          </button>

          <button
            onClick={() => setActiveView('avatar')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeView === 'avatar'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span>3D Avatar Persona</span>
          </button>
        </motion.div>

        {/* CENTERPIECE: 3D WORKSPACE OR 3D AVATAR */}
        <div className="w-full max-w-4xl min-h-[460px] flex items-center justify-center">
          {activeView === '3d-workspace' ? (
            <motion.div
              key="workspace"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <Workspace3D />
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center py-2"
            >
              {/* 3D Tilt Wrapper for Avatar */}
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full max-w-md cursor-pointer group/avatar"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/25 via-indigo-600/35 to-purple-600/25 rounded-3xl blur-2xl opacity-75 group-hover/avatar:opacity-100 transition-opacity pointer-events-none" />

                {/* 3D Character Portrait Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-indigo-500/30 bg-slate-900/60 backdrop-blur-md">
                  <img
                    src={avatar3D}
                    alt={`${personalDetails.name} - 3D Stylized Avatar`}
                    className="w-full h-auto max-h-[500px] object-cover object-center group-hover/avatar:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Persona Tag */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider shadow-lg flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>3D DIGITAL PERSONA</span>
                  </div>

                  {/* Live status badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Interactive Avatar</span>
                  </div>
                </div>

                {/* Aesthetic Floating Badge */}
                <motion.div
                  style={{ translateZ: 40 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-3 sm:-left-5 px-4 py-2 rounded-2xl bg-slate-900/95 border border-indigo-500/30 text-white shadow-2xl flex items-center gap-3 backdrop-blur-xl"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                    VR
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">Vishnuvarthan Raja</div>
                    <div className="text-[11px] font-medium text-indigo-400">Laravel & Full Stack Dev</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Pitch, CTA Buttons & Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 max-w-3xl flex flex-col items-center"
        >
          {/* Pitch Text */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
            Software Developer with approximately <span className="text-white font-semibold">6 months professional Laravel/PHP experience</span> specializing in modern web architecture, clean RESTful APIs, and scalable full-stack applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
            {/* Download Resume Pill */}
            <a
              href={resumePdf}
              download="Vishnuvarthan_Raja_Resume.pdf"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* View Interactive Resume Modal */}
            <button
              onClick={onOpenResumeModal}
              className="px-6 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-indigo-500/30 hover:border-indigo-500/60 font-semibold text-sm backdrop-blur-md shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>VIEW RESUME</span>
            </button>

            {/* Let's Talk */}
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-slate-900/70 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-semibold text-sm backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>LET'S TALK</span>
            </a>

            {/* Work */}
            <a
              href="#projects"
              className="px-5 py-3.5 rounded-full bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
            >
              <FolderKanban className="w-4 h-4 text-indigo-400" />
              <span>PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Highlights / Metric Bar */}
          <div className="pt-4 border-t border-slate-800/80 w-full max-w-xl">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-heading">6 Mos</div>
                <div className="text-xs text-slate-400 font-medium">Laravel/PHP</div>
              </div>
              <div className="border-l border-slate-800 pl-2">
                <div className="text-xl sm:text-2xl font-black text-indigo-400 font-heading">Sopti AI</div>
                <div className="text-xs text-slate-400 font-medium">Mar–Aug 2026</div>
              </div>
              <div className="border-l border-slate-800 pl-2">
                <div className="text-xl sm:text-2xl font-black text-white font-heading">55%</div>
                <div className="text-xs text-slate-400 font-medium">Saved Effort</div>
              </div>
              <div className="border-l border-slate-800 pl-2">
                <div className="text-xl sm:text-2xl font-black text-indigo-400 font-heading">B.Tech</div>
                <div className="text-xs text-slate-400 font-medium">CCE 2025</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Connect:</span>
            
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 hover:border-indigo-500/50 hover:scale-110 shadow-md transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 hover:border-indigo-500/50 hover:scale-110 shadow-md transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.socials.email}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 hover:border-indigo-500/50 hover:scale-110 shadow-md transition-all duration-300"
              aria-label="Email Vishnuvarthan"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}