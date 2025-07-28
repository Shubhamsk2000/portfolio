/* eslint-disable no-unused-vars */

import { motion } from 'motion/react';
import LeftElement from '../animations/LeftElement';
import SpanLines from '../animations/SpanLines';

export default function HeroContent() {
  return (
    <div className="h-full">
      <div className="flex lg:flex-row  h-full mx-[var(--section-padding)] gap-12 justify-between">

        <LeftElement>
          <div className='text-[80px] mt-20 font-semibold -space-y-6 mb-5'>
            <h1>SHUBHAM</h1>
            <h1> KONDHALKAR</h1>
          </div>
          <SpanLines />
          <div className='text-2xl font-light group mt-10'>
            <p>Fullstack Developer</p>
            <p className='hidden hover:inline'>“Fullstack… because I like suffering on both ends 😅”</p>
          </div>
        </LeftElement >

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            opacity: { duration: 0.6 }
          }}
          className=" relative flex justify-center  lg:justify-end  items-center "
        >
         
          <img
            src="/main_person.svg"
            alt="Shubham Kondhalkar"
            className=" "
          />
        </motion.div>

      </div>
    </div>
  );
}
