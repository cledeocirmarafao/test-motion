import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Counter() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 1000, { duration: 5 })
        return () => controls.stop()
    }, [])

    return <motion.pre style={text}>{rounded}</motion.pre>
}

const text = {
    fontSize: 64,
    color: "#8df0cc",
}
