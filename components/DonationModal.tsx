"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHeart, FaRupeeSign } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { RiSparklingFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showText, setShowText] = useState(false);
  const router = useRouter();

  const donationAmounts = [30, 100, 500, 1000];

  // Thank you animation effect
  useEffect(() => {
    if (showThankYou) {
      setShowMessage(true);
      const textTimer = setTimeout(() => setShowText(true), 1000);
      const closeTimer = setTimeout(() => {
        setShowMessage(false);
        setShowText(false);
        setShowThankYou(false);
        onClose();
      }, 8000);
      
      return () => {
        clearTimeout(textTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [showThankYou, onClose]);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleDonate = async () => {
    const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);
    if (amount <= 0) return;

    setIsProcessing(true);
    
    try {
      // Create order directly
      const res = await fetch('/api/payments/razorpay/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      });
      
      const data = await res.json();
      
      // Setup Razorpay payment
      const PaymentData = {
        key: process.env.RAZORPAY_LIVE_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "JARVIS Assistant",
        description: "Donation to support JARVIS development",
        order_id: data.id,
        
        handler: async function (response: any) {
          // Verify payment
          const res = await fetch("/api/payments/razorpay/verifyOrder", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });
          
          const data = await res.json();
          
          if (data.isOk) {
            // Payment successful - show thank you animation
            setShowThankYou(true);
          } else {
            alert("Payment failed");
          }
        },
        prefill: {
          name: "JARVIS Supporter",
        },
        theme: {
          color: "#6366f1",
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      // Check if Razorpay is loaded
      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        const payment = new (window as any).Razorpay(PaymentData);
        payment.open();
      } else {
        throw new Error('Razorpay SDK not loaded');
      }
      
      // Reset processing state after Razorpay modal opens
      setIsProcessing(false);
    } catch (error) {
      console.error("Payment error:", error);
      alert("There was an error processing your payment. Please try again.");
      setIsProcessing(false);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Create confetti elements for thank you animation
  const confetti = Array.from({ length: 50 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute pointer-events-none"
      initial={{
        x: Math.random() * 200 - 100,
        y: -20,
        scale: 0,
        rotate: 0,
        opacity: 1,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      animate={{
        x: Math.random() * 400 - 200,
        y: 600,
        scale: Math.random() * 0.7 + 0.3,
        rotate: Math.random() * 720 - 360,
        opacity: 0,
      }}
      transition={{
        duration: Math.random() * 3 + 4,
        delay: Math.random() * 2,
        ease: "easeInOut",
      }}
      style={{
        backgroundColor: i % 4 === 0 ? '#FFD700' : 
                        i % 4 === 1 ? '#FF69B4' : 
                        i % 4 === 2 ? '#00BFFF' : '#FF4500',
        width: '8px',
        height: '8px',
        borderRadius: i % 3 === 0 ? '50%' : '0%',
      }}
    />
  ));

  // Create sparkles for thank you animation
  const sparkles = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={`sparkle-${i}`}
      className="absolute pointer-events-none"
      initial={{
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        x: Math.cos(i * 18 * Math.PI / 180) * 150,
        y: Math.sin(i * 18 * Math.PI / 180) * 150,
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: i * 0.1,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <RiSparklingFill className="text-2xl text-yellow-400" />
    </motion.div>
  ));
  
  return (
    <>
      <Script 
        type='text/javascript'
        src='https://checkout.razorpay.com/v1/checkout.js'
        strategy="lazyOnload"
      />
      
      {/* Donation Modal */}
      <AnimatePresence>
        {isOpen && !showThankYou && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onClose}
            >
              <motion.div 
                className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                    Support JARVIS Development
                  </h2>
                  <button 
                    onClick={onClose}
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 mb-4">
                    Your donation helps us continue to improve JARVIS and develop new features. Thank you for your support!
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        className={`py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                          selectedAmount === amount 
                            ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        <FaRupeeSign />
                        <span>{amount}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaRupeeSign className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </div>

                <motion.button
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isProcessing || (!selectedAmount && !customAmount)}
                  onClick={handleDonate}
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      <BiDonateHeart className="text-xl" />
                      <span>Donate Now</span>
                    </>
                  )}
                </motion.button>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    Powered by Razorpay. Your payment information is secure.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Thank You Animation */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Dark overlay with blur */}
            <motion.div 
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Confetti container with constrained size */}
            <div className="relative w-full max-w-[600px] h-[600px] max-h-screen overflow-hidden flex items-center justify-center">
              {confetti}
            </div>

            {/* Main thank you message container */}
            {showMessage && (
              <motion.div 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {/* 3D Heart Animation */}
                <motion.div
                  className="relative"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotateY: { duration: 6, ease: "linear", repeat: Infinity },
                    scale: { duration: 2, ease: "easeInOut", repeat: Infinity },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Heart with gradient background */}
                  <motion.div 
                    className="relative w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 flex items-center justify-center"
                    style={{ 
                      boxShadow: "0 0 40px rgba(255, 105, 180, 0.8)",
                      transform: "rotateX(30deg) rotateY(30deg)",
                    }}
                  >
                    <FiHeart className="text-white text-6xl" />
                    {sparkles}
                  </motion.div>

                  {/* Glowing rings */}
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 rounded-full border-2"
                      style={{
                        borderColor: `rgba(255, 105, 180, ${1 - ring * 0.3})`,
                      }}
                      animate={{
                        scale: [1, 1.5 + ring * 0.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        delay: ring * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>

                {/* Thank you text */}
                {showText && (
                  <motion.div
                    className="mt-8 w-full text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.h2 
                      className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 mb-4"
                      animate={{ 
                        y: [0, -10, 0],
                        textShadow: [
                          "0 0 20px rgba(255, 105, 180, 0.7)",
                          "0 0 40px rgba(255, 105, 180, 0.9)",
                          "0 0 20px rgba(255, 105, 180, 0.7)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Thank You!
                    </motion.h2>
                    <motion.p 
                      className="text-xl md:text-2xl text-gray-300 mb-2"
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Your generosity powers JARVIS!
                    </motion.p>
                    <motion.p 
                      className="text-base md:text-lg text-gray-400"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      Together we're building something amazing
                    </motion.p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Fireworks - Fixed width container */}
            <div className="absolute inset-0 overflow-hidden">
              {showMessage && Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={`firework-${i}`}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  {Array.from({ length: 8 }).map((_, j) => (
                    <motion.div
                      key={`particle-${i}-${j}`}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: i % 3 === 0 ? '#FFD700' : 
                                       i % 3 === 1 ? '#FF69B4' : '#00BFFF'
                      }}
                      initial={{ x: 0, y: 0 }}
                      animate={{
                        x: Math.cos(j * 45 * Math.PI / 180) * 100,
                        y: Math.sin(j * 45 * Math.PI / 180) * 100,
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.5,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DonationModal;