import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define the types for customization props
interface ConfettiBackgroundProps {
  easing?: string | number[]; // Ease or cubic-bezier easing
  background?: string; // Background style (e.g., gradient, color)
  shape?: "circle" | "square"; // Shape of the confetti
  particleSize?: { min: number; max: number }; // Size range for the confetti particles
  numberOfParticles?: number; // How many particles to generate
  speedRange?: { min: number; max: number }; // Range of particle falling speed
  particleColors?: string[]; // Custom colors for confetti
}

// Define a particle type for TypeScript
interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  speed: number;
  delay: number;
  color: string;
}

const ConfettiBackground: React.FC<ConfettiBackgroundProps> = ({
  easing = "easeOut",
  background = "bg-gradient-to-r from-green-400 to-blue-500",
  shape = "circle",
  particleSize = { min: 5, max: 10 },
  numberOfParticles = 100,
  speedRange = { min: 5, max: 10 },
  particleColors = ["#ffdd57", "#ff66b2", "#4caf50", "#00bcd4"], // Default particle colors
}) => {
  const [confetti, setConfetti] = useState<Particle[]>([]); // Use the Particle type here

  useEffect(() => {
    // Generate confetti particles
    const generateConfetti = () => {
      const confettiArray: Particle[] = []; // Use the Particle type for the array
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * (particleSize.max - particleSize.min) + particleSize.min;
        confettiArray.push({
          id: i,
          x: Math.random() * window.innerWidth, // Random X position
          y: Math.random() * window.innerHeight, // Random Y position
          rotation: Math.random() * 360, // Random rotation
          size,
          speed: Math.random() * (speedRange.max - speedRange.min) + speedRange.min, // Random falling speed
          delay: Math.random() * 5, // Random delay for more randomness
          color: particleColors[Math.floor(Math.random() * particleColors.length)], // Random color
        });
      }
      setConfetti(confettiArray);
    };

    generateConfetti();
  }, [numberOfParticles, particleSize, speedRange, particleColors]);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-10 ${background}`}
      style={{ position: "absolute", overflow: "hidden" }}
    >
      {/* Confetti particles */}
      {confetti.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${shape === "circle" ? "rounded-full" : ""}`}
          style={{
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
            top: particle.y,
            left: particle.x,
          }}
          animate={{
            y: [particle.y, window.innerHeight + 100], // Falling animation
            x: [particle.x, particle.x + Math.random() * 400 - 200], // Horizontal movement
            rotate: [particle.rotation, particle.rotation + 720], // Rotating effect
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity, // Infinite loop for continuous fall
            repeatType: "loop",
            delay: particle.delay,
            ease: easing, // Custom easing
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiBackground;
