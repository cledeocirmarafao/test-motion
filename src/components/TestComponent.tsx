// TestComponent.tsx
import React, { useRef } from 'react';
import { useInView } from 'motion/react';

const TestComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 1, once: false }); 

  console.log('isInView:', isInView);

  return (
    <div 
      ref={ref} 
      style={{ 
        height: '200px', 
        width: '200px', 
        backgroundColor: isInView ? 'green' : 'red', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        transition: 'background-color 0.3s'
      }}
    >
      {isInView ? 'Hello!' : 'Bye..'}
    </div>
  );
};

export default TestComponent;