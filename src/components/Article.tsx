import * as motion from "motion/react-client"
import { useState } from "react"

export default function FadeInExample() {
  const [showArticle, setShowArticle] = useState(false)

  return (
    <div id="example-container">
      <h1>Teste de initial + animate (Fade In)</h1>

      <button onClick={() => setShowArticle(!showArticle)}>
        {showArticle ? "Esconder artigo" : "Mostrar artigo com fade in"}
      </button>

      {showArticle && (
        <motion.article
          initial={{ opacity: 0, y: 100, x: 40 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          className="article-card"
        >
          <h2>Bem-vindo ao exemplo!</h2>
          <p>
            Este elemento começa invisível e deslocado 60px para baixo 
            (<code>initial</code>), e depois anima suavemente até ficar 
            visível e na posição normal (<code>animate</code>).
          </p>
          <p>
            Clique no botão várias vezes para ver o efeito de entrada 
            e saída (quando remover do DOM, a animação de saída não está 
            configurada aqui, mas pode ser adicionada com <code>exit</code>).
          </p>
        </motion.article>
      )}

      <StyleSheet />
    </div>
  )
}

function StyleSheet() {
  return (
    <style>{`
      #example-container {
        min-height: 100vh;
        background: #0f0f1a;
        color: #e0e0ff;
        font-family: system-ui, -apple-system, sans-serif;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
      }

      h1 {
        font-size: 2.5rem;
        margin: 0;
        color: #a78bfa;
        text-align: center;
      }

      button {
        padding: 12px 28px;
        font-size: 1.1rem;
        background: linear-gradient(135deg, #7c3aed, #c084fc);
        color: white;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s;
      }

      button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
      }

      .article-card {
        max-width: 600px;
        background: rgba(30, 30, 50, 0.7);
        backdrop-filter: blur(10px);
        padding: 32px;
        border-radius: 20px;
        border: 1px solid rgba(167, 139, 250, 0.3);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
      }

      .article-card h2 {
        margin-top: 0;
        color: #c084fc;
        font-size: 1.8rem;
      }

      .article-card p {
        line-height: 1.7;
        margin: 16px 0;
        color: #d1d5db;
      }

      .article-card small {
        display: block;
        margin-top: 24px;
        color: #94a3b8;
        font-style: italic;
      }

      code {
        background: rgba(167, 139, 250, 0.15);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: "Azeret Mono", monospace;
      }
    `}</style>
  )
}