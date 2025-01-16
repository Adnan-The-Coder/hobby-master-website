"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Step6Welcome = ({
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const [ageGroup, setAgeGroup] = useState("");
  const [culturalPreference, setCulturalPreference] = useState("");
  const [motivationalFactor, setMotivationalFactor] = useState("");

  const ageGroups = [
    "Under 18",
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55+",
  ];

  const culturalPreferences = [
    "Western",
    "Eastern",
    "Global",
    "Local",
  ];

  const motivationalFactors = [
    "Achieving a goal",
    "Gaining recognition",
    "Personal growth",
    "Curiosity",
  ];

  const handleNext = () => {
    console.log("Age Group:", ageGroup);
    console.log("Cultural Preference:", culturalPreference);
    console.log("Motivational Factor:", motivationalFactor);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-red-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Let’s understand more about you 🌟
        </h2>

        {/* Age Group Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Select your age group:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ageGroups.map((group) => (
              <label
                key={group}
                className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                  ageGroup === group
                    ? "bg-red-100 border-red-500"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setAgeGroup(group)}
              >
                <input
                  type="radio"
                  name="ageGroup"
                  value={group}
                  checked={ageGroup === group}
                  onChange={() => setAgeGroup(group)}
                  className="form-radio h-5 w-5 text-red-500"
                />
                <span className="text-gray-700 font-medium">{group}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Cultural Preference Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            What’s your cultural preference?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {culturalPreferences.map((preference) => (
              <label
                key={preference}
                className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                  culturalPreference === preference
                    ? "bg-red-100 border-red-500"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setCulturalPreference(preference)}
              >
                <input
                  type="radio"
                  name="culturalPreference"
                  value={preference}
                  checked={culturalPreference === preference}
                  onChange={() => setCulturalPreference(preference)}
                  className="form-radio h-5 w-5 text-red-500"
                />
                <span className="text-gray-700 font-medium">{preference}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Motivational Factors Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            What motivates you the most?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {motivationalFactors.map((factor) => (
              <label
                key={factor}
                className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                  motivationalFactor === factor
                    ? "bg-red-100 border-red-500"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setMotivationalFactor(factor)}
              >
                <input
                  type="radio"
                  name="motivationalFactor"
                  value={factor}
                  checked={motivationalFactor === factor}
                  onChange={() => setMotivationalFactor(factor)}
                  className="form-radio h-5 w-5 text-red-500"
                />
                <span className="text-gray-700 font-medium">{factor}</span>
              </label>
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
            disabled={!ageGroup || !culturalPreference || !motivationalFactor}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              !ageGroup || !culturalPreference || !motivationalFactor
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step6Welcome;
