import * as motion from "motion/react-client"

export default function Rotate() {
    return (
        <motion.div
            style={box}
            animate={{ rotateZ: 360  }}
            transition={{ duration: 20 }}
            
        />
    )
}
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
    outline: '2px dashed cyan'
}
