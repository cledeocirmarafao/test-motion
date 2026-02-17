import * as motion from "motion/react-client";
import { useState } from "react";

export default function AnimatableValuesDemo() {
  const [reveal, setReveal] = useState(false);

  return (
    <div className="cyber-container">
      <h1 className="cyber-title">Valores Animáveis – Motion Magic</h1>

      <p className="cyber-subtitle">
        Motion anima propriedades CSS avançadas como <code>filter</code>,{" "}
        <code>mask-image</code> e até gradientes complexos.
      </p>

      <button className="cyber-button" onClick={() => setReveal(!reveal)}>
        {reveal ? "RESETAR EFEITOS" : "ATIVAR ANIMAÇÃO"}
      </button>

      <div className="demo-grid">
        <div className="card blur-card">
          <h2>Blur → Nitidez</h2>
          <motion.section
            className="blur-target"
            initial={{ filter: "blur(12px)" }}
            animate={{ filter: reveal ? "blur(0px)" : "blur(12px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="content">
              <p>Este texto começa borrado e revela com nitidez total.</p>
              <p>Perfeito para efeitos de "foco" ou loading cyber.</p>
            </div>
          </motion.section>
        </div>

        <div className="card mask-card">
          <h2>Mask-image com gradiente</h2>
          <motion.nav
            className="mask-target"
            initial={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 100%)",
            }}
            animate={{
              maskImage: reveal
                ? "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)"
                : "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 100%)",
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            <div className="content neon-text">
              <h3>NEON REVEAL</h3>
              <p>
                Gradiente animado revelando o conteúdo da esquerda para direita.
              </p>
              <p>Útil para headers, banners ou efeitos sci-fi.</p>
            </div>
          </motion.nav>
        </div>
      </div>

      <StyleSheet />
    </div>
  );
}

function StyleSheet() {
  return (
    <style>{`
      .cyber-container {
        min-height: 100vh;
        background: #0a0015;
        color: #e0d0ff;
        padding: 60px 20px;
        font-family: 'Courier New', Courier, monospace;
        background-image: 
          radial-gradient(circle at 10% 20%, rgba(255,0,200,0.08) 0%, transparent 20%),
          radial-gradient(circle at 90% 80%, rgba(0,200,255,0.08) 0%, transparent 25%);
      }

      .cyber-title {
        font-size: 3.2rem;
        text-align: center;
        margin-bottom: 16px;
        color: #ff00c8;
        text-shadow: 0 0 20px #ff00c8, 0 0 40px #ff00c8;
        letter-spacing: 4px;
      }

      .cyber-subtitle {
        text-align: center;
        font-size: 1.3rem;
        max-width: 800px;
        margin: 0 auto 40px;
        color: #a0a0ff;
      }

      .cyber-button {
        display: block;
        margin: 0 auto 50px;
        padding: 16px 40px;
        font-size: 1.4rem;
        background: transparent;
        border: 2px solid #ff00c8;
        color: #ff00c8;
        border-radius: 0;
        cursor: pointer;
        transition: all 0.4s;
        text-transform: uppercase;
        letter-spacing: 3px;
        box-shadow: 0 0 15px rgba(255,0,200,0.5);
      }

      .cyber-button:hover {
        background: #ff00c8;
        color: #0a0015;
        box-shadow: 0 0 30px #ff00c8, 0 0 60px #ff00c8;
        transform: translateY(-3px);
      }

      .demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
        gap: 40px;
        max-width: 1400px;
        margin: 0 auto;
      }

      .card {
        background: rgba(20, 10, 40, 0.7);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,0,200,0.25);
        border-radius: 12px;
        padding: 28px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      }

      .card h2 {
        color: #00d4ff;
        margin-top: 0;
        font-size: 1.8rem;
        text-shadow: 0 0 10px #00d4ff;
        border-bottom: 1px dashed rgba(0,212,255,0.3);
        padding-bottom: 12px;
      }

      .content {
        min-height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .blur-target {
        background: linear-gradient(135deg, #ff00c8, #00d4ff);
        padding: 40px;
        border-radius: 12px;
        color: white;
        text-shadow: 0 1px 3px black;
        font-size: 1.2rem;
      }

      .mask-target {
        background: linear-gradient(135deg, #ff00c8 0%, #00d4ff 100%);
        padding: 40px;
        border-radius: 12px;
        overflow: hidden;
        color: white;
        text-shadow: 0 1px 4px black;
      }

      .neon-text h3 {
        margin: 0 0 16px;
        font-size: 2.4rem;
        color: #fff;
        text-shadow: 
          0 0 10px #ff00c8,
          0 0 20px #ff00c8,
          0 0 40px #00d4ff;
      }

      code {
        background: rgba(255,0,200,0.15);
        padding: 3px 8px;
        border-radius: 4px;
        color: #ff79c6;
      }
    `}</style>
  );
}
