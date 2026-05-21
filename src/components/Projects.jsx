import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import directdropImg from '../assets/directdrop.png'
import paperwiseImg from '../assets/paperwise.png'

const projects = [
  {
    id: 1,
    title: 'PaperWise',
    subtitle: 'AI-Powered RAG PDF Chat Web App',
    date: 'Aug 2024 – Jan 2025',
    description: 'Developed an AI-powered RAG platform using the MERN stack and LangChain, enabling users to perform context-aware queries against uploaded PDF documents. Reduced document processing latency by designing an asynchronous ingestion pipeline using Redis and BullMQ.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB Vector Search', 'LangChain', 'Redis', 'BullMQ', 'Tailwind CSS'],
    link: 'https://github.com/Shubhamsk2000/paperwise',
    img: paperwiseImg,
  },
  {
    id: 2,
    title: 'DirectDrop',
    subtitle: 'Real-Time P2P File Sharing Application',
    date: 'Jan 2024',
    description: 'Built a full-stack peer-to-peer file sharing application with a React frontend and Node.js backend using WebRTC and Socket.io. Implemented chunked multi-file streaming with per-file progress tracking and STUN-based peer negotiation.',
    tags: ['WebRTC', 'React', 'Node.js', 'Express.js', 'Socket.io', 'STUN'],
    link: 'https://github.com/Shubhamsk2000',
    img: directdropImg,
  },
  {
    id: 3,
    title: 'C++ Proxy Server',
    subtitle: 'Multithreaded System Proxy',
    date: 'Jun 2023',
    description: 'Built a multithreaded TCP proxy server in C++ on Linux using POSIX sockets, handling concurrent client requests efficiently. Implemented an LRU cache with STL data structures to reduce network round-trips and response latency.',
    tags: ['C++', 'Linux', 'POSIX Sockets', 'LRU Cache', 'Multithreading'],
    link: 'https://github.com/Shubhamsk2000',
    isTerminal: true,
  },
]

