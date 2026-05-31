import React from 'react';
import { motion } from 'motion/react';

const skills = [
  // Language
  { name: "JavaScript", category: "Language", delay: 0 },
  { name: "C++", category: "Language", delay: 0.1 },
  { name: "Python", category: "Language", delay: 0.2 },
  { name: "HTML/CSS", category: "Language", delay: 0.3 },

  // Frontend
  { name: "React.js", category: "Frontend", delay: 0.4 },
  { name: "Tailwind CSS", category: "Frontend", delay: 0.5 },
  { name: "Framer Motion", category: "Frontend", delay: 0.6 },
  
  // Backend
  { name: "Node.js", category: "Backend", delay: 0.7 },
  { name: "Express.js", category: "Backend", delay: 0.8 },
  { name: "WebRTC", category: "Backend", delay: 0.9 },
  { name: "Socket.io", category: "Backend", delay: 1.0 },

  // Database
  { name: "MongoDB", category: "Database", delay: 1.1 },
  { name: "MySQL", category: "Database", delay: 1.2 },
  { name: "Redis", category: "Database", delay: 1.3 },
  { name: "SQL", category: "Database", delay: 1.4 },

  // Tools & Others
  { name: "Linux", category: "Tools", delay: 1.5 },
  { name: "Git", category: "Tools", delay: 1.6 },
  { name: "LangChain", category: "Tools", delay: 1.7 },
];

const SkillsSection = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen w-full bg-zinc-950 py-32 px-8 md:px-16 flex flex-col items-center overflow-hidden">
      
      {/* Background decorative grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-0 right-0 h-px bg-zinc-800/20" />
        <div className="absolute bottom-[30%] left-0 right-0 h-px bg-zinc-800/20" />
        <div className="absolute top-0 bottom-0 left-[30%] w-px bg-zinc-800/20" />
        <div className="absolute top-0 bottom-0 right-[30%] w-px bg-zinc-800/20" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mb-24 z-10"
      >
        <div className="flex items-center space-x-4 mb-3">
          <span className="w-8 h-px bg-zinc-500"></span>
          <span className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase">Tools & Technologies</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-none">
          TECHNICAL SKILLS
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {['Language', 'Frontend', 'Backend', 'Database', 'Tools'].map((cat, catIdx) => {
          const catSkills = skills.filter(s => s.category === cat);
          return (
            <motion.div
              key={cat}
              className="relative p-8 border border-zinc-800/60 bg-zinc-950/60 group hover:border-zinc-500/50 transition-colors duration-500 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              {/* Corner brackets that appear on hover */}
              <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center space-x-3 mb-8">
                <span className="text-zinc-400 text-xs font-mono tracking-[0.3em] uppercase">{cat}</span>
                <span className="flex-1 h-px bg-zinc-800/50"></span>
                <span className="text-zinc-600 font-mono text-[10px]">0{catIdx + 1}</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {catSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 text-sm hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all cursor-default"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
