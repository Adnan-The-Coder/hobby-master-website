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
  const [preferredSchedule, setPreferredSchedule] = useState("");
  const [preferDeadlines, setPreferDeadlines] = useState(false);
  const [preferredDeadline, setPreferredDeadline] = useState("");

  const scheduleOptions = ["Morning", "Afternoon", "Evening", "Flexible"];
  const deadlineOptions = ["1 week", "2 weeks", "3 weeks", "1 month"];

  const handleNext = () => {
    console.log("Preferred Schedule:", preferredSchedule);
    console.log("Prefer Deadlines:", preferDeadlines);
    if (preferDeadlines) {
      console.log("Preferred Deadline:", preferredDeadline);
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
          When do you prefer to learn? 📅
        </h2>

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

        {/* Deadline Preference */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Do you prefer deadlines to stay on track and avoid procrastination?
          </h3>
          <div className="flex space-x-4 mb-2">
            <label
              className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                preferDeadlines
                  ? "bg-teal-100 border-teal-500"
                  : "bg-gray-100 border-gray-300"
              }`}
              onClick={() => setPreferDeadlines(true)}
            >
              <input
                type="radio"
                name="preferDeadlines"
                checked={preferDeadlines}
                onChange={() => setPreferDeadlines(true)}
                className="form-radio h-5 w-5 text-teal-500"
              />
              <span className="text-gray-700 font-medium">Yes</span>
            </label>
            <label
              className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                !preferDeadlines
                  ? "bg-teal-100 border-teal-500"
                  : "bg-gray-100 border-gray-300"
              }`}
              onClick={() => setPreferDeadlines(false)}
            >
              <input
                type="radio"
                name="preferDeadlines"
                checked={!preferDeadlines}
                onChange={() => setPreferDeadlines(false)}
                className="form-radio h-5 w-5 text-teal-500"
              />
              <span className="text-gray-700 font-medium">No</span>
            </label>
          </div>
          <p className="text-sm text-gray-600">
            Deadlines are dynamic and can be adjusted, but they encourage consistency and help you avoid procrastination.
          </p>
        </div>

        {/* Preferred Deadline Selection */}
        {preferDeadlines && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Select your preferred deadline:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deadlineOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center space-x-3 border rounded-lg p-3 cursor-pointer transition ${
                    preferredDeadline === option
                      ? "bg-teal-100 border-teal-500"
                      : "bg-gray-100 border-gray-300"
                  }`}
                  onClick={() => setPreferredDeadline(option)}
                >
                  <input
                    type="radio"
                    name="preferredDeadline"
                    value={option}
                    checked={preferredDeadline === option}
                    onChange={() => setPreferredDeadline(option)}
                    className="form-radio h-5 w-5 text-teal-500"
                  />
                  <span className="text-gray-700 font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

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
            disabled={
              !preferredSchedule ||
              (preferDeadlines && !preferredDeadline)
            }
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              !preferredSchedule ||
              (preferDeadlines && !preferredDeadline)
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
