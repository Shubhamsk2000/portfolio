import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    role: "Backend Developer",
    company: "Spandan Technologies PVT. LTD",
    location: "Pune, India",
    date: "Aug 2025 – Feb 2026",
    points: [
      "Engineered a Plagiarism Pipeline: Built a hybrid backend engine combining TF-IDF + Cosine Similarity for direct copies with Sentence-BERT for semantic paraphrasing.",
      "Integrated SQLite FTS5 to filter potential matches to under 100 candidate documents, eliminating slow exhaustive scans and drastically reducing deep AI processing time.",
      "Developed backend logic to compute a weighted similarity score (40% TF-IDF / 60% BERT) and extract categorized risk snippets (High/Medium) for real-time UI highlighting.",
      "Authored robust REST endpoints for automated text cleaning, SHA-256 document hashing, and runtime fallback logic to handle missing GPU dependencies gracefully."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Virtuebyte",
    location: "Pune, India",
    date: "Aug 2024 – Jan 2025",
    points: [
      "+30% faster page load time by optimizing React components and integrating efficient backend APIs.",
      "Built secure authentication system with JWT, password hashing, and email notifications using Node.js, Express.js, and Nodemailer.",
      "Deployed serverless architecture (AWS Lambda + S3) improving scalability and reducing infrastructure overhead.",
      "Collaborated in Agile team, contributing to code reviews and improving code quality across releases."
    ]
  }
];

const ExperienceSection = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen w-full bg-zinc-950 py-32 px-8 md:px-16 flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mb-24"
      >
        <div className="flex items-center space-x-4 mb-3">
          <span className="w-8 h-px bg-zinc-500"></span>
          <span className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase">My journey so far</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-none">
          EXPERIENCE
        </h2>
      </motion.div>

      <div className="w-full max-w-4xl relative border-l border-zinc-800/50 pl-8 md:pl-16 ml-4 md:ml-0">
        
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="mb-24 last:mb-0 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[38px] md:-left-[70px] top-2 w-3 h-3 rounded-full bg-white border-2 border-zinc-950 shadow-[0_0_0_4px_rgba(39,39,42,0.5)]" />

            <div className="flex items-center space-x-3 mb-4">
              <span className="text-zinc-500 text-[10px] font-mono tracking-[0.2em] uppercase">{exp.date}</span>
              <span className="flex-1 h-px bg-zinc-800/50"></span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{exp.role}</h3>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-white font-medium">{exp.company}</span>
              <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
              <span className="text-zinc-400">{exp.location}</span>
            </div>

            <ul className="space-y-4">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} className="flex space-x-4 group">
                  <div className="mt-2 w-1.5 h-1.5 bg-zinc-700 rounded-full shrink-0 group-hover:bg-white transition-colors" />
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* End marker */}
        <div className="flex items-center space-x-4 pt-12">
          <span className="w-3 h-px bg-zinc-700"></span>
          <span className="text-zinc-700 font-mono text-[10px] tracking-[0.2em]">EOF</span>
          <span className="flex-1 h-px bg-zinc-800/30"></span>
        </div>
      </div>

    </section>
  );
};

export default ExperienceSection;
