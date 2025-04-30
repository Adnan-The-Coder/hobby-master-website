import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import Globe from '@/components/source-code-components/jarvis/v2/Globe';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ipAddress, setIpAddress] = useState('192.168.1.1');
  const [location, setLocation] = useState('LOCATION: UNKNOWN');
  const [systemData, setSystemData] = useState({
    cpuUsage: '32%',
    memory: '4.2 GB / 16.0 GB',
    temperature: '42°C',
    network: '128.5 MB/s',
    securityStatus: 'SECURE',
    entrySpeed: '618.86 KM/H',
    currentSpeed: '514.67 KM/H',
    timeRemaining: '00:42:27',
    distance: '1067.108 KM'
  });
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Controls for animations
  const controls = useAnimation();

  // Parallax transformations
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const moveX = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const moveY = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);

  // Mouse movement handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  // Update data and time periodically
  useEffect(() => {
    // Generate random IP and location on load
    const randomIP = () => {
      return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    };
    
    const locations = ['NEW YORK', 'LONDON', 'TOKYO', 'BERLIN', 'SYDNEY'];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    
    setIpAddress(randomIP());
    setLocation(`LOCATION: ${randomLocation}`);
    
    // Update system data
    const dataInterval = setInterval(() => {
      setSystemData({
        cpuUsage: `${Math.floor(Math.random() * 60 + 20)}%`,
        memory: `${(Math.random() * 8 + 2).toFixed(1)} GB / 16.0 GB`,
        temperature: `${Math.floor(Math.random() * 20 + 35)}°C`,
        network: `${(Math.random() * 200 + 50).toFixed(1)} MB/s`,
        securityStatus: 'SECURE',
        entrySpeed: '618.86 KM/H',
        currentSpeed: '514.67 KM/H',
        timeRemaining: '00:42:27',
        distance: '1067.108 KM'
      });
    }, 3000);
    
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    // Show the interface after a delay
    setTimeout(() => {
      setIsLoaded(true);
      controls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
    }, 500);
    
    return () => {
      clearInterval(dataInterval);
      clearInterval(timeInterval);
    };
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dark background with subtle grid */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-black to-cyan-900/5" />
        <div className="absolute h-full w-full opacity-20"
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} />
      </div>
      
      {/* Ambient corner lights */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-900/10 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-cyan-900/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-900/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-cyan-900/10 to-transparent" />
      
      {/* System Data - Top Left */}
      <motion.div 
        className="absolute top-8 left-8 text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="text-xs text-cyan-400 opacity-70">SYSTEM STATUS</div>
        <div className="text-sm text-cyan-300 font-mono">CPU USAGE: {systemData.cpuUsage}</div>
        <div className="text-sm text-cyan-300 font-mono">MEMORY: {systemData.memory}</div>
        <div className="text-sm text-cyan-300 font-mono">TEMP: {systemData.temperature}</div>
        <div className="text-sm text-cyan-300 font-mono">NETWORK: {systemData.network}</div>
      </motion.div>
      
      {/* Security Data - Top Right */}
      <motion.div 
        className="absolute top-8 right-8 text-right"
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-xs text-cyan-400 opacity-70">SECURITY STATUS</div>
        <div className="text-sm text-cyan-300 font-mono">IP ADDRESS: {ipAddress}</div>
        <div className="text-sm text-cyan-300 font-mono">{location}</div>
        <div className="text-sm text-cyan-300 font-mono">STATUS: {systemData.securityStatus}</div>
        <div className="flex justify-end mt-1">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </motion.div>
      
      {/* Navigation Data - Bottom Left */}
      <motion.div 
        className="absolute bottom-8 left-8 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="text-xs text-cyan-400 opacity-70">NAVIGATION</div>
        <div className="text-sm text-cyan-300 font-mono">ENTRY SPEED: {systemData.entrySpeed}</div>
        <div className="text-sm text-cyan-300 font-mono">CURRENT SPEED: {systemData.currentSpeed}</div>
        <div className="text-sm text-cyan-300 font-mono">TIME REMAINING: {systemData.timeRemaining}</div>
        <div className="text-sm text-cyan-300 font-mono">DISTANCE: {systemData.distance}</div>
      </motion.div>
      
      {/* Scan Results - Bottom Right */}
      <motion.div 
        className="absolute bottom-8 right-8 text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="text-xs text-cyan-400 opacity-70">SCAN RESULTS</div>
        <div className="h-16 w-16 border border-cyan-400 rounded-full ml-auto relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-full h-1 bg-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ originX: 0.5, originY: 0.5 }}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Globe in Center */}
            <Globe/>
            
      {/* Header */}
      <motion.div
        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
          NEURAL INTERFACE
        </h1>
        <div className="text-xs text-cyan-300 mt-1">
          SYSTEM VERSION 2.0 • INITIALIZING GLOBAL SCAN
        </div>
      </motion.div>
      
      {/* Footer status */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="text-xs text-cyan-400 font-mono tracking-wider">
          SYSTEM READY • AWAITING COMMAND • {currentTime}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;