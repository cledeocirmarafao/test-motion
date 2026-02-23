import { motion } from "framer-motion"; 
import { useRef } from "react"; 

export default function ScrollContainerTest() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={scrollRef} 
      style={{
        overflowY: "auto", 
        height: "300px", 
        width: "400px", 
        backgroundColor: "#f0f0f0",
        padding: "16px", 
        border: "1px solid #ccc",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ root: scrollRef, amount: 0.5, once: true }} 
        transition={{ duration: 0.5, ease: "easeOut" }} 
        style={{
          height: "150px", 
          backgroundColor: "lightblue", 
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          borderRadius: "8px",
        }}
      >
        Item 1: Aparece ao scrollar
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, amount: 0.5, once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          height: "150px",
          backgroundColor: "lightgreen",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          borderRadius: "8px",
        }}
      >
        Item 2: Aparece depois
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, amount: 0.5, once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          height: "150px",
          backgroundColor: "lightcoral",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          borderRadius: "8px",
        }}
      >
        Item 3: Último item
      </motion.div>
    </div>
  );
}