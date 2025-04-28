"use client";

import Globe from '@/components/source-code-components/jarvis/v2/Globe';
import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          JARVIS Global Monitoring System
        </h1>
        
        <div className="mb-8">
            <Globe/>
        </div>
        
        <div className="text-gray-400 text-center text-sm mt-8">
          <p>Interactive 3D Earth Globe with country information display.</p>
          <p>Part of the JARVIS SCI-FI HUD Interface System.</p>
        </div>
      </div>
    </div>
  );
}