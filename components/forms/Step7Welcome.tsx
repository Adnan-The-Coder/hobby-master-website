"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Step7Welcome = ({
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const [shortTermGoals, setShortTermGoals] = useState("");
  const [longTermGoals, setLongTermGoals] = useState("");
  const [industryPreference, setIndustryPreference] = useState("");

  const industryOptions = [
    "Technology",
    "Healthcare",
    "Education",
    "Finance",
    "Arts and Entertainment",
    "Other",
  ];

  const handleNext = () => {
    console.log("Short-Term Goals:", shortTermGoals);
    console.log("Long-Term Goals:", longTermGoals);
    console.log("Industry Preference:", industryPreference);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Let’s talk about your career goals 🎯
        </h2>

        {/* Short-Term Goals Input */}
        <div className="mb-6">
          <label htmlFor="shortTermGoals" className="text-lg font-medium text-gray-700 mb-3 block">
            What are your short-term goals?
          </label>
          <textarea
            id="shortTermGoals"
            rows={4}
            placeholder="E.g., Learn Python, build a portfolio project..."
            value={shortTermGoals}
            onChange={(e) => setShortTermGoals(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        {/* Long-Term Goals Input */}
        <div className="mb-6">
          <label htmlFor="longTermGoals" className="text-lg font-medium text-gray-700 mb-3 block">
            What are your long-term goals?
          </label>
          <textarea
            id="longTermGoals"
            rows={4}
            placeholder="E.g., Become a software engineer, start my own business..."
            value={longTermGoals}
            onChange={(e) => setLongTermGoals(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        {/* Industry Preference Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Which industry interests you the most?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industryOptions.map((industry) => (
              <label
                key={industry}
                className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                  industryPreference === industry
                    ? "bg-blue-100 border-blue-500"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setIndustryPreference(industry)}
              >
                <input
                  type="radio"
                  name="industryPreference"
                  value={industry}
                  checked={industryPreference === industry}
                  onChange={() => setIndustryPreference(industry)}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="text-gray-700 font-medium">{industry}</span>
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
            disabled={!shortTermGoals || !longTermGoals || !industryPreference}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              !shortTermGoals || !longTermGoals || !industryPreference
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

export default Step7Welcome;
