import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

 export const styles: Record<string, React.CSSProperties> = {

  heading: {
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#555",
    marginBottom: "12px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#fff",
    marginBottom: "8px",
    letterSpacing: "-0.02em",
  },
  sectionDesc: {
    fontSize: "13px",
    color: "#888",
    lineHeight: 1.6,
    marginBottom: "20px",
    maxWidth: "480px",
  },
  badge: {
    display: "inline-block",
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: "4px",
    padding: "3px 8px",
    fontSize: "12px",
    fontFamily: "'IBM Plex Mono', monospace",
    color: "#7dd3fc",
    marginBottom: "16px",
  },

  scrollContainer: {
    height: "220px",
    overflowY: "scroll",
    background: "#111",
    border: "1px solid #222",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: "6px",
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    userSelect: "none",
  },
  cardText: {
    fontSize: "13px",
    color: "#ccc",
  },
  cardDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#22d3ee",
  },

  fixedWrapper: {
    position: "relative",
    height: "240px",
    background: "#111",
    border: "1px solid #222",
    borderRadius: "8px",
    overflow: "hidden",
  },
  fixedPanel: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "12px",
    overflowY: "scroll",
  },
  fixedOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "160px",
    height: "100%",
    background: "linear-gradient(to right, transparent, #111 60%)",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "16px",
    zIndex: 10,
  },
  overlayLabel: {
    fontSize: "11px",
    color: "#444",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  addBtn: {
    padding: "9px 18px",
    background: "#1a1a1a",
    border: "1px solid #333",
    borderRadius: "6px",
    color: "#e8e8e8",
    fontSize: "13px",
    cursor: "pointer",
    fontFamily: "'IBM Plex Mono', monospace",
    letterSpacing: "0.04em",
    transition: "border-color 0.2s",
  },
  row: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "16px",
  },
};

export default function LayoutScrollDemo() {
  const [selected, setSelected] = useState<number | null>(null);
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
<>
<style>{`
                  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap');
                  * { box-sizing: border-box; margin: 0; padding: 0; }
                  ::-webkit-scrollbar { width: 4px; }
                  ::-webkit-scrollbar-track { background: #0e0e0e; }
                  ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
                `}</style>
      <section style={{ paddingTop: '250px'}}>
      <p style={styles.heading}>Exemplo 1</p>
      <h2 style={styles.sectionTitle}>layoutScroll</h2>
      <p style={styles.sectionDesc}>
        O <span style={styles.badge}>layoutScroll</span> informa ao Motion que
        este container é rolável. Assim as animações de layout consideram o
        scroll ao calcular posições.
      </p>

      <motion.div layoutScroll style={styles.scrollContainer}>
        {items.map((id) => (
          <motion.div
            key={id}
            layout
            onClick={() => setSelected(selected === id ? null : id)}
            style={{
                ...styles.card,
                border: selected === id ? "1px solid #22d3ee" : "1px solid #2a2a2a",
            }}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, delay: id * 0.04 }}
            >
            <span style={styles.cardText}>Item #{id}</span>
            <motion.div
              layout
              style={{
                  ...styles.cardDot,
                  background: selected === id ? "#22d3ee" : "#2a2a2a",
                }}
                transition={{ duration: 0.2 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
                </>
  );
}

export function LayoutRootDemo() {
  const [items, setItems] = useState([1, 2, 3]);
  const nextId = () => Math.max(...items) + 1;

  return (
    <section style={{ padding
    : '50px'}}>
      <p style={styles.heading}>Exemplo 2</p>
      <h2 style={styles.sectionTitle}>layoutRoot</h2>
      <p style={styles.sectionDesc}>
        O <span style={styles.badge}>layoutRoot</span> é usado em contêineres
        com <code style={{ color: "#fbbf24" }}>position: fixed</code>. Permite
        que o Motion leve em conta o scroll da página ao medir elementos filhos.
      </p>

      <div style={styles.row}>
        <button style={styles.addBtn} onClick={() => setItems((p) => [...p, nextId()])}>
          + Adicionar
        </button>
        <button
          style={{ ...styles.addBtn, color: "#ef4444" }}
          onClick={() => setItems((p) => (p.length > 1 ? p.slice(0, -1) : p))}
        >
          − Remover
        </button>
      </div>

      <div style={styles.fixedWrapper}>
        <motion.div layoutRoot style={styles.fixedPanel}>
          <AnimatePresence>
            {items.map((id) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88, x: 20 }}
                transition={{ duration: 0.25 }}
                style={styles.card}
              >
                <span style={styles.cardText}>Card #{id}</span>
                <div style={styles.cardDot} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div style={styles.fixedOverlay}>
          <span style={styles.overlayLabel}>layoutRoot</span>
        </div>
      </div>
    </section>
  );
}