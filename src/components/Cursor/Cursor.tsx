import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Cursor.module.css'

const Cursor = (props: any) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMovHandle = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

    }
    window.addEventListener('mousemove', mouseMovHandle);

    return () => {
      window.removeEventListener('mousemove', mouseMovHandle);
    }
  }, [])


  const variant = {
    default: {
      x: mousePos.x - 15,
      y: mousePos.y - 15,
      backgroundColor: "#000000",
    },
    text: {
      x: mousePos.x - 150/2,
      y: mousePos.y - 150/2,
      height: 150,
      width: 150,
      backgroundColor: "#FFFFFF",
      mixBlendMode: "difference"
    },
  }

  return (
    <motion.div className={`${styles.cursor} bg-black`} variants={variant} animate={"default"} />
  )
}

export default Cursor
