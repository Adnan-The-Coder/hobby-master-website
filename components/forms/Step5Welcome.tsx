"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Step5Welcome = ({
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const [timeCommitment, setTimeCommitment] = useState("");
  const [preferredSchedule, setPreferredSchedule] = useState("");

  const timeOptions = [
    "Less than 1 hour per day",
    "1-2 hours per day",
    "3-5 hours per day",
    "More than 5 hours per day",
  ];

  const scheduleOptions = [
    "Morning",
    "Afternoon",
    "Evening",
    "Flexible",
  ];

  const handleNext = () => {
    console.log("Time Commitment:", timeCommitment);
    console.log("Preferred Schedule:", preferredSchedule);
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
          How much time can you commit to learning? ⏳📅
        </h2>

        {/* Time Commitment Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Select your time commitment:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {timeOptions.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                  timeCommitment === option
                    ? "bg-teal-100 border-teal-500"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setTimeCommitment(option)}
              >
                <input
                  type="radio"
                  name="timeCommitment"
                  value={option}
                  checked={timeCommitment === option}
                  onChange={() => setTimeCommitment(option)}
                  className="form-radio h-5 w-5 text-teal-500"
                />
                <span className="text-gray-700 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Preferred Schedule Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Select your preferred schedule:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scheduleOptions.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                  preferredSchedule === option
                    ? "bg-teal-100 border-teal-500"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setPreferredSchedule(option)}
              >
                <input
                  type="radio"
                  name="preferredSchedule"
                  value={option}
                  checked={preferredSchedule === option}
                  onChange={() => setPreferredSchedule(option)}
                  className="form-radio h-5 w-5 text-teal-500"
                />
                <span className="text-gray-700 font-medium">{option}</span>
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
            disabled={!timeCommitment || !preferredSchedule}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              !timeCommitment || !preferredSchedule
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

export default Step5Welcome;
