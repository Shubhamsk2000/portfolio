// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import LeftElement from '../animations/LeftElement';
import SpanLines from '../animations/SpanLines';
import { useEffect, useRef } from 'react';

export default function HeroContent() {
  const containerRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 }); // target position
  const smooth = useRef({ x: 0, y: 0 }); // smoothed position
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Center-normalized and inverted for opposite movement
      pos.current.x = -(e.clientX - window.innerWidth / 2) / window.innerWidth;
      pos.current.y = -(e.clientY - window.innerHeight / 2) / window.innerHeight;
    };

    const animate = () => {
      // Lerp smoothing (momentum effect)
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.08;
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.08;

      const layers = containerRef.current?.querySelectorAll(".parallax");

      layers?.forEach((el) => {
        const speedx = parseFloat(el.dataset.speedx || 0);
        const speedy = parseFloat(el.dataset.speedy || 0);

        // Use transform3d for better performance
        el.style.transform = `translate3d(${smooth.current.x * speedx * 100}px, ${smooth.current.y * speedy * 100}px, 0)`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    rafRef.current = requestAnimationFrame(animate);

    // Update target position on mouse move
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="h-full flex items-center justify-between ms-[var(--section-padding)] me-10 ">
      <LeftElement>
        <div className='text-[80px] font-semibold -space-y-6 mb-5 drop-shadow-2xl'>
          <h1>SHUBHAM</h1>
          <h1> KONDHALKAR</h1>
        </div>
        <SpanLines />
        <div className='text-2xl font-light mt-10'>
          <p>Fullstack Developer</p>
          <div className="flex gap-4 mt-6">
            {/* <button className="bg-[var(--com-color)] text-white px-8 py-2 rounded-full font-light 
                             hover:bg-[var(--com-color)]/80 transition-all duration-300 
                             shadow-lg hover:shadow-xl border-2 border-transparent 
                             hover:border-[var(--com-color)]/30 backdrop-blur-sm cursor-pointer">
              Contact
            </button> */}
            <button
              className="bg-[var(--com-color)] text-white font-light py-2 px-8 rounded-full 
                             hover:bg-[var(--com-color)]/80 transition-all duration-300 
                             shadow-lg hover:shadow-xl border-2 border-transparent 
                             hover:border-[var(--com-color)]/30 backdrop-blur-sm cursor-pointer"
              onClick={() => window.open("/Shubham_Resume.pdf", "_blank")}
            >
              Resume
            </button>
          </div>
        </div>
      </LeftElement>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          opacity: { duration: 0.6 }
        }}
        className="relative flex justify-center lg:justify-end items-center"
        ref={containerRef}
      >
        <img
          src="/person.svg"
          alt="Shubham Kondhalkar"
          data-speedy="0.8"
          data-speedx="0.8"
          className="mt-10 parallax will-change-transform drop-shadow-2xl"
        />
        <img
          src="/screen.svg"
          alt="Planet"
          data-speedy="0.4"
          data-speedx="0.4"
          className="absolute top-40 right-40 parallax will-change-transform"
        />
      </motion.div>
    </div>
  );
}
