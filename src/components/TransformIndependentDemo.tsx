import * as motion from "motion/react-client" 
import { useState } from "react"

export default function TransformIndependentDemo() {
  // Estados para controlar as transformações independentes
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [skewX, setSkewX] = useState(0)
  const [skewY, setSkewY] = useState(0)

  return (
    <div id="transform-demo">
      <h1>Transformações Independentes no Motion</h1>
      <p>
        Diferente do CSS puro, Motion anima cada eixo de <code>transform</code> separadamente, com ótima performance (GPU-accelerated).
      </p>

      {/* Elemento animado com todas as transforms independentes */}
      <motion.div
        className="target-box"
        animate={{
          x,
          y,
          scale,
          rotate,
          skewX: `${skewX}deg`,
          skewY: `${skewY}deg`,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        Teste as transforms!
      </motion.div>

      {/* Controles */}
      <div className="controls">
        <label>
          x: <input type="range" min="-200" max="200" value={x} onChange={e => setX(Number(e.target.value))} />
          <input type="number" value={x} onChange={e => setX(Number(e.target.value) || 0)} />
        </label>

        <label>
          y: <input type="range" min="-200" max="200" value={y} onChange={e => setY(Number(e.target.value))} />
          <input type="number" value={y} onChange={e => setY(Number(e.target.value) || 0)} />
        </label>

        <label>
          scale: <input type="range" min="0.5" max="2" step="0.1" value={scale} onChange={e => setScale(Number(e.target.value))} />
          <input type="number" value={scale} step="0.1" onChange={e => setScale(Number(e.target.value) || 1)} />
        </label>

        <label>
          rotate (°): <input type="range" min="-180" max="180" value={rotate} onChange={e => setRotate(Number(e.target.value))} />
          <input type="number" value={rotate} onChange={e => setRotate(Number(e.target.value) || 0)} />
        </label>

        <label>
          skewX (°): <input type="range" min="-60" max="60" value={skewX} onChange={e => setSkewX(Number(e.target.value))} />
          <input type="number" value={skewX} onChange={e => setSkewX(Number(e.target.value) || 0)} />
        </label>

        <label>
          skewY (°): <input type="range" min="-60" max="60" value={skewY} onChange={e => setSkewY(Number(e.target.value))} />
          <input type="number" value={skewY} onChange={e => setSkewY(Number(e.target.value) || 0)} />
        </label>
      </div>

      {/* Dicas de performance */}
      <div className="tips">
        <p>💡 Motion anima transforms independentes de forma otimizada (hardware acceleration).</p>
        <p>Comparado a <code>transform: "translateX(100px) scale(1.5)"</code>, animar {`{ x: 100, scale: 1.5 }`} é mais flexível e performático.</p>
      </div>

      <StyleSheet />
    </div>
  )
}

function StyleSheet() {
  return (
    <style>{`
      #transform-demo {
        margin-top: 150px;
        min-height: 100vh;
        background: #0a0e17;
        color: #e0e0ff;
        padding: 40px;
        font-family: system-ui, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      h1 {
        color: #ff79c6;
        text-shadow: 0 0 10px #ff0088;
      }

      .target-box {
        width: 220px;
        height: 220px;
        background: linear-gradient(135deg, #ff0088, #7928ca);
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: white;
        font-size: 1.4rem;
        box-shadow: 0 20px 40px rgba(121, 40, 202, 0.4);
        // perspective: 1000px;
        transform-style: preserve-3d;
      }

      .controls {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        max-width: 900px;
        width: 100%;
      }

      .controls label {
        display: flex;
        align-items: center;
        gap: 12px;
        background: rgba(30, 30, 50, 0.6);
        padding: 12px 16px;
        border-radius: 12px;
        border: 1px solid rgba(255, 0, 136, 0.3);
      }

      .controls input[type="range"] {
        accent-color: #ff0088;
        flex: 1;
      }

      .controls input[type="number"] {
        width: 80px;
        padding: 6px;
        background: #1e2535;
        border: 1px solid #3a4559;
        border-radius: 6px;
        color: #ff79c6;
      }

      .tips {
        text-align: center;
        color: #94a3b8;
        max-width: 800px;
        font-size: 0.95rem;
      }

      code {
        background: rgba(255, 0, 136, 0.15);
        padding: 2px 6px;
        border-radius: 4px;
      }
    `}</style>
  )
}