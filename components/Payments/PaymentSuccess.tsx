"use client";
import React from "react";
import ConfettiBackground from "../InsaneReusableBg";

const PaymentSuccess: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      {/* Custom Confetti Background */}
      <ConfettiBackground
        easing={[0.68, -0.55, 0.27, 1.55]} // Custom cubic-bezier easing
        background="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" // Gradient background
        shape="circle" // Confetti shape: circle
        particleSize={{ min: 5, max: 15 }} // Particle size range
        numberOfParticles={150} // Number of particles
        speedRange={{ min: 6, max: 12 }} // Particle fall speed range
        particleColors={["#ff00ff", "#ff9900", "#66ccff"]} // Custom particle colors
      />

      {/* Content */}
      <div className="relative text-center px-4 py-6 bg-white shadow-lg rounded-lg md:w-3/4 lg:w-1/2 xl:w-1/3 z-20">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Payment Successful</h2>
        <p className="text-lg text-gray-800 mb-6">Thank you for your payment! Your transaction was successful.</p>
        <button
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => window.location.href = "/"} // Redirect to homepage or another page
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
