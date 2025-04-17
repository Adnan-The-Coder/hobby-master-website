"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiDonateHeart } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { RiSparklingFill } from 'react-icons/ri';

interface ThankYouAnimationProps {
  show: boolean;
  onClose: () => void;
}

const ThankYouAnimation: React.FC<ThankYouAnimationProps> = ({ show, onClose }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [confettiCount, setConfettiCount] = useState(50);

  useEffect(() => {
    if (show) {
      setShowMessage(true);
      const textTimer = setTimeout(() => setShowText(true), 1000);
      const closeTimer = setTimeout(() => {
        setShowMessage(false);
        setShowText(false);
        onClose();
      }, 8000);
      
      // Cleanup timers on unmount or when show changes
      return () => {
        clearTimeout(textTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [show, onClose]);

  // Create an array of confetti elements
  const confetti = Array.from({ length: confettiCount }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute pointer-events-none"
      initial={{
        x: Math.random() * 200 - 100, // Reduced spread to stay within viewport
        y: -20,
        scale: 0,
        rotate: 0,
        opacity: 1,
        left: '50%', // Start from the center
        transform: 'translateX(-50%)', // Ensure proper centering
      }}
      animate={{
        x: Math.random() * 400 - 200, // Controlled spread
        y: 600, // Fixed height instead of window height
        scale: Math.random() * 0.7 + 0.3,
        rotate: Math.random() * 720 - 360,
        opacity: 0,
      }}
      transition={{
        duration: Math.random() * 3 + 4,
        delay: Math.random() * 2,
        ease: "easeInOut",
      }}
      style={{
        backgroundColor: i % 4 === 0 ? '#FFD700' : 
                        i % 4 === 1 ? '#FF69B4' : 
                        i % 4 === 2 ? '#00BFFF' : '#FF4500',
        width: '8px',
        height: '8px',
        borderRadius: i % 3 === 0 ? '50%' : '0%',
      }}
    />
  ));

  // Create an array of sparkles
  const sparkles = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={`sparkle-${i}`}
      className="absolute pointer-events-none"
      initial={{
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        x: Math.cos(i * 18 * Math.PI / 180) * 150,
        y: Math.sin(i * 18 * Math.PI / 180) * 150,
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: i * 0.1,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <RiSparklingFill className="text-2xl text-yellow-400" />
    </motion.div>
  ));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Dark overlay with blur */}
          <motion.div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Confetti container with constrained size */}
          <div className="relative w-full max-w-[600px] h-[600px] max-h-screen overflow-hidden flex items-center justify-center">
            {confetti}
          </div>

          {/* Main thank you message container */}
          {showMessage && (
            <motion.div 
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* 3D Heart Animation */}
              <motion.div
                className="relative"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotateY: { duration: 6, ease: "linear", repeat: Infinity },
                  scale: { duration: 2, ease: "easeInOut", repeat: Infinity },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Heart with gradient background */}
                <motion.div 
                  className="relative w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 flex items-center justify-center"
                  style={{ 
                    boxShadow: "0 0 40px rgba(255, 105, 180, 0.8)",
                    transform: "rotateX(30deg) rotateY(30deg)",
                  }}
                >
                  <FiHeart className="text-white text-6xl" />
                  {sparkles}
                </motion.div>

                {/* Glowing rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 rounded-full border-2"
                    style={{
                      borderColor: `rgba(255, 105, 180, ${1 - ring * 0.3})`,
                    }}
                    animate={{
                      scale: [1, 1.5 + ring * 0.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      delay: ring * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Thank you text */}
              {showText && (
                <motion.div
                  className="mt-8 w-full text-center"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.h2 
                    className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 mb-4"
                    animate={{ 
                      y: [0, -10, 0],
                      textShadow: [
                        "0 0 20px rgba(255, 105, 180, 0.7)",
                        "0 0 40px rgba(255, 105, 180, 0.9)",
                        "0 0 20px rgba(255, 105, 180, 0.7)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Thank You!
                  </motion.h2>
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-300 mb-2"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Your generosity powers JARVIS!
                  </motion.p>
                  <motion.p 
                    className="text-base md:text-lg text-gray-400"
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    Together we're building something amazing
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Fireworks - Fixed width container */}
          <div className="absolute inset-0 overflow-hidden">
            {showMessage && Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`firework-${i}`}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 200 - 100, // Centered with variance
                  y: Math.random() * 200 - 100, // Centered with variance
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {Array.from({ length: 8 }).map((_, j) => (
                  <motion.div
                    key={`particle-${i}-${j}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: i % 3 === 0 ? '#FFD700' : 
                                     i % 3 === 1 ? '#FF69B4' : '#00BFFF'
                    }}
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: Math.cos(j * 45 * Math.PI / 180) * 100,
                      y: Math.sin(j * 45 * Math.PI / 180) * 100,
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.5,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouAnimation;