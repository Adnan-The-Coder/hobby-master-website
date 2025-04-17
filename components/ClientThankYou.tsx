"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the ThankYouAnimation component with no SSR
const ThankYouAnimation = dynamic(() => import('./ThankYouComponent'), { 
  ssr: false,
  loading: () => <div className="hidden"></div>
});

interface ClientThankYouProps {
  show: boolean;
  onClose: () => void;
}

const ClientThankYou: React.FC<ClientThankYouProps> = ({ show, onClose }) => {
  // Use state to track if we're on the client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render on the client
  if (!isMounted) {
    return null;
  }

  return <ThankYouAnimation show={show} onClose={onClose} />;
};

export default ClientThankYou;