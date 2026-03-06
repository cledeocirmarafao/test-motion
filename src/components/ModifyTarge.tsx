// TestComponent.tsx
import React from 'react';
import { motion } from 'motion/react';

export const ModifyTargetComponent: React.FC = () => {
  return (
    <div 
      style={{ 
        height: '100vh', 
        width: '500px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#f0f0f0', 
        position: 'relative' 
      }}
    >
      <motion.div
        drag
        dragTransition={{
          power: 0,
          modifyTarget: (target) => Math.round(target / 50) * 100,
        }}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#3498db',
          borderRadius: '8px',
          cursor: 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
        whileTap={{ cursor: 'grabbing' }}
      >
        Drag Me
      </motion.div>
    </div>
  );
};