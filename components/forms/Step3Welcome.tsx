"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Step3Welcome = ({ onNext, onPrevious }: { onNext: () => void; onPrevious: () => void }) => {
  const [learningPreferences, setLearningPreferences] = useState<string[]>([]);
  const [pace, setPace] = useState("");
  const [gamifiedInterest, setGamifiedInterest] = useState<number>(3); // Default to level 3
  const [storytellingInterest, setStorytellingInterest] = useState<number>(3); // Default to level 3

  const preferences = [
    "Kinesthetic (hands-on, interactive projects)",
    "Reading/Writing (text-based content, guides)",
    "Gamified learning",
    "Storytelling-based",
    "A mix of everything",
  ];

  const handleCheckboxChange = (preference: string) => {
    setLearningPreferences((prev) =>
      prev.includes(preference) ? prev.filter((item) => item !== preference) : [...prev, preference]
    );
  };

  const handleNext = () => {
    if (learningPreferences.length === 0 || pace.trim() === "") {
      alert("Please select at least one learning preference and a pace.");
      return;
    }
    console.log("Learning Preferences:", learningPreferences);
    console.log("Preferred Pace:", pace);
    if (learningPreferences.includes("Gamified learning")) {
      console.log("Interest in Gamified Learning:", gamifiedInterest);
    }
    if (learningPreferences.includes("Storytelling-based")) {
      console.log("Interest in Storytelling:", storytellingInterest);
    }
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-50 to-teal-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Let’s understand your learning preferences! 📘🎮
        </h2>

        {/* Learning Preferences */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            What is your preferred way of learning? (Select all that apply)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {preferences.map((preference) => (
              <label
                key={preference}
                className="flex items-center space-x-3 bg-teal-50 rounded-lg p-3 hover:bg-teal-100 transition cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={preference}
                  checked={learningPreferences.includes(preference)}
                  onChange={() => handleCheckboxChange(preference)}
                  className="form-checkbox h-5 w-5 text-teal-500"
                />
                <span className="text-gray-700 font-medium">{preference}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Gamified Interest Slider */}
        {learningPreferences.includes("Gamified learning") && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              How interested are you in gamified content? 🎮
            </h3>
            <input
              type="range"
              min="1"
              max="5"
              value={gamifiedInterest}
              onChange={(e) => setGamifiedInterest(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-center mt-2 text-gray-600">
              {gamifiedInterest === 1
                ? "Not interested"
                : gamifiedInterest === 5
                ? "Highly interested"
                : `Level ${gamifiedInterest}`}
            </p>
          </div>
        )}

        {/* Storytelling Interest Slider */}
        {learningPreferences.includes("Storytelling-based") && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              How much storytelling do you want in your courses? 📖
            </h3>
            <input
              type="range"
              min="1"
              max="5"
              value={storytellingInterest}
              onChange={(e) => setStorytellingInterest(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-center mt-2 text-gray-600">
              {storytellingInterest === 1
                ? "Minimal"
                : storytellingInterest === 5
                ? "A lot"
                : `Level ${storytellingInterest}`}
            </p>
          </div>
        )}

        {/* Pace */}
        <div className="mb-8">
          <label htmlFor="pace" className="block text-gray-700 font-medium mb-2">
            What pace works best for you?
          </label>
          <select
            id="pace"
            value={pace}
            onChange={(e) => setPace(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="" disabled>
              Select your preferred pace
            </option>
            <option value="Fast-paced (1-2 hours/day)">Fast-paced (1-2 hours/day)</option>
            <option value="Moderate (30-60 minutes/day)">Moderate (30-60 minutes/day)</option>
            <option value="Relaxed (less than 30 minutes/day)">Relaxed (less than 30 minutes/day)</option>
          </select>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrevious}
            className="px-6 py-3 rounded-lg bg-gray-300 text-gray-800 font-semibold shadow hover:bg-gray-400 transition"
          >
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={
              learningPreferences.length === 0 || pace.trim() === ""
            }
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              learningPreferences.length === 0 || pace.trim() === ""
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600"
            }`}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step3Welcome;
