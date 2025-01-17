import { motion } from "framer-motion";
import React, { useEffect } from "react";

const Step1Welcome = ({ onNext }: { onNext: () => void }) => {
  useEffect(() => {
    // Generate a unique session ID if it doesn't already exist
    const generateSessionId = () => {
      const existingSessionId = localStorage.getItem("personalized_session_id");
      if (!existingSessionId) {
        const newSessionId = Array.from({ length: 20 }, () =>
          Math.random().toString(36).charAt(2)
        ).join("");
        localStorage.setItem("personalized_session_id", newSessionId);
        console.log("Generated Session ID:", newSessionId);
      } else {
        console.log("Existing Session ID:", existingSessionId);
      }
    };

    generateSessionId();
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Welcome Text */}
      <div className="text-center max-w-xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Welcome to Hobby Master! 🎉
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Let’s create a personalized roadmap to turn your hobbies into a
          profession. Answer a few quick questions, and we’ll take care of the
          rest. This will only take 2-3 minutes!
        </motion.p>
      </div>

      {/* Start Button */}
      <motion.button
        className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
      >
        Start
      </motion.button>
    </motion.div>
  );
};

export default Step1Welcome;
