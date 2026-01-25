import { useEffect, useState } from "react"
import "./Cursor.scss"
import { motion } from "framer-motion"

const cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        };

        window.addEventListener("mousemove", moveCursor)

        return () => window.removeEventListener("mousemove", moveCursor)
    }, [])

    console.log(position)
    return (
        <motion.div className="cursor" animate={{ x: position.x+10, y: position.y+10 }}></motion.div>
        
    )
}
export default cursor