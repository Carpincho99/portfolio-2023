import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { Model as Carpincho, Nav } from './components'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Social from './components/Social/Social'
import Work from './components/Work/Work'
import useMediaQuery from './hooks/useMedia'

function App() {
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
      <Nav />
      <Social />
      <div className="md:px-20 px-8 antialiased flex justify-bletween flex-col bg-gradient-to-br from-white to-[#E0F4FF] dark:from-[#00111A] dark:to-[#00283D]">
        <div className="mb-16 flex flex-col w-full h-screen md:flex-row justify-around">
          <div className="mt-14 md:mt-0 w-full h-1/3 md:w-1/2 md:h-screen flex items-center">
            <Hero />
          </div>
          <div className="relative w-full  h-2/3 md:h-screen md:w-1/2 flex items-center justify-center">
            <Canvas className="md:cursor-all-scroll">
              <ambientLight intensity={0.8} />
              <directionalLight intensity={0.4} position={[0, 0, 1]} />
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
            <p className="text-sm dark:text-gray-400">* Use tow fingers over the 3D model to rotate it</p>
          }
        </div>
        <div>
          <Skills />
          <Work />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
