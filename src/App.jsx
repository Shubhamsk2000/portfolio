import { useState, useEffect, useRef } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import { sections } from "./data/sections";
import SectionContent from "./components/SectionContent";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SCROLL_LOCK_TIME = 1000;

const App = () => {
  const [index, setIndex] = useState(0);
  const totalSections = sections.length;
  const lastScrollTime = useRef(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
       setTimeout(() => {
        
      }, 200);
      e.preventDefault(); 
      
      console.log(e.deltaY)
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

    const lockScroll = () => {
      setIsLocked(true);
      setTimeout(() => setIsLocked(false), SCROLL_LOCK_TIME);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index, isLocked, totalSections]);


  const goToSection = (sectionIndex) => {
    if (sectionIndex >= totalSections || sectionIndex < 0) return;

    if (isLocked) return;

    setIndex(sectionIndex);
    setIsLocked(true);
    setTimeout(() => setIsLocked(false), SCROLL_LOCK_TIME);
  };


  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <Background />
      <Navbar goToSection={goToSection} currentIndex={index} />

      <motion.div
        animate={{ y: `-${index * 100}vh` }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className=""
      >
        {sections.map((section) => (
          <div key={section.id} className="h-screen flex items-center justify-center w-full">
            <SectionContent section={section} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default App;
