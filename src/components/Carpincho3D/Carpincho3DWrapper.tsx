import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model as Carpincho } from '../../components'
import useMediaQuery from '../../hooks/useMedia'
import { useEffect, useState } from 'react'

const Carpincho3DWrapper = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isDobleTouching, setIsDobleTouching] = useState(false)

  useEffect(() => {
    const dobleTouchHandle = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        setIsDobleTouching(true)
      } else {
        setIsDobleTouching(false)
      }
    }

    window.addEventListener('touchstart', dobleTouchHandle);

    return () => {
      window.removeEventListener('touchstart', dobleTouchHandle);
    }
  }, [])

  return (
    <>
      <div className="relative w-full  h-2/3 md:h-screen md:w-1/2 flex items-center justify-center">
        <Canvas className="md:cursor-all-scroll">
          <ambientLight intensity={0.3} />
          <directionalLight intensity={0.9} position={[0, 1, 1]} />
          <Center>
            <Carpincho rotation={[0, (5 / 4) * Math.PI, 0]} scale={isMobile ? 1.8 : 1.5} />
          </Center>
          <OrbitControls enableZoom={false} autoRotate={true} enablePan={false} enableRotate={isMobile ? isDobleTouching : true} />
        </Canvas>
        {
          isMobile && (
            isDobleTouching ||
            <div className="w-full h-full absolute top-0 left-0">
            </div>
          )
        }
      </div>
      {
        isMobile &&
        <p className="text-sm dark:text-gray-400">* Use two fingers over the 3D model to rotate it</p>
      }
    </>
  )
}

export default Carpincho3DWrapper
