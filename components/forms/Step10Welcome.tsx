"use client";
import React from "react";
import { motion } from "framer-motion";

const Step10Welcome = ({
  onPrevious,
  onComplete,
}: {
  onPrevious: () => void;
  onComplete: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-50 to-teal-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to Your Learning Journey! 🎉
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Thank you for providing your preferences! Based on the information
          you've shared, we'll create a personalized learning plan tailored
          specifically to your needs and goals.
        </p>

        {/* Summary Section */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Here's a quick summary of your preferences:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Interests and Goals:</strong> Custom data placeholder</li>
            <li><strong>Learning Preferences:</strong> Custom data placeholder</li>
            <li><strong>Skill Level:</strong> Custom data placeholder</li>
            <li><strong>Schedule:</strong> Custom data placeholder</li>
            <li><strong>Accessibility Needs:</strong> Custom data placeholder</li>
            <li><strong>Language Preference:</strong> Custom data placeholder</li>
          </ul>
        </div>

        <p className="text-center text-gray-600 mb-8">
          You’re all set! Click below to start exploring your personalized
          learning journey.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrevious}
            className="px-6 py-3 rounded-lg bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition"
          >
            Previous
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition"
          >
            Complete
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step10Welcome;
