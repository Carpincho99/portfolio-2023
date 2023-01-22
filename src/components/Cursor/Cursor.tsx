import { motion, Variants } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { getCursorEffect } from '../../app/store';
import styles from './Cursor.module.css'

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const CursorEffect = useSelector(getCursorEffect);

  useEffect(() => {
    const mouseMovHandle = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', mouseMovHandle);

    return () => {
      window.removeEventListener('mousemove', mouseMovHandle);
    }
  }, [])

  useEffect(() => {
    console.log(CursorEffect);
  }, [CursorEffect])


  const variant: Variants = {
    default: {
      x: mousePos.x - 15,
      y: mousePos.y - 15,
    },
    text: {
      x: mousePos.x - 150 / 2,
      y: mousePos.y - 150 / 2,
      height: 150,
      width: 150,
      mixBlendMode: "difference",
    },
  }

  return (
    <motion.div className={`${styles.cursor} isolate bg-[#ffcfb6] dark:bg-white`} variants={variant} animate={CursorEffect.value} />
  )
}

export default Cursor