const TerminalCard = ({ active }) => (
  <div className={`w-full h-full bg-[#090D16] rounded-2xl p-5 font-mono text-[11px] text-[#a7f3d0] flex flex-col transition-all duration-500 shadow-[inset_0_0_30px_rgba(0,0,0,0.85)] ${active ? 'border border-[#ff4d5a]/25' : 'border border-white/5'
    }`}>
    {/* Window Controls */}
    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2.5">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <span className="text-white/35 text-[10px] tracking-wider">proxy_server.cpp</span>
      <div className="w-[30px]" />
    </div>

    {/* Code Terminal Output */}
    <div className="flex flex-col gap-1.5 overflow-hidden flex-1">
      <div className="flex gap-2">
        <span className="text-(--accent)">$</span>
        <span className="text-(--text-primary)">g++ -pthread -o proxy proxy_server.cpp</span>
      </div>
      <div className="flex gap-2 mb-1.5">
        <span className="text-(--accent)">$</span>
        <span className="text-(--text-primary)">./proxy --port 8080 --cache 1024</span>
      </div>
      <span className="text-[#60a5fa]/90">[INFO] Server listening on port 8080...</span>
      <span className="text-[#34d399]/90">[CACHE] LRU Cache initialized (capacity: 1024)</span>
      <span className="text-[#eab308]/90">[THREAD] Pool size: 8 worker threads active</span>
      <span className="text-white/50 mt-1">[CONN] Client connection from 127.0.0.1:49321</span>
      <span className="text-white/70">[REQ] GET http://example.com/index.html HTTP/1.1</span>
      <span className="text-[#eab308]">{"[CACHE] Hash Key: \"http://example.com/index.html\" -> MISS"}</span>
      <span className="text-[#60a5fa]">[PROXY] Fetching from host example.com:80...</span>
      <span className="text-[#34d399]">{"[CACHE] Caching payload (14.2 KB) -> Success"}</span>
      <span className="text-[#22c55e]">[CONN] Response HTTP/1.1 200 OK sent to client</span>
    </div>
  </div>
)

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]
  const containerRef = useRef(null)
  const lastScrollTime = useRef(0)

  // Listen for wheel events anywhere on the Projects section to change active index
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleWheel = (e) => {
      const now = Date.now()

      // Ignore tiny scroll ticks
      if (Math.abs(e.deltaY) < 15) return

      if (now - lastScrollTime.current < 700) {
        e.stopPropagation()
        e.preventDefault()
        return
      }

      if (e.deltaY > 0) {
        // Scroll down
        if (activeIndex < projects.length - 1) {
          e.stopPropagation()
          e.preventDefault()
          setActiveIndex(activeIndex + 1)
          lastScrollTime.current = now
        }
      } else {
        // Scroll up
        if (activeIndex > 0) {
          e.stopPropagation()
          e.preventDefault()
          setActiveIndex(activeIndex - 1)
          lastScrollTime.current = now
        }
      }
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [activeIndex])

  return (
    <div className="section-layout overflow-hidden" ref={containerRef}>
      <div className="section-label">Selected work</div>
      <h2 className="section-heading mb-5">Projects</h2>

      <div className="flex flex-1 gap-12 items-center w-full">
        {/* Left Side: Index Indicators & Project Details */}
        <div className="flex-[1.2] flex gap-8 relative">

          {/* Index Indicators */}
          <div className="flex flex-col gap-5 pt-1">
            {projects.map((p, idx) => {
              const isActive = idx === activeIndex
              return (
                <div
                  key={p.id}
                  className={`flex items-center gap-3 font-mono text-[13px] transition-colors duration-300 py-1.5 select-none text-left ${isActive ? 'text-(--accent) font-bold' : 'text-(--text-muted) font-normal'
                    }`}
                >
                  {isActive && <span className="w-4 h-[1.5px] bg-(--accent)" />}
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                </div>
              )
            })}
          </div>

          {/* Details Content Container */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col relative"
          >
            {/* Massive transparent background watermark */}
            <div className="absolute font-sans text-[clamp(64px,10vw,120px)] font-black text-white/1.5 -z-10 pointer-events-none -top-12 -left-5 select-none uppercase tracking-tighter">
              {activeProject.title}
            </div>

            {/* Date Tag */}
            <div className="flex items-center gap-3 mb-2">
              <span className="tag-pill">{activeProject.date}</span>
            </div>

            {/* Subtitle / Headline */}
            <h3 className="text-[clamp(24px,3.5vw,36px)] font-bold text-(--text-primary) tracking-tight uppercase mb-4 leading-tight">
              {activeProject.subtitle}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-(--text-secondary) font-light max-w-[520px] mb-5">
              {activeProject.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 max-w-[520px] mb-7">
              {activeProject.tags.map(tag => (
                <span key={tag} className="font-mono text-[11px] text-(--text-muted) bg-white/3 border border-(--border-subtle) rounded-md px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Diagonal Link Icon */}
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-full bg-(--accent) flex items-center justify-center text-white text-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              ↗
            </a>
          </motion.div>

        </div>

        {/* Right Side: Simple spring anim viewport using framer motion */}
        <div className="w-[440px] h-[350px] relative flex items-center justify-center overflow-hidden">
          {/* Subtle vignettes to fade items exiting viewport */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-linear-to-b from-(--bg-base) to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-(--bg-base) to-transparent z-10 pointer-events-none" />

          {/* Simple Motion Container Track */}
          <div className="w-full h-full overflow-hidden">
            <motion.div
              className="flex flex-col gap-6 w-full"
              animate={{ y: -activeIndex * (350 + 24) }} // card height (350) + gap (24)
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            >
              {projects.map((project, idx) => {
                const isActive = idx === activeIndex
                return (
                  <div
                    key={project.id}
                    className={`w-full shrink-0 rounded-2xl overflow-hidden bg-[#090D16] transition-all duration-500 ${isActive
                        ? 'shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 scale-100 opacity-100 blur-0 grayscale-0'
                        : 'shadow-[0_10px_20px_rgba(0,0,0,0.3)] scale-[0.92] opacity-35 blur-[1px] grayscale-25'
                      }`}
                    style={{ height: '350px' }}
                  >
                    {project.isTerminal ? (
                      <TerminalCard active={isActive} />
                    ) : (
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover object-top block"
                      />
                    )}
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
