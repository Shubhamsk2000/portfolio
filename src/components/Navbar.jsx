import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ sectionNames, sectionIds, activeId, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (id) => {
    setIsOpen(false);
    navigateTo(id);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 md:px-16 flex justify-between items-center bg-transparent mix-blend-difference pointer-events-none">
        <div className="text-xl font-semibold tracking-tight text-white pointer-events-auto">
          SK.
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 pointer-events-auto">
          {sectionNames.map((name, idx) => {
            const id = sectionIds[idx];
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  activeId === id ? 'text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden pointer-events-auto">
          <button onClick={toggleMenu} className="text-white hover:text-zinc-300 transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col space-y-8 items-center">
              {sectionNames.map((name, idx) => {
                const id = sectionIds[idx];
                return (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => handleNavClick(id)}
                    className={`text-3xl font-black tracking-tight uppercase transition-colors duration-300 ${
                      activeId === id ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'
                    }`}
                  >
                    {name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
