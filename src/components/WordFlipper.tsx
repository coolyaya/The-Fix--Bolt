import React, { useState, useEffect } from 'react';

interface WordFlipperProps {
  words: string[];
  interval?: number;
}

const WordFlipper: React.FC<WordFlipperProps> = ({ words, interval = 1500 }) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (phase === 'enter') {
      timeout = setTimeout(() => setPhase('hold'), 280);
    } else if (phase === 'hold') {
      timeout = setTimeout(() => setPhase('exit'), 1000);
    } else if (phase === 'exit') {
      timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase('enter');
      }, 280);
    }

    return () => clearTimeout(timeout);
  }, [phase, words.length]);

  return (
    <>
      <span className="sr-only" aria-live="polite">
        Device type updates every few seconds
      </span>
      <span 
        className="word-flip" 
        aria-hidden="true"
        data-phase={phase}
      >
        {words[index]}
      </span>
      
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .word-flip::after {
            content: ", iPad, Android, Laptop and more";
            font-weight: 500;
            color: var(--muted);
          }
        }
      `}</style>
    </>
  );
};

export default WordFlipper;