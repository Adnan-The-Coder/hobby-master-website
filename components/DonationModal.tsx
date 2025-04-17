import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHeart, FaRupeeSign } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import axios from 'axios';
import ThankYouAnimation from './ThankYouComponent';
import ClientThankYou from './ClientThankYou';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  const donationAmounts = [30, 100, 500, 1000];

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
        body: JSON.stringify({ amount: amount * 100 }),
      });
      
      const data = await res.json();
      
      // Setup Razorpay payment
      const PaymentData = {
        key: process.env.RAZORPAY_LIVE_KEY_ID,
        order_id: data.id,
        
        handler: async function (response: any) {
          // Verify payment
          const res = await fetch("/api/payments/razorpay/verifyOrder", {
            method: "POST",
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });
          
          const data = await res.json();
          console.log(data);
          
          if (data.isOk) {
            // Payment successful
            // router.push('/Payment-Success');
            setShowThankYou(true);
            // Could add email notification here if needed in the future
          } else {
            alert("Payment failed");
          }
        },
        // Add prefill and theme options for better UX
        prefill: {
          name: "JARVIS Supporter",
        },
        theme: {
          color: "#6366f1",
        }
      };

      const payment = new (window as any).Razorpay(PaymentData);
      payment.open();
      
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

  // Handle thank you animation close
  const handleThankYouClose = () => {
    setShowThankYou(false);
    onClose(); // Close the donation modal after thank you animation
  };
  
  return (
    <>
      <Script 
        type='text/javascript'
        src='https://checkout.razorpay.com/v1/checkout.js'
      />
      <AnimatePresence>
        {isOpen && (
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
                <ClientThankYou
                    show={showThankYou} 
                    onClose={handleThankYouClose} 
                />
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
    </>
  );
};

export default DonationModal;