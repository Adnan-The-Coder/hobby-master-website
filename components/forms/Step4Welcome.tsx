"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Step4Welcome = ({
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
  const [background, setBackground] = useState("");

  const skillLevels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ];

  const handleNext = () => {
    console.log("Skill Level:", selectedSkillLevel);
    console.log("Background:", background);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          What’s your current skill level and background? 📊📚
        </h2>

        {/* Skill Level Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Select your skill level:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillLevels.map((level) => (
              <label
                key={level}
                className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                  selectedSkillLevel === level
                    ? "bg-orange-100 border-orange-500"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setSelectedSkillLevel(level)}
              >
                <input
                  type="radio"
                  name="skillLevel"
                  value={level}
                  checked={selectedSkillLevel === level}
                  onChange={() => setSelectedSkillLevel(level)}
                  className="form-radio h-5 w-5 text-orange-500"
                />
                <span className="text-gray-700 font-medium">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Background Input */}
        <div className="mb-6">
          <label
            htmlFor="background"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Share a bit about your background (optional):
          </label>
          <textarea
            id="background"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            placeholder="Describe your prior experience, educational background, or anything else you'd like us to know."
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-orange-500 focus:border-orange-500"
          ></textarea>
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
            disabled={!selectedSkillLevel}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              !selectedSkillLevel
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step4Welcome;
