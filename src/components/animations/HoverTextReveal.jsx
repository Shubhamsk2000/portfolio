/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const HoverTextReveal = ({ children }) => {
    return (
        <motion.span
            className="relative inline-block overflow-hidden h-[1.2em] cursor-pointer"
            initial="initial"
            whileHover="hover"
        >
            {/* Top text */}
            <motion.span
                variants={{
                    initial: { y: "0%" },
                    hover: { y: "-100%" },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="block"
            >
                <span className="leading-none">{children}</span>
            </motion.span>

            {/* Bottom text */}
            <motion.span
                variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute left-0 top-0 block"
            >
                <span className="leading-none">{children}</span>
            </motion.span>
        </motion.span>
    );
};

export default HoverTextReveal;