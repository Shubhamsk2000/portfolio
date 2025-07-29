import { useState, useEffect, useRef, useCallback } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import { sections } from "./data/sections";
import SectionContent from "./components/SectionContent";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SCROLL_LOCK_TIME = 1000;

const App = () => {
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

export default App;
