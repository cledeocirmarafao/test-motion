import * as motion from "motion/react-client"
import { useState } from "react"

export default function StateAnimations() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotate, setRotate] = useState(0)

  return (
    <div id="example">
      <div className="preview">
        <motion.div
          className="box"
          animate={{ x, y, rotate }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </div>

      <div className="controls">
        <Input value={x} set={setX} label="x" />
        <Input value={y} set={setY} label="y" />
        <Input value={rotate} set={setRotate} min={-180} max={180} label="rotate" />
      </div>

      <StyleSheet />
    </div>
  )
}

interface InputProps {
  label: string
  value: number
  set: (newValue: number) => void
  min?: number
  max?: number
}

function Input({ label, value, set, min = -200, max = 200 }: InputProps) {
  return (
    <label className="input-group">
      <code>{label}</code>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  )
}

function StyleSheet() {
  return (
    <style>{`
      #example {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: #0a0e17;
        color: #e0e0ff;
        font-family: system-ui, sans-serif;
        gap: 60px;
        padding: 40px;
        box-sizing: border-box;
      }

      .preview .box {
        width: 180px;
        height: 180px;
        background: linear-gradient(135deg, #ff0088, #7928ca);
        border-radius: 24px;
        border: 4px solid rgba(255, 0, 136, 0.4);
        box-shadow: 0 20px 40px rgba(121, 40, 202, 0.3);
        pointer-events: none;
      }

      .controls {
        display: flex;
        flex-direction: column;
        gap: 20px;
        min-width: 280px;
      }

      .input-group {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .input-group code {
        width: 60px;
        font-size: 1.1rem;
        color: #ff79c6;
        font-family: "Azeret Mono", monospace;
      }

      input[type="range"] {
        accent-color: #ff0088;
        width: 180px;
      }

      input[type="range"]::-webkit-slider-runnable-track {
        height: 8px;
        background: #1e2535;
        border-radius: 4px;
      }

      input[type="range"]::-webkit-slider-thumb {
        height: 24px;
        width: 24px;
        background: #ff0088;
        border-radius: 50%;
        border: 3px solid #0a0e17;
        cursor: grab;
      }

      input[type="number"] {
        width: 80px;
        padding: 6px 10px;
        background: #1e2535;
        border: 1px solid #3a4559;
        border-radius: 6px;
        color: #ff79c6;
        font-family: monospace;
        text-align: center;
      }

      input[type="number"]:focus {
        outline: none;
        border-color: #ff0088;
        box-shadow: 0 0 0 3px rgba(255, 0, 136, 0.2);
      }

      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    `}</style>
  )
}