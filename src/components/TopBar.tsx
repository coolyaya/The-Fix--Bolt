import React, { useState, useEffect } from 'react';

const TopBar: React.FC = () => {
  const messages = [
    "Student discount — 10% off with valid ID",
    "Now servicing iPhone 17 / new models",
    "Same-day repair available — book early",
    "Free diagnostics with any repair service"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="top-promo-bar">
      <div className="text-gray-300 text-sm font-medium uppercase tracking-wide transition-all duration-500">
        {messages[currentMessage]}
      </div>
      
      <style jsx>{`
        .top-promo-bar {
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-inline: clamp(12px, 3vw, 24px);
          background: var(--pink-tint-1);
          border-bottom: 1px solid var(--pink-stroke);
          position: static;
          z-index: auto;
        }
        
        .text-gray-300 {
          color: var(--text);
        }
      `}</style>
    </div>
  );
};

export default TopBar;