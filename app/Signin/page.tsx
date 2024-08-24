"use client";
import React, { useEffect, useState, useRef } from 'react';
import Footer from '@/components/Footer';
import Navbar2 from '@/components/Navbar2';

const Signin = () => {
  const [isClient, setIsClient] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // This will run only on the client side after the component mounts
    setIsClient(true);
    // Set the audio file
    setAudio(new Audio('/assets/button-sound.mp3'));
  }, []);

  const handleClick = () => {
    if (audio) {
      audio.play();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      <Navbar2 />
      <div id="hero" className="relative h-screen w-full">
        {isClient && (
          <video 
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/desk_hero.mp4" 
            autoPlay 
            loop 
            muted={isMuted}
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-6xl md:text-6xl lg:text-8xl font-bold mb-4">
            Sign In
          </h1>
          <br />
          <p className="text-white md:text-6xl lg:text-8xl font-bold mb-4">
            This Feature is Coming Soon
          </p>
          <br />
          <button 
            className="text-4xl bg-gradient-to-r from-red-400 to-white-500 text-white py-3 px-6 rounded-full text-lg font-medium animate-bounce"
            onClick={handleClick}
          >
            <a href="/" className="text-white hover:text-green">Back to Home</a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
