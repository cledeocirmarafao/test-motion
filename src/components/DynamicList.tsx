import { motion } from "framer-motion";

// Tipo utilitário para CSS variables customizadas (usado apenas no style)
type CSSWithVars = React.CSSProperties & Record<`--${string}`, string | number>;

export default function CSSVariablesDemo() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        padding: "40px",
        fontFamily: "sans-serif",
        color: "#fff",
        marginTop: '85px'
      }}
    >
      {/* ─── Exemplo 1: Rotação via CSS variable ─── */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "8px", color: "#a78bfa" }}>
          Exemplo 1 — Rotação via CSS Variable
        </h2>
        <p style={{ color: "#888", marginBottom: "24px", fontSize: "14px" }}>
          A <code style={{ color: "#f472b6" }}>--rotate</code> anima de 0deg →
          360deg e todos os filhos consomem via{" "}
          <code style={{ color: "#f472b6" }}>var(--rotate)</code>
        </p>

        <motion.ul
          // Variável inicial definida no style
          style={
            {
              "--rotate": "0deg",
              listStyle: "none",
              display: "flex",
              gap: "20px",
              padding: 0,
              margin: 0,
            } as CSSWithVars
          }
          // Animação apenas da variável CSS
          animate={{ "--rotate": "360deg" }}
          transition={{
            duration: 8, // mais lento para observar melhor
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {["🟣", "🔵", "🟢"].map((emoji, i) => (
            <li
              key={i}
              style={{
                fontSize: "40px",
                transform: "rotate(var(--rotate))",
                display: "inline-block",
              }}
            >
              {emoji}
            </li>
          ))}
        </motion.ul>
      </section>

      {/* ─── Exemplo 2: Cor de fundo via CSS variable ─── */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "8px", color: "#a78bfa" }}>
          Exemplo 2 — Cor via CSS Variable
        </h2>
        <p style={{ color: "#888", marginBottom: "24px", fontSize: "14px" }}>
          <code style={{ color: "#f472b6" }}>--bg-color</code> cicla entre
          cores; os cards consomem via{" "}
          <code style={{ color: "#f472b6" }}>background: var(--bg-color)</code>
        </p>

        <motion.div
          // Inicial no style
          style={
            {
              "--bg-color": "#7c3aed",
              display: "flex",
              gap: "16px",
            } as CSSWithVars
          }
          // Animação com keyframes
          animate={{
            "--bg-color": [
              "#7c3aed",
              "#2563eb",
              "#059669",
              "#d97706",
              "#7c3aed",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "12px",
                background: "var(--bg-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {n}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ─── Exemplo 3: Scale via CSS variable ─── */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "8px", color: "#a78bfa" }}>
          Exemplo 3 — Scale via CSS Variable
        </h2>
        <p style={{ color: "#888", marginBottom: "24px", fontSize: "14px" }}>
          <code style={{ color: "#f472b6" }}>--scale</code> pulsa de 1 → 1.4;
          os ícones crescem juntos sem cada um ter sua própria animação
        </p>

        <motion.div
          // Inicial no style
         style={
  {
    "--scale": 1,
    display: "flex",
    gap: "24px",
  } as CSSWithVars
}
animate={{ "--scale": [1, 1.4, 1] }}
transition={{
  duration: 1.2,
  repeat: Infinity,
  ease: "easeInOut",
  // staggerChildren: 0.1,  // se quiser aplicar nos filhos (opcional)
}}
        >
          {["❤️", "🔥", "⭐"].map((icon, i) => (
            <span
              key={i}
              style={{
                fontSize: "36px",
                display: "inline-block",
                transform: "scale(var(--scale))",
              }}
            >
              {icon}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ─── Nota sobre performance ─── */}
      <div
        style={{
          background: "#1e1b4b",
          border: "1px solid #4f46e5",
          borderRadius: "12px",
          padding: "16px 24px",
          maxWidth: "520px",
          fontSize: "13px",
          color: "#c7d2fe",
          lineHeight: "1.6",
        }}
      >
        <strong style={{ color: "#818cf8" }}>⚠️ Nota de performance:</strong>{" "}
        Animar CSS variables{" "}
        <strong style={{ color: "#f472b6" }}>sempre aciona repaint</strong>.
        Para animações críticas de performance, prefira{" "}
        <code style={{ color: "#34d399" }}>MotionValues</code> com{" "}
        <code style={{ color: "#34d399" }}>useMotionValue</code> +{" "}
        <code style={{ color: "#34d399" }}>useTransform</code>.
      </div>
    </div>
  );
}