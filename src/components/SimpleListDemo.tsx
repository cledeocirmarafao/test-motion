import { motion } from "framer-motion";

// Variants compartilhadas — legíveis e reutilizáveis
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // staggerChildren aplica delay sequencial automático nos filhos
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    x: -100,          // propriedade atômica → WAAPI nativo
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function AnimatedList() {
  return (
    <motion.ul
      variants={listVariants}           // controla o container
      initial="hidden"
      animate="visible"
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      <motion.li
        variants={itemVariants}         // herda do pai + stagger automático
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 15,
            duration: 0.2, // override curto para hover
          },
        }}
        whileTap={{
          scale: 0.97,
          transition: { duration: 0.1 },
        }}
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "white",
          padding: "16px 24px",
          margin: "12px 0",
          borderRadius: "12px",
          fontSize: "1.1rem",
          fontWeight: 500,
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          cursor: "pointer",
          userSelect: "none", // evita seleção de texto atrapalhando tap
        }}
      >
        Exemplo de Item com animação spring
      </motion.li>

      <motion.li
        variants={itemVariants}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 15,
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.97,
          transition: { duration: 0.1 },
        }}
        style={{
          background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
          color: "white",
          padding: "16px 24px",
          margin: "12px 0",
          borderRadius: "12px",
          fontSize: "1.1rem",
          fontWeight: 500,
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        Outro item animado
      </motion.li>

      {/* Mais itens aqui herdam o stagger automaticamente */}
    </motion.ul>
  );
}