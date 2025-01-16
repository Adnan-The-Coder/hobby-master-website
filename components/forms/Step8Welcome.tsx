"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Step8Welcome = ({
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const [preferences, setPreferences] = useState<string[]>([]);

  const options = [
    "Project-Based Learning",
    "Gamification",
    "Storytelling",
    "Interactive Quizzes",
    "Collaborative Learning",
  ];

  const handleTogglePreference = (preference: string) => {
    setPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((item) => item !== preference)
        : [...prev, preference]
    );
  };

  const handleNext = () => {
    console.log("Engagement Preferences:", preferences);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-50 to-green-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Let’s customize your learning experience 🎨
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Select the engagement styles you enjoy most. You can choose more than one!
        </p>

        {/* Preferences Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleTogglePreference(option)}
              className={`p-4 rounded-lg border transition font-medium text-center ${
                preferences.includes(option)
                  ? "bg-green-100 border-green-500 text-green-800"
                  : "bg-gray-100 border-gray-300 text-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

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
            onClick={handleNext}
            disabled={preferences.length === 0}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              preferences.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step8Welcome;
