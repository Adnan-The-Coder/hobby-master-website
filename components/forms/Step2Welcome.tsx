"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Step2Welcome = ({ onNext }: { onNext: () => void }) => {
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [otherHobby, setOtherHobby] = useState("");

  const hobbies = ["Programming", "Painting", "Music", "Cooking", "Writing", "Fitness"];

  const handleCheckboxChange = (hobby: string) => {
    setSelectedHobbies((prev) =>
      prev.includes(hobby) ? prev.filter((item) => item !== hobby) : [...prev, hobby]
    );
  };

  const handleOtherHobbyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherHobby(event.target.value);
  };

  const handleNext = () => {
    // Collect selected hobbies and proceed
    const allHobbies = [...selectedHobbies];
    if (otherHobby.trim()) allHobbies.push(otherHobby.trim());
    console.log("Selected Hobbies:", allHobbies);
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
          What hobbies or activities excite you the most? 🎨🎶
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {hobbies.map((hobby) => (
            <label
              key={hobby}
              className="flex items-center space-x-3 bg-indigo-50 rounded-lg p-3 hover:bg-indigo-100 transition cursor-pointer"
            >
              <input
                type="checkbox"
                value={hobby}
                checked={selectedHobbies.includes(hobby)}
                onChange={() => handleCheckboxChange(hobby)}
                className="form-checkbox h-5 w-5 text-indigo-500"
              />
              <span className="text-gray-700 font-medium">{hobby}</span>
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label htmlFor="other-hobby" className="block text-gray-700 font-medium mb-2">
            Other Hobby (Optional):
          </label>
          <input
            id="other-hobby"
            type="text"
            value={otherHobby}
            onChange={handleOtherHobbyChange}
            placeholder="Enter your hobby"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={selectedHobbies.length === 0 && !otherHobby.trim()}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              selectedHobbies.length === 0 && !otherHobby.trim()
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step2Welcome;
