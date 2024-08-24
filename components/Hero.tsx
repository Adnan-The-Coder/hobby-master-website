"use client";
import { useEffect, useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Hero = () => {
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
    <div id="hero" className="relative h-screen w-full">
      {isClient && (
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/desk_2_hero.mp4" 
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-6xl lg:text-8xl font-bold mb-4">
          Innovate with Intelligence
        </h1>
        <br />
        <button 
          className="text-4xl bg-gradient-to-r from-orange-400 to-blue-500 text-white py-3 px-6 rounded-full text-lg font-medium animate-bounce"
          onClick={handleClick}
        >
          <a href="/Courses" className="text-white hover:text-green">Courses</a>
        </button>
      </div>
      <button 
        className="absolute bottom-8 right-8 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={toggleMute}
      >
        {isMuted ? (
          <FaVolumeMute className="h-6 w-6" />
        ) : (
          <FaVolumeUp className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default Hero;
