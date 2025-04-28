import React from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import { MdOutlineLibraryBooks, MdCode, MdOutlineQuestionAnswer, MdPlayArrow } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Hero() {
    const [activeSection, setActiveSection] = useState<string>("overview");
    const [showNav, setShowNav] = useState<boolean>(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
        if (showNav) setShowNav(false);
      };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x">
                JARVIS Assistant
            </h1>
            
            {/* Animated Version Badge */}
            <motion.div 
                className="inline-flex items-center justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div 
                className="relative inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                {/* Animated circles in background */}
                <motion.div 
                    className="absolute inset-0 rounded-full bg-cyan-500/10 blur-md"
                    animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5]
                    }}
                    transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute inset-0 rounded-full bg-purple-500/10 blur-md"
                    animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                    }}
                />
                
                {/* Version text with animated gradient */}
                <motion.span 
                    className="text-sm font-bold text-cyan-400 mr-3"
                    animate={{ 
                    textShadow: [
                        "0 0 10px #22d3ee, 0 0 20px #22d3ee",
                        "0 0 20px #a855f7, 0 0 30px #a855f7",
                        "0 0 10px #ec4899, 0 0 20px #ec4899",
                        "0 0 10px #22d3ee, 0 0 20px #22d3ee"
                    ]
                    }}
                    transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                    }}
                >
                    VERSION
                </motion.span>
                
                {/* Animated number */}
                <motion.span 
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                    animate={{ 
                    scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                    }}
                >
                    1.0
                </motion.span>
                
                {/* Animated pulse ring */}
                <motion.div 
                    className="absolute inset-0 rounded-full border border-cyan-400/50"
                    animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                    }}
                />
                </motion.div>
            </motion.div>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
                A powerful Python-based virtual assistant inspired by Iron Man's JARVIS
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                href="https://github.com/Adnan-The-Coder/jarvis-build-v1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3 px-8 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
                </motion.a>
                <motion.button 
                onClick={() => scrollToSection('code-structure')}
                className="py-3 px-8 rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <MdCode className="text-xl" />
                <span>Explore Code</span>
                </motion.button>
                <motion.a 
                href="https://youtu.be/MhrdmK2o9-4?si=csE6nCGNKJPIYaTM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3 px-8 rounded-md bg-gradient-to-r from-pink-500 to-red-600 text-white font-medium hover:from-pink-600 hover:to-red-700 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <MdPlayArrow className="text-xl" />
                <span>Watch Demo</span>
                </motion.a>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Hero
