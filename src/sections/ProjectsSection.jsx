import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import paper_wise_sc from '../assets/paper-wise-sc.png';
import direct_drop_sc from '../assets/direct-drop-sc.png';

const projects = [
  {
    title: "PaperWise",
    subtitle: "AI-Powered RAG PDF Chat Web App",
    description: "Developed an AI-powered RAG platform using the MERN stack and Langchain, enabling users to perform context aware queries against uploaded PDF documents. Reduced latency via asynchronous ingestion using Redis and BullMQ.",
    stack: ["React", "Node.js", "MongoDB", "LangChain", "Redis"],
    link: "https://paper-wise.vercel.app/",
    github: null,
    imagePlaceholder: paper_wise_sc
  },
  {
    title: "DirectDrop",
    subtitle: "Real-Time P2P File Sharing",
    description: "Built full stack peer-to-peer file sharing application with React frontend and Node.js backend using WebRTC and Socket.io. Created chunked multi-file streaming with per-file progress tracking.",
    stack: ["React", "Node.js", "WebRTC", "Socket.io"],
    link: "https://direct-drop.vercel.app/",
    github: null,
    imagePlaceholder: direct_drop_sc
  },
  {
    title: "Proxy Web Server",
    subtitle: "Multithreaded C++ Server",
    description: "Built a multithreaded TCP proxy server in C++ on Linux using POSIX sockets, handling concurrent client requests efficiently. Implemented LRU cache with STL data structures to reduce network round-trips.",
    stack: ["C++", "Linux", "POSIX Sockets", "STL"],
    link: null,
    github: "https://github.com/Shubhamsk2000/proxy_webserver",
    imagePlaceholder: "bg-gradient-to-br from-rose-500/20 to-orange-500/20"
  }
];

const ProjectsSection = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen w-full bg-zinc-950 py-32 flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl px-8 md:px-16 mb-24"
      >
        <div className="flex items-center space-x-4 mb-3">
          <span className="w-8 h-px bg-zinc-500"></span>
          <span className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase">Featured Work</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-none">
          PROJECTS
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl px-6 md:px-16 space-y-32">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <div key={`project-${idx}`} className="w-full flex flex-col md:flex-row relative items-center gap-12 lg:gap-24">
              
              <div className={`w-full md:w-1/2 flex flex-col z-20 ${!isEven ? 'md:order-2' : 'md:order-1'}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="w-8 h-[2px] bg-white"></span>
                  <span className="text-white font-medium tracking-widest text-sm md:text-base">0{idx + 1}</span>
                </div>

                <motion.h3
                  className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {project.title.toUpperCase()}
                </motion.h3>

                <motion.div
                  className="text-zinc-400 leading-relaxed text-sm lg:text-base mb-8 bg-zinc-900/50 md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none border md:border-0 border-zinc-800/50 md:pl-5 md:border-l border-zinc-800/80"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {project.description}
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 hover:scale-105 transition-all shadow-xl group">
                      <ExternalLink size={20} className="md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700 text-white flex items-center justify-center hover:bg-zinc-800 hover:scale-105 transition-all">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  )}
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {project.stack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider rounded-full">
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              <div className={`w-full md:w-1/2 relative z-10 ${!isEven ? 'md:order-1' : 'md:order-2'}`}>
                <motion.div
                  className="w-full aspect-[4/3] relative shadow-2xl rounded-2xl overflow-hidden border border-zinc-800/60 group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={project.imagePlaceholder} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 md:via-transparent to-transparent opacity-60 md:opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
                </motion.div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
