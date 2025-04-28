import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaGithub, 
  FaLinkedin, 
  FaYoutube 
} from 'react-icons/fa';
import { 
  BiDonateHeart, 
  BiMenuAltRight
} from 'react-icons/bi';
import { 
  MdOutlineLibraryBooks, 
  MdCode, 
  MdOutlineQuestionAnswer,
  MdShield,
  MdFlightTakeoff,
  MdGridView
} from 'react-icons/md';

function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  // Handle scroll effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleNavbar = () => {
    setShowNav(prevShowNav => !prevShowNav);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    if (showNav) setShowNav(false);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };
  
  const menuItemVariants = {
    closed: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 } 
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 } 
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <MdOutlineLibraryBooks className="text-2xl text-blue-400" /> },
    { id: 'installation', label: 'Installation', icon: <MdFlightTakeoff className="text-2xl text-red-400" /> },
    { id: 'features', label: 'Features', icon: <MdShield className="text-2xl text-yellow-400" /> },
    { id: 'code-structure', label: 'Code Structure', icon: <MdGridView className="text-2xl text-green-400" /> },
    { id: 'api-reference', label: 'API Reference', icon: <MdCode className="text-2xl text-purple-400" /> },
    { id: 'examples', label: 'Examples', icon: <MdOutlineQuestionAnswer className="text-2xl text-cyan-400" /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
      className={`sticky top-0 z-50 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'} backdrop-filter backdrop-blur-lg text-gray-200 transition-all duration-500 border-b ${scrolled ? 'border-blue-900/30' : 'border-transparent'}`}
    >
      <div className="container mx-auto">
        {/* HUD Top Border */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full w-20 bg-white opacity-30"
            animate={{ 
              x: ["0%", "100%"],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "linear",
            }}
          />
        </div>

        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo Section with Iron Man-inspired Animation */}
          <motion.div 
            className="flex items-center"
            initial={initialLoad ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Arc Reactor Logo Animation */}
            <div className="relative mr-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <motion.div 
                  className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center"
                  animate={{ 
                    boxShadow: ["0 0 5px 2px rgba(59, 130, 246, 0.7)", "0 0 15px 5px rgba(59, 130, 246, 0.9)", "0 0 5px 2px rgba(59, 130, 246, 0.7)"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                JARVIS ASSISTANT
              </span>
              <span className="text-xs md:text-sm font-medium text-blue-300">
                Version 2
              </span>
            </div>
          </motion.div>
          
          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 focus:outline-none transition-all duration-300 shadow-lg shadow-blue-500/20"
            onClick={toggleNavbar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            {showNav ? <FaTimes className="text-lg" /> : <BiMenuAltRight className="text-xl" />}
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <motion.a 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`py-2 px-3 mx-1 rounded-md cursor-pointer transition-all duration-300 flex items-center space-x-1 ${activeSection === item.id ? 'bg-gradient-to-r from-blue-900/70 to-blue-800/70 text-blue-200 border border-blue-500/30' : 'hover:bg-blue-900/30 border border-transparent hover:border-blue-500/20'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`text-sm font-medium ${activeSection === item.id ? 'text-blue-200' : 'text-gray-300'}`}>
                  {item.label}
                </span>
              </motion.a>
            ))}
            
            <motion.a 
              href="#donate"
              onClick={() => scrollToSection('donate')}
              className="py-2 px-4 ml-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center space-x-2 border border-blue-400/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiDonateHeart className="text-xl" />
              <span>Support</span>
            </motion.a>

            {/* Social Icons */}
            <div className="flex space-x-2 ml-4">
              {[
                { Icon: FaGithub, href: "https://github.com/yourusername/jarvis" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/syedadnanali99" },
                { Icon: FaYoutube, href: "https://www.youtube.com" }
              ].map(({ Icon, href }, index) => (
                <motion.a 
                  key={index}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-blue-900/30 text-blue-300 hover:bg-blue-800/50 hover:text-white border border-blue-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <AnimatePresence>
            {showNav && (
              <>
                {/* Backdrop */}
                <motion.div 
                  className="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowNav(false)}
                />
                
                {/* Mobile Menu */}
                <motion.div 
                  className="fixed inset-0 z-50 lg:hidden flex flex-col bg-gradient-to-b from-gray-900 to-black h-screen"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {/* Menu Header with Tech Animation */}
                  <div className="relative border-b border-blue-900/40">
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
                      <motion.div 
                        className="absolute top-0 left-0 h-full w-20 bg-white opacity-30"
                        animate={{ 
                          x: ["0%", "100%"],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1.5,
                          ease: "linear",
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center p-4">
                      <div className="flex items-center">
                        {/* Mini Arc Reactor */}
                        <div className="relative mr-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/50">
                            <motion.div 
                              className="w-4 h-4 rounded-full bg-blue-200"
                              animate={{ 
                                boxShadow: ["0 0 5px 2px rgba(59, 130, 246, 0.7)", "0 0 10px 4px rgba(59, 130, 246, 0.9)", "0 0 5px 2px rgba(59, 130, 246, 0.7)"]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            >
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                            </motion.div>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                            JARVIS ASSISTANT
                          </span>
                          <span className="text-xs font-medium text-blue-300">
                            MARK II • SYSTEM ONLINE
                          </span>
                        </div>
                      </div>
                      <motion.button 
                        onClick={() => setShowNav(false)}
                        className="p-2 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/30 hover:bg-blue-800 focus:outline-none"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaTimes className="text-xl" />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center p-6 space-y-4 overflow-y-auto min-h-[500px]">
                    {navItems.map((item, index) => (
                      <motion.a 
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setShowNav(false);
                        }} 
                        className={`w-full max-w-md py-4 px-6 rounded-lg text-center text-lg font-medium cursor-pointer transition-all duration-300 ${activeSection === item.id ? 'bg-gradient-to-r from-blue-900 to-blue-800 text-blue-200 border border-blue-500/40' : 'bg-blue-900/20 text-gray-200 hover:bg-blue-900/40 border border-blue-500/20'} flex items-center justify-start space-x-4`}
                        variants={menuItemVariants}
                        custom={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        {activeSection === item.id && (
                          <motion.div 
                            className="ml-auto w-2 h-8 bg-blue-400 rounded-full"
                            layoutId="activeIndicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    ))}
                    
                    <motion.a 
                      href="#donate"
                      onClick={() => {
                        scrollToSection('donate');
                        setShowNav(false);
                      }}
                      className="w-full max-w-md py-4 px-6 rounded-lg text-center text-lg font-medium bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg flex items-center justify-center space-x-3 border border-blue-400/30"
                      variants={menuItemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <BiDonateHeart className="text-xl" />
                      <span>Support Project</span>
                    </motion.a>
                  </div>
                  
                  {/* Tech-themed Footer */}
                  <div className="p-4 border-t border-blue-900/40 bg-blue-950/30">
                    {/* HUD Lines Animation */}
                    <div className="relative h-1 mb-4">
                      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/30">
                        <motion.div 
                          className="absolute top-0 left-0 h-full w-20 bg-blue-400 opacity-30"
                          animate={{ 
                            x: ["0%", "100%"],
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            ease: "linear",
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-6 mb-2">
                      {[
                        { Icon: FaGithub, href: "https://github.com/yourusername/jarvis" },
                        { Icon: FaLinkedin, href: "https://www.linkedin.com/in/syedadnanali99" },
                        { Icon: FaYoutube, href: "https://www.youtube.com" }
                      ].map(({ Icon, href }, index) => (
                        <motion.a 
                          key={index}
                          href={href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-blue-900/30 text-blue-300 hover:bg-blue-800/50 hover:text-white border border-blue-500/20 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="text-xl" />
                        </motion.a>
                      ))}
                    </div>
                    
                    <div className="text-center text-xs text-blue-400/70 mt-2">
                      <p>"Sometimes you gotta run before you can walk" - Tony Stark</p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;