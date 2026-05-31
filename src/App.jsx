import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const SECTIONS = [
  { id: 'home', name: 'Home' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'skills', name: 'Skills' },
  { id: 'about', name: 'About' },
  { id: 'contact', name: 'Contact' }
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Setup Intersection Observer for navbar active state
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the active section based on the intersection ratio.
          // Since we might have multiple intersections, the one mostly on screen wins.
          setActiveSection(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section hits middle of screen
      threshold: 0
    });

    // Observe all section elements
    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  const navigateTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Lenis has a scrollTo method, or we can just use native scrollIntoView and Lenis picks it up if configured,
      // but the safest way with native smooth scrolling disabled is:
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-zinc-950 font-sans text-zinc-50 select-none overflow-x-hidden">
      <Navbar
        sectionNames={SECTIONS.map(s => s.name)}
        sectionIds={SECTIONS.map(s => s.id)}
        activeId={activeSection}
        navigateTo={navigateTo}
      />

      <main className="flex flex-col">
        <HomeSection id="home" />
        <ExperienceSection id="experience" />
        <ProjectsSection id="projects" />
        <SkillsSection id="skills" />
        <AboutSection id="about" />
        <ContactSection id="contact" />
      </main>
    </div>
  );
};

export default App;