import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import LeftElement from '../animations/LeftElement';
import SpanLines from '../animations/SpanLines';
import RightContainer from '../animations/RightContainer';

const SkillsContent = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2s delay between each child
        delayChildren: 0.1,   // small delay before starting
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (

    <div className="flex relative justify-between mx-[var(--section-padding)] gap-10">
      <div className="flex justify-between items-center relative ">
        <LeftElement>
          <div className="text-[75px] font-semibold -space-y-6 mb-5">
            <h1>Skills &</h1>
            <h1>Tech Stack</h1>
          </div>
          <SpanLines />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-2xl font-light group mt-10"
          >
            {["Backend", "Frontend", "Database", "Tools"].map((item) => (
              <motion.p key={item} variants={itemVariants}>
                {item}
              </motion.p>
            ))}
          </motion.div>

        </LeftElement>
      </div>
      
        <RightContainer>
            <div className="grid grid-cols-2 gap-8 max-w-md">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Vue.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Backend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>FastAPI</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Database</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Redis</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-400">Tools</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
        </RightContainer>

    </div>


  )
}

export default SkillsContent
