import React from 'react';
import { motion } from 'motion/react';

const listVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: 'afterChildren', // Espera os filhos terminarem antes de animar o pai
      delayChildren: 0.5,
      staggerChildren: 0.2 // Adiciona stagger para os filhos
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } // Duração longa para ver o efeito de espera
  }
};

export const ChildrensComponent: React.FC = () => {
  return (
    <div 
      style={{ 
        height: '100vh', 
        width: '500px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#121212', 
        color: '#fff' 
      }}
    >
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          fontSize: '1.5rem',
          textAlign: 'center'
        }}
      >
        <motion.li variants={itemVariants}>Item 1</motion.li>
        <motion.li variants={itemVariants}>Item 2</motion.li>
        <motion.li variants={itemVariants}>Item 3</motion.li>
      </motion.ul>
    </div>
  );
};
