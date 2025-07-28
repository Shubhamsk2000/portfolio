// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
const LeftElement = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={{
          hidden: { x: -150, opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 100,
              opacity: { duration: 0.8, ease: "easeOut" }
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default LeftElement
