import React from 'react'
import { motion } from 'framer-motion'

const SpanLines = () => {

    const lineVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    const containerVariants = {
        hidden: { x: -50 },
        visible: {
            x: 0,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1,
            }
        }
    }

    return (
        <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            <motion.div
                className="h-1 bg-[#ff4d5a] rounded-4xl w-24"
                variants={lineVariants}
            />
            <motion.div
                className="h-1 bg-[#ff4d5a] rounded-4xl w-24 ms-15"
                variants={lineVariants}
            />
        </motion.div>
    )
}

export default SpanLines
