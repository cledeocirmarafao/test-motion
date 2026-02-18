import { motion } from 'motion/react'

export default function ButtonDemo() {
  return (
    <motion.button
      initial={{ y: 10 }} 
      animate={{ y: 0 }}  
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}  
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        padding: '1rem 5rem', 
        background: 'radial-gradient(circle at 50% 40%, rgba(255, 0, 200, 0.8) 0%, transparent 80%)', 
        border: '1px solid gray', 
        cursor: 'pointer', 
        color: 'white', 
        fontSize: '1rem',
        borderRadius: '8px'
      }}
    >
      Clique Aqui // Conteúdo: adicione texto ou ícones aqui
    </motion.button>
  );
}