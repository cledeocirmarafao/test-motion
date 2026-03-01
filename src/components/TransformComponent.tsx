import React from 'react';
import { motion } from 'motion/react';

export const TransformComponent: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#121212',
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '16px' }}>motion.div (CSS Transform)</h3>
        <motion.div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#e74c3c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
          animate={{ rotate: 90 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          Centro
        </motion.div>
        <p style={{ marginTop: '8px', fontSize: '0.875rem' }}>Gira em torno do seu centro (comportamento CSS padrão).</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '16px' }}>motion.rect (SVG Default)</h3>
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ backgroundColor: '#0a0a0a', border: '1px solid #333' }}>
          <motion.rect
            x="50"
            y="50"
            width="100"
            height="100"
            fill="#3498db"
            animate={{ rotate: 90 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </svg>
        <p style={{ marginTop: '8px', fontSize: '0.875rem' }}>Gira em torno do canto superior esquerdo do viewBox (menos intuitivo).</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '16px' }}>motion.rect com transformBox</h3>
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ backgroundColor: '#0a0a0a', border: '1px solid #333' }}>
          <motion.rect
            x="50"
            y="50"
            width="100"
            height="100"
            fill="#2ecc71"
            style={{ transformBox: 'view-box' }}
            animate={{ rotate: 90 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </svg>
        <p style={{ marginTop: '8px', fontSize: '0.875rem' }}>Gira em torno do seu centro (com transformBox: "view-box").</p>
      </div>
    </div>
  );
};
