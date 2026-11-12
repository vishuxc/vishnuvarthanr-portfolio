import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Sparkles, FolderKanban, ArrowRight, Eye, Code2, Cpu, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

// Interactive 3D Tilt Project Card with realistic depth & cursor-following glare
function ProjectCard3D({ project, onPreview, idx }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0, opacity: 0 });

  const rotateX = useSpring(useTransform(y, [-150, 150], [9, -9]), { stiffness: 220, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-9, 9]), { stiffness: 220, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = mouseX - rect.width / 2;
    const centerY = mouseY - rect.height / 2;
    x.set(centerX);
    y.set(centerY);
    setGlarePos({ x: mouseX, y: mouseY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full cyber-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-indigo-500/20 hover:border-indigo-500/50 shadow-2xl transition-all duration-300 bg-slate-900/60"
      >
        {/* Cursor-following Dynamic Specular Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl z-30"
          style={{
            background: `radial-gradient(circle 280px at ${glarePos.x}px ${glarePos.y}px, rgba(99, 102, 241, ${glarePos.opacity}), transparent 70%)`,
          }}
        />

        {/* Project Image Container with 3D Depth */}
        <div
          onClick={() => onPreview(project)}
          className="relative h-56 sm:h-64 overflow-hidden cursor-pointer group/img"
          style={{ transform: 'translateZ(15px)' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover/img:scale-108 transition-transform duration-700 ease-out"
          />
          
          {/* Subtle Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-indigo-300 border border-indigo-500/40 shadow-lg flex items-center gap-1.5 font-mono">
              {project.category === 'Generative AI' && <Sparkles className="w-3.5 h-3.5 text-blue-400" />}
              <span>{project.category}</span>
            </span>
          </div>

          {/* Interactive Hover Preview CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-20 bg-slate-950/40 backdrop-blur-[2px]">
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center gap-2 shadow-xl shadow-indigo-600/40 transform scale-90 group-hover/img:scale-100 transition-transform duration-300 border border-indigo-400/40">
              <Eye className="w-4 h-4" /> Preview Case Details
            </span>
          </div>
        </div>

        {/* Card Body with 3D Pop */}
        <div
          className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between"
          style={{ transform: 'translateZ(25px)' }}
        >
          <div className="space-y-3">
            <h3
              onClick={() => onPreview(project)}
              className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-indigo-400 transition-colors cursor-pointer font-heading"
            >
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Metrics Badge */}
            {project.metrics && (
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs font-semibold text-indigo-300 space-y-1.5">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800/80">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-slate-300 border border-indigo-500/15"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links and CTA */}
            <div className="flex items-center justify-between pt-2">
              <a
                href={project.liveLink || project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <FaGithub className="w-4 h-4 text-indigo-400" />
                <span>Code on GitHub</span>
              </a>

              <button
                onClick={() => onPreview(project)}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-indigo-600/30 hover:scale-105 transition-all flex items-center gap-1.5 border border-indigo-400/30 font-heading cursor-pointer"
              >
                <span>View Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Generative AI', 'Full Stack', 'Machine Learning', 'Enterprise Web'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === 'Enterprise Web' && p.category === 'Enterprise'));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-indigo-300 border border-indigo-500/30"
          >
            <FolderKanban className="w-4 h-4 text-indigo-400" />
            <span>Interactive 3D Portfolio Showcases</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading"
          >
            Featured <span className="gradient-text">Engineering Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Full-stack web applications, Generative AI & RAG engines, and machine learning microservices with 3D tilt cards.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1.5 rounded-2xl border border-indigo-500/20 flex flex-wrap gap-2 bg-slate-900/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard3D
              key={project.id}
              project={project}
              idx={idx}
              onPreview={setActiveProject}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Popup Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}