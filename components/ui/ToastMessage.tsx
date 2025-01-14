"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ToastMessageProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const toastStyles = {
  success: 'bg-green-700', // Solid green
  error: 'bg-red-600',     // Solid red
  info: 'bg-blue-600',     // Solid blue
};

const ToastMessage: React.FC<ToastMessageProps> = ({ message, type, onClose }) => {
  return (
    <motion.div
      className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white ${toastStyles[type]}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <div className="flex items-center">
          <div className="mr-3">
            {type === 'success' && <span role="img" aria-label="Success">✓</span>}
            {type === 'error' && <span role="img" aria-label="Error">🗙</span>}
            {type === 'info' && <span role="img" aria-label="Info">ⓘ</span>}
          </div>
          <span>{message}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ToastMessage;    