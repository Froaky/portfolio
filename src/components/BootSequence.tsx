'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  "> INITIALIZING_FROAKY_CORE...",
  "> LOADING_SYSTEMS_ANALYST_RESOURCES...",
  "> MOUNTING_ARCHIVE/REPOSITORIES...",
  "> CHECKING_HUD_SUBSYSTEMS...",
  "> ANALYZING_OPERATIONAL_CAPACITIES...",
  "> ACCESS_GRANTED.",
  "> SYSTEM_READY."
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(finishTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center p-8 font-mono"
      style={{ backgroundColor: '#020617' }}
    >
      <div className="max-w-xl w-full">
        {lines.slice(0, currentLine + 1).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-2"
            style={{ 
              color: i === lines.length - 1 ? 'var(--primary)' : 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem',
              textShadow: i === lines.length - 1 ? '0 0 10px var(--primary)' : 'none'
            }}
          >
            {line}
            {i === currentLine && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                style={{ marginLeft: '0.1rem', borderLeft: '8px solid var(--primary)', display: 'inline-block', height: '1rem', verticalAlign: 'middle' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
