import { motion } from "framer-motion";

export default function CssVarRotationDemo() {
  return (
    <div
      style={{
        padding: "40px",
        background: "#0f0f1a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Animação de Variável CSS com Framer Motion
      </h2>

      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 40px", opacity: 0.8 }}>
        A variável <code>--rotate</code> é animada no container &lt;motion.ul&gt;.<br />
        Todos os itens filhos giram usando rotate(var(--rotate)).
      </p>

      <motion.ul
        style={{
          "--rotate": "0deg", 
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        } as React.CSSProperties} // type assertion para aceitar --rotate custom
        animate={{
          "--rotate": "360deg", // anima de 0deg → 360deg
        }}
        transition={{
          duration: 8,        
          repeat: Infinity,      
          ease: "linear",        
        }}
      >
        {/* Itens que herdam a rotação via var(--rotate) */}
        <motion.li
          style={{
            transform: "rotate(var(--rotate))",
            width: 120,
            height: 120,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "white",
            boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          }}
        >
          Item 1
        </motion.li>

        <motion.li
          style={{
            transform: "rotate(var(--rotate))",
            width: 120,
            height: 120,
            background: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "white",
            boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          }}
        >
          Item 2
        </motion.li>

        <motion.li
          style={{
            transform: "rotate(var(--rotate))",
            width: 120,
            height: 120,
            background: "linear-gradient(135deg, #00ddeb, #89f7fe)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "white",
            boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          }}
        >
          Item 3
        </motion.li>
      </motion.ul>

      <p style={{ textAlign: "center", marginTop: "60px", opacity: 0.7 }}>
        Dica de performance: Para animações mais complexas ou com muitos filhos,<br />
        considere usar <code>MotionValue</code> em vez de CSS vars (evita reflows/paints desnecessários).
      </p>
    </div>
  );
}