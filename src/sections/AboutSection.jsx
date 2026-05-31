import React from 'react';
import { motion } from 'motion/react';
import { Trophy, GraduationCap, Award, Palette, BookOpen } from 'lucide-react';

const AboutSection = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen w-full bg-zinc-950 py-32 px-8 md:px-16 flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mb-24"
      >
        <div className="flex items-center space-x-4 mb-3">
          <span className="w-8 h-px bg-zinc-500"></span>
          <span className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase">Background & Interests</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-none">
          ABOUT ME
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Bio & Artworks */}
        <div className="flex flex-col space-y-16">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="text-white font-medium tracking-widest text-sm">Who I Am</span>
            </div>
            <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed mb-8">
              I am a passionate software developer who loves diving deep into complex systems, building robust backend architectures, and crafting seamless user interfaces. When I'm not writing code or solving algorithmic puzzles, I seek creative and intellectual balance in my life.
            </p>
            
            <div className="flex items-center space-x-8 text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <div className="flex items-center space-x-2">
                <Palette size={14} />
                <span>Drawing</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen size={14} />
                <span>Reading Books</span>
              </div>
            </div>
          </motion.div>

          {/* Artworks */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-10">
              <span className="w-8 h-px bg-zinc-700"></span>
              <span className="text-zinc-600 text-[10px] font-mono tracking-[0.3em] uppercase">My Artworks</span>
              <span className="flex-1 h-px bg-zinc-800/30"></span>
            </div>

            <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
              {/* Main large image */}
              <div className="col-span-2 row-span-1 relative group overflow-hidden border border-zinc-800/60 bg-zinc-900/30 flex items-center justify-center rounded-xl">
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-zinc-500/50 z-20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-zinc-500/50 z-20" />
                <div className="text-zinc-600 font-mono text-xs tracking-widest uppercase z-10 flex flex-col items-center space-y-2">
                  <Palette size={24} className="opacity-50" />
                  <span>Replace with your drawing</span>
                </div>
              </div>
              {/* Secondary images */}
              <div className="col-span-1 row-span-1 relative group overflow-hidden border border-zinc-800/60 bg-zinc-900/30 flex items-center justify-center rounded-xl">
                <div className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase z-10">Drawing 2</div>
              </div>
              <div className="col-span-1 row-span-1 relative group overflow-hidden border border-zinc-800/60 bg-zinc-900/30 flex items-center justify-center rounded-xl">
                <div className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase z-10">Drawing 3</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Education & Achievements */}
        <div className="flex flex-col space-y-16 mt-8 md:mt-0 md:pl-8 lg:pl-16 md:border-l border-zinc-800/50">
          
          {/* Education */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute -left-12 top-1 text-zinc-500 hidden md:block">
              <GraduationCap size={20} />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4 md:hidden">
                <GraduationCap size={16} className="text-zinc-500" />
                <span className="text-white font-medium tracking-widest text-sm">Education</span>
              </div>
              <h4 className="text-xl font-semibold text-white">SCTR's Pune Institute of Computer Technology</h4>
              <div className="flex items-center space-x-3 mt-2 mb-3">
                <span className="text-zinc-500 text-[10px] font-mono tracking-[0.2em] uppercase">June 2022 – April 2026</span>
                <span className="flex-1 h-px bg-zinc-800/50"></span>
              </div>
              <p className="text-zinc-400">Bachelor of Engineering in Electronics and Telecommunication</p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -left-12 top-1 text-zinc-500 hidden md:block">
              <Trophy size={20} />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6 md:hidden">
                <Trophy size={16} className="text-zinc-500" />
                <span className="text-white font-medium tracking-widest text-sm">Achievements</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-6 hidden md:block">Achievements</h4>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <Award size={16} className="text-zinc-600 mt-1 mr-4 flex-shrink-0 group-hover:text-zinc-400 transition-colors" />
                  <div>
                    <span className="text-zinc-300 group-hover:text-white transition-colors block">Oracle Cloud Infrastructure Foundations Associate (2025)</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Award size={16} className="text-zinc-600 mt-1 mr-4 flex-shrink-0 group-hover:text-zinc-400 transition-colors" />
                  <div>
                    <span className="text-zinc-300 group-hover:text-white transition-colors block mb-1">LeetCode Rating 1550+</span>
                    <p className="text-zinc-500 text-sm font-mono tracking-widest">350+ problems solved</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
