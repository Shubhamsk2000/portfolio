import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SCROLL_LOCK_TIME = 1000;

// Lazy load desktop components only when needed
const Background = lazy(() => import("./components/Background"));
const Navbar = lazy(() => import("./components/Navbar"));
const SectionContent = lazy(() => import("./components/SectionContent"));

// Under Construction Component (lightweight, no external dependencies)
const UnderConstruction = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#072D5A] to-[#030C18] flex items-center justify-center p-6">
    <div className="text-center max-w-md mx-auto">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto mb-6 bg-[#ff4d5a] rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-4">
        Site Under Construction
      </h1>
      
      <p className="text-white/70 mb-6 leading-relaxed">
        This portfolio is optimized for desktop viewing. Please visit on a larger screen for the best experience.
      </p>
      
      <div className="space-y-4">
        <p className="text-sm text-white/50">
          Meanwhile, connect with me:
        </p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/Shubhamsk2000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#ff4d5a] hover:text-[#ff4d5a]/80 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/Shubham-Kondhalkar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#ff4d5a] hover:text-[#ff4d5a]/80 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:skondhalkar316@gmail.com" 
            className="text-[#ff4d5a] hover:text-[#ff4d5a]/80 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Loading component for desktop
const DesktopLoading = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#072D5A] to-[#030C18] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff4d5a]"></div>
  </div>
);

// Desktop Portfolio Component
const DesktopPortfolio = ({ sections }) => {
  const [index, setIndex] = useState(0);
  const totalSections = sections.length;
  const lastScrollTime = useRef(0);
  const [isLocked, setIsLocked] = useState(false);

  // Memoize lockScroll function
  const lockScroll = useCallback(() => {
    setIsLocked(true);
    setTimeout(() => setIsLocked(false), SCROLL_LOCK_TIME);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault(); 
      
      const now = Date.now();

      if (isLocked || now - lastScrollTime.current < SCROLL_LOCK_TIME) {
        return;
      }

      const scrollThreshold = 10;
      if (Math.abs(e.deltaY) < scrollThreshold) {
        return;
      }

      if (e.deltaY > 0 && index < totalSections - 1) {
        setIndex((prev) => prev + 1);
        lastScrollTime.current = now;
        lockScroll();
      } else if (e.deltaY < 0 && index > 0) {
        setIndex((prev) => prev - 1);
        lastScrollTime.current = now;
        lockScroll();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index, isLocked, totalSections, lockScroll]);

  // Memoize goToSection function
  const goToSection = useCallback((sectionIndex) => {
    if (sectionIndex >= totalSections || sectionIndex < 0) return;
    if (isLocked) return;

    setIndex(sectionIndex);
    lockScroll();
  }, [totalSections, isLocked, lockScroll]);

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <Background />
      <Navbar goToSection={goToSection} currentIndex={index} />

      <motion.div
        animate={{ y: `-${index * 100}vh` }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className=""
      >
        {sections.map((section, idx) => (
          <div key={idx} className="h-screen flex items-center justify-center w-full">
            <SectionContent section={section} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load sections only for desktop
  useEffect(() => {
    if (!isMobile) {
      import("./data/sections").then((module) => {
        setSections(module.sections);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [isMobile]);

  // Show under construction for mobile (no additional downloads)
  if (isMobile) {
    return <UnderConstruction />;
  }

  // Show loading for desktop while components load
  if (isLoading) {
    return <DesktopLoading />;
  }

  // Show desktop portfolio with lazy-loaded components
  return (
    <Suspense fallback={<DesktopLoading />}>
      <DesktopPortfolio sections={sections} />
    </Suspense>
  );
};

export default App;
