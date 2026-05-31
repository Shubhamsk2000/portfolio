import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const HomeSection = ({ id }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 20;
      const y = (window.innerHeight / 2 - e.clientY) / 20;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const moonX = useTransform(smoothX, value => value * 1.5);
  const moonY = useTransform(smoothY, value => value * 1.5);
  const glow1X = useTransform(smoothX, value => value * 0.8);
  const glow1Y = useTransform(smoothY, value => value * 0.8);
  const glow2X = useTransform(smoothX, value => value * 0.3);
  const glow2Y = useTransform(smoothY, value => value * 0.3);

  return (
    <section id={id} className="relative min-h-screen w-full flex flex-col md:flex-row items-center overflow-hidden pt-24 md:pt-0 pb-16 md:pb-0">

      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-50 md:opacity-100">
        <div className="w-full h-full flex flex-col justify-center items-center md:items-end px-8 md:pr-24 relative overflow-hidden">
          {/* Parallax Moon Container */}
          {/* Parallax Moon Container */}
          <div className="absolute top-[30%] md:top-1/2 left-1/2 md:left-3/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
            <motion.div
              style={{ x: glow2X, y: glow2Y }}
              className="absolute w-[140vw] md:w-200 aspect-square rounded-full bg-white/10"
            />
            <motion.div
              style={{ x: glow1X, y: glow1Y }}
              className="absolute w-screen md:w-150 aspect-square rounded-full bg-white/20"
            />
            <motion.div
              style={{ x: moonX, y: moonY }}
              className="absolute w-[80vw] md:w-110 aspect-square rounded-full bg-zinc-200"
            />
            <motion.div
              style={{ x: moonX, y: moonY }}
              className="relative w-[80vw] md:w-110 aspect-square rounded-full bg-linear-to-br from-white/90 to-transparent mix-blend-overlay"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full min-h-[100dvh] max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-end md:justify-center pb-12 md:pb-0 pt-[45vh] md:pt-0">

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mix-blend-difference relative z-20"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-px bg-zinc-500"></span>
              <span className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase">Fullstack Developer</span>
            </div>

            <h1 className="text-[14vw] sm:text-[12vw] md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              SHUBHAM <br /> KONDHALKAR
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20"
          >
            <div className="h-px w-16 bg-zinc-700 mb-6"></div>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-md leading-relaxed mb-8">
              Building scalable APIs, seamless UIs, and everything in between.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-zinc-200 hover:scale-105 transition-all flex items-center justify-center shadow-xl">
                <span>Resume</span>
              </a>
              <button onClick={() => {
                const el = document.getElementById('projects');
                if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
              }}
                className="bg-zinc-950/50 backdrop-blur-md border border-zinc-700 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:border-zinc-400 hover:bg-zinc-900 hover:scale-105 transition-all flex items-center justify-center shadow-xl">
                <span>View Projects</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-y-4 gap-x-8 items-start text-[10px] font-mono text-zinc-600 uppercase tracking-[0.15em] border-t border-zinc-800/50 pt-6 max-w-lg">
              <div className="flex flex-col space-y-1.5">
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-zinc-400">Available</span>
                </span>
                <span>Pune, India</span>
              </div>
              <div className="flex flex-col space-y-1.5">
                <span className="text-zinc-400">Stack</span>
                <span>React / Node / C++</span>
              </div>
              <div className="flex flex-col space-y-1.5">
                <span className="text-zinc-400">Focus</span>
                <span>Backend &amp; Systems</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex items-center space-x-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-zinc-600 text-[10px] font-mono tracking-[0.2em] uppercase mr-2">Connect —</span>
          <a href="https://github.com/Shubhamsk2000" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/shubham-kondhalkar/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a href="mailto:skondhalkar316@gmail.com" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">
            <i className="fas fa-envelope text-lg"></i>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeSection;
