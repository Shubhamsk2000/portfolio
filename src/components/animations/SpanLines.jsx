// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const SpanLines = () => {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        className="h-1.5 bg-[#ff4d5a] rounded-4xl w-40"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      />
      <motion.div
        className="h-1.5 bg-[#ff4d5a] rounded-4xl w-40 ms-15"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ amount: 0.3 }}
      />
    </div>
  )
}

export default SpanLines
