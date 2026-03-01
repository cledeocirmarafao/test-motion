import React from 'react';
import { motion } from 'motion/react';

export const ViewboxComponent: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#121212',
        minHeight: '100vh',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#fff', marginBottom: '16px' }}>
          Pan Right → (deslocamento para a direita)
        </h3>
        <motion.svg
          width="520"
          height="320"
          viewBox="0 0 200 200"
          animate={{ viewBox: "100 0 200 200" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            border: '2px solid #333',
            borderRadius: '12px',
            backgroundColor: '#0a0a0a',
          }}
        >
          <rect x="-60" y="-60" width="320" height="320" fill="#1a1a1a" />

          <circle cx="60" cy="60" r="28" fill="#e74c3c" />
          <circle cx="120" cy="120" r="38" fill="#3498db" />
          <circle cx="180" cy="70" r="24" fill="#2ecc71" />

          <text x="25" y="185" fontSize="24" fill="#ecf0f1" fontWeight="bold">
            PAN
          </text>
          <text x="125" y="185" fontSize="24" fill="#ecf0f1" fontWeight="bold">
            RIGHT
          </text>
        </motion.svg>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#fff', marginBottom: '16px' }}>
          Zoom Out 🔍 (zoom para fora)
        </h3>
        <motion.svg
          width="520"
          height="320"
          viewBox="0 0 200 200"
          animate={{ viewBox: "-100 -100 300 300" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            border: '2px solid #333',
            borderRadius: '12px',
            backgroundColor: '#0a0a0a',
          }}
        >
          <rect x="-60" y="-60" width="320" height="320" fill="#1a1a1a" />

          <circle cx="40" cy="60" r="28" fill="#e74c3c" />
          <circle cx="120" cy="120" r="38" fill="#3498db" />
          <circle cx="180" cy="70" r="24" fill="#2ecc71" />

          <text x="25" y="185" fontSize="24" fill="#ecf0f1" fontWeight="bold">
            ZOOM
          </text>
          <text x="125" y="185" fontSize="24" fill="#ecf0f1" fontWeight="bold">
            OUT
          </text>
        </motion.svg>
      </div>
    </div>
  );
};


export const SecondViewboxComponent: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '40px', 
      backgroundColor: '#0a0a0a', 
      color: '#fff',
      minHeight: '100vh'
    }}>
      <h1 style={{ marginBottom: '30px' }}>
        Animação de <code>viewBox</code> com Motion
      </h1>

      <motion.svg
        width={420}
        height={420}
        viewBox="0 0 200 200"
        animate={{
          viewBox: [
            "0 0 200 200",      // 1. Vista normal
            "80 10 200 200",     // 2. Pan para a direita
            "100 30 200 200",    // 3. Pan mais para a direita
            "-60 -60 320 320",   // 4. Zoom out (mostra área maior)
            "0 0 200 200"        // 5. Volta ao início
          ]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        style={{
          border: '4px solid #333',
          borderRadius: '12px',
          backgroundColor: '#111'
        }}
      >
        <rect x="0" y="0" width="400" height="400" fill="#1a1a1a" />

        <circle cx="30" cy="40" r="18" fill="#ff2d55" />
        <circle cx="170" cy="45" r="22" fill="#00ff9f" />
        <circle cx="40" cy="160" r="25" fill="#4d9fff" />
        <circle cx="155" cy="155" r="19" fill="#ffd60a" />

        <circle cx="-35" cy="70" r="15" fill="#ff00ff" />
        <circle cx="235" cy="80" r="18" fill="#00ffff" />
        <circle cx="70" cy="-25" r="16" fill="#ffaa00" />
        <circle cx="130" cy="245" r="20" fill="#aa00ff" />

        <rect 
          x="70" 
          y="70" 
          width="60" 
          height="60" 
          fill="#ffffff22" 
          stroke="#fff" 
          strokeWidth="4"
          rx="8"
        />

        <text 
          x="100" 
          y="105" 
          textAnchor="middle" 
          fill="#fff" 
          fontSize="22" 
          fontWeight="bold"
        >
          VIEWBOX
        </text>
        <text 
          x="100" 
          y="185" 
          textAnchor="middle" 
          fill="#888" 
          fontSize="13"
        >
          PAN + ZOOM
        </text>
      </motion.svg>

      <p style={{ marginTop: '30px', maxWidth: '500px', textAlign: 'center', opacity: 0.8 }}>
        Observe o movimento: primeiro o panorama (pan) para a direita, depois um zoom out.<br />
        A animação é automática e fica em loop infinito.
      </p>
    </div>
  );
};
