"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Step9Welcome = ({
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const [language, setLanguage] = useState<string>("");
  const [accessibilityNeeds, setAccessibilityNeeds] = useState<string[]>([]);

  const accessibilityOptions = [
    "High-Contrast Mode",
    "Screen Reader Support",
    "Captions/Subtitles",
    "Keyboard Navigation",
    "Reduced Animations",
  ];

  const handleToggleAccessibility = (option: string) => {
    setAccessibilityNeeds((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    console.log("Preferred Language:", language);
    console.log("Accessibility Needs:", accessibilityNeeds);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Accessibility and Language Preferences 🌍
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Let us know your preferred language and any accessibility needs for an
          optimized learning experience.
        </p>

        {/* Language Selection */}
        <div className="mb-6">
          <label
            htmlFor="language"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Preferred Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Mandarin">Mandarin</option>
          </select>
        </div>

        {/* Accessibility Needs */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Accessibility Needs
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {accessibilityOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleToggleAccessibility(option)}
                className={`p-4 rounded-lg border transition font-medium text-center ${
                  accessibilityNeeds.includes(option)
                    ? "bg-blue-100 border-blue-500 text-blue-800"
                    : "bg-gray-100 border-gray-300 text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
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
            disabled={!language}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              !language
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step9Welcome;
