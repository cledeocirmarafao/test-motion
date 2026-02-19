import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SimpleList() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1, // delay automático entre cada filho
          },
        },
      }}
      style={{ listStyle: "none", padding: 0 }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index} // ou use um ID único se possível
          variants={itemVariants}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "16px",
            margin: "8px 0",
            background: "#222",
            borderRadius: "8px",
            color: "white",
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}