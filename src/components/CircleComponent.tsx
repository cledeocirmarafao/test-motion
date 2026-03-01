import React from 'react';
import { motion } from 'motion/react';

export const CircleComponent: React.FC = () => {
  return (
    <motion.svg width="220" height="500" viewBox="0 0 200 200">
      <defs>
        <filter id="woof">
          <motion.feTurbulence
            type="fractalNoise"
            baseFrequency="0"
            numOctaves="10"
            result="noise"
            animate={{ baseFrequency: 0.02 }} 
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
        </filter>
      </defs>
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        fill="#00f"
        filter="url(#woof)"
        animate={{ fill: '#f00', cx: 120 }} // Anima cor e posição como no exemplo
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </motion.svg>
  );
};

 