import { motion } from "framer-motion";

export default function OriginAnimationExample() {
  return (
    <motion.section
      style={{
        width: 200,
        height: 200,
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        borderRadius: 24,
        originX: 0.5,  
        originY: 0.5,
      }}
      animate={{
        rotate: 360,
        originX: [0, 1, 0, 1, 0],   
        originY: [0, 0, 1, 1, 0],   
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <p style={{ color: "white", paddingTop: 90, textAlign: 'center'}}>
        Girando + mudando origem
      </p>
    </motion.section>
  );
}