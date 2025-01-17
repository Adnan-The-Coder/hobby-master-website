"use client";
import React, { useState } from "react";
import Step1Welcome from "@/components/forms/Step1Welcome";
import Step2Welcome from "@/components/forms/Step2Welcome";
import Step3Welcome from "@/components/forms/Step3Welcome";
// Import additional steps here (Step4Welcome, Step5Welcome, etc.)
// Replace these imports with your actual components
import Step4Welcome from "@/components/forms/Step4Welcome";
import Step5Welcome from "@/components/forms/Step5Welcome";
import Step6Welcome from "@/components/forms/Step6Welcome";
import Step7Welcome from "@/components/forms/Step7Welcome";
import Step8Welcome from "@/components/forms/Step8Welcome";
import Step9Welcome from "@/components/forms/Step9Welcome";
import Step10Welcome from "@/components/forms/Step10Welcome";

function Page() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 10)); // Adjust max to 10 for total steps
  };
  const handleComplete = () => {
    console.log("Pushing Data to database....")
    // Data pushing to DB Here
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1)); // Adjust min to the first step
  };

  return (
    <div>
      {/* Render steps dynamically based on currentStep */}
      {currentStep === 1 && <Step1Welcome onNext={handleNext} />}
      {currentStep === 2 && <Step2Welcome onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 3 && <Step3Welcome onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 4 && <Step4Welcome onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 5 && <Step5Welcome onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 6 && <Step6Welcome onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 7 && <Step7Welcome onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 8 && <Step8Welcome onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 9 && <Step9Welcome onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 10 && <Step10Welcome onComplete={handleComplete} onPrevious={handlePrevious} />}

      {/* Navigation Buttons */}
      <div className="fixed bottom-4 left-4 right-4 flex justify-between items-center">
        {currentStep > 1 && (
          <button
            onClick={handlePrevious}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-400 transition"
          >
            Previous
          </button>
        )}
        {currentStep < 10 && (
          <button
            onClick={handleNext}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-600 transition ml-auto"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Page;
