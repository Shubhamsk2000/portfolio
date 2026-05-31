import React from 'react';
import { motion } from 'motion/react';
import { Phone, FileText } from 'lucide-react';

const ContactSection = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-32 bg-zinc-950 overflow-hidden py-32">
      
      {/* Background geometric lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-0 right-0 h-px bg-zinc-800/15" />
        <div className="absolute bottom-[20%] left-0 right-0 h-px bg-zinc-800/15" />
        <div className="absolute top-0 bottom-0 right-[30%] w-px bg-zinc-800/15" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="flex items-center space-x-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-8 h-px bg-zinc-500"></span>
          <span className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase">Let's Connect</span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-none tracking-tighter mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          GET IN<br className="md:hidden" /> TOUCH
        </motion.h1>

        {/* Email with geometric brackets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative inline-block"
        >
          <div className="absolute -top-3 -left-4 w-3 h-3 border-t border-l border-zinc-600/60 hidden md:block" />
          <div className="absolute -bottom-3 -right-4 w-3 h-3 border-b border-r border-zinc-600/60 hidden md:block" />
          <a
            href="mailto:skondhalkar316@gmail.com"
            className="text-2xl md:text-4xl lg:text-5xl font-medium text-white hover:text-zinc-300 transition-colors border-b-2 border-white pb-2 inline-block break-all"
          >
            skondhalkar316@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:items-center gap-6 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="tel:+919527883053"
            className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 hover:scale-105 transition-all w-full md:w-fit"
          >
            <Phone size={18} />
            <span>Call Me</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center justify-center space-x-3 bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 hover:border-zinc-500 hover:scale-105 transition-all w-full md:w-fit"
          >
            <FileText size={18} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-16 border-t border-zinc-800/50"
        >
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-6 h-px bg-zinc-600"></span>
            <span className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase">Socials</span>
          </div>
          <div className="grid grid-cols-2 md:flex md:space-x-12 gap-y-6 text-zinc-400">
            <a href="https://github.com/Shubhamsk2000" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center space-x-3 group">
              <i className="fab fa-github text-xl group-hover:-translate-y-1 transition-transform"></i>
              <span className="font-medium text-sm">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shubham-kondhalkar/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center space-x-3 group">
              <i className="fab fa-linkedin text-xl group-hover:-translate-y-1 transition-transform"></i>
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center space-x-3 group">
              <i className="fab fa-square-x-twitter text-xl group-hover:-translate-y-1 transition-transform"></i>
              <span className="font-medium text-sm">X / Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom data strip */}
      <div className="absolute bottom-8 left-8 right-8 md:left-16 md:right-16 flex flex-col md:flex-row items-start md:items-center justify-between text-zinc-700 text-[10px] font-mono tracking-[0.15em] uppercase gap-4">
        <span>© {new Date().getFullYear()} Shubham Kondhalkar</span>
        <div className="flex items-center space-x-4">
          <span className="w-4 h-px bg-zinc-800 hidden md:block"></span>
          <span>Pune, India</span>
          <span className="w-4 h-px bg-zinc-800"></span>
          <span>Portfolio v2</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
