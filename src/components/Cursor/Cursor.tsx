import { useEffect, useState } from "react"

const Cursor = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMovHandle = (e: MouseEvent) => {
    setMousePos({x: e.clientX, y: e.clientY})
    }
    window.addEventListener('mousemove', mouseMovHandle);
    return () => {
      window.removeEventListener('mousemove', mouseMovHandle);
    }
  }, [])

  return (
    <div className="cursor"></div>
  )
}

export default Cursor
