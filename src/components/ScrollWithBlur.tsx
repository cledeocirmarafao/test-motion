// TestComponent.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const TestComponentBlur: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const filter = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(10px)']);

  return (
    <motion.div 
      style={{ 
        filter,
        height: '300px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
        position: 'fixed', 
        top: 0,
        left: 0,
        zIndex: 10
      }}
    >
      PRAGUE
    </motion.div>
  );
};

export default TestComponentBlur;