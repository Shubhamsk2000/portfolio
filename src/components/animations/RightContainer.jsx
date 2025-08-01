import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const RightContainer = ({ children }) => {
  return (
    <motion.div
      className="h-[70vh] flex-1 bg-[var(--primary-color)] shadow-lg overflow-hidden relative w-full items-center justify-center rounded-2xl"
      initial={{ scale: 0.8, opacity: 0, x: 50 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        scale: { duration: 1.0, ease: "backOut" }
      }}
    >

      <div className="h-full w-full relative z-0 text-center">
        {children}
      </div>

      {/* Overlay 1 */}
      <motion.div
        className="absolute inset-0 bg-[var(--com-color)] z-10 w-full"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Overlay 2 */}
      <motion.div
        className="absolute inset-0 bg-[var(--primary-color)] z-10 w-full"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

    </motion.div>
  )
}

export default RightContainer
