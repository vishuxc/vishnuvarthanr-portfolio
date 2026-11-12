import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, Sparkles, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resumePdf from '../assets/Vishnuvarthan_Raja_Resume.pdf';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      sections.unshift('hero');

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-2xl border-b border-indigo-500/20 shadow-lg shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white group font-heading"
        >
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 border border-indigo-500/30 text-indigo-400 group-hover:scale-105 group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300">
            <Terminal className="w-5 h-5" />
          </div>
          <span>
            Vishnuvarthan <span className="text-indigo-400 font-extrabold">.dev</span>
          </span>
        </a>

        {/* Floating Capsule Menu */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-2 rounded-full border border-indigo-500/20 shadow-2xl bg-slate-900/60 backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full font-heading ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeHudNav"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right side Actions */}
        <div className="flex items-center gap-3">
          {/* Download Resume Button */}
          <a
            href={resumePdf}
            download="Vishnuvarthan_Raja_Resume.pdf"
            className="hidden xl:inline-flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all duration-300 border border-indigo-400/30 font-heading cursor-pointer"
            title="Download Official Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD RESUME</span>
          </a>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-indigo-500/30 hover:border-indigo-400 hover:scale-105 transition-all duration-300 backdrop-blur-md font-heading"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>LET'S TALK</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-indigo-500/20 mt-3 overflow-hidden bg-slate-950/95 backdrop-blur-2xl"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-base font-bold text-slate-200 hover:text-indigo-400 hover:bg-slate-900/60 transition-colors uppercase tracking-wider font-heading"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumePdf}
                download="Vishnuvarthan_Raja_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between shadow-md font-heading cursor-pointer"
              >
                <span>Download Resume (PDF)</span>
                <Download className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full mt-4 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-md border border-indigo-500/30 font-heading"
              >
                LET'S TALK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}