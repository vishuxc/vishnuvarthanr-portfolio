import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-indigo-600 selection:text-white transition-colors duration-300">
      {/* Background Visual Effects */}
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />

      {/* Main Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <ResumeSection onOpenModal={() => setIsResumeModalOpen(true)} />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer & Floating Controls */}
      <Footer />
      <ScrollToTop />

      {/* Document Resume Viewer & Printable Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
