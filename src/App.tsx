import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model as Carpincho, Nav } from './components'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Social from './components/Social/Social'
import Work from './components/Work/Work'
import ThemeContexWrapper from './context/ThemeContextWrapper'

function App() {
  return (
    <>
      <ThemeContexWrapper>
        <Nav />
        <Social />
        <div className="md:px-20 px-8 antialiased flex justify-bletween flex-col bg-gradient-to-br from-white to-[#E0F4FF] dark:from-[#00111A] dark:to-[#00283D]">
          <div className=" flex flex-col w-full h-screen md:flex-row justify-around">
            <div className="w-full h-1/2 md:w-1/2 md:h-screen flex items-center">
              <Hero />
            </div>
            <div className="w-full h-1/2 md:h-screen md:w-1/2 flex items-center justify-center">
              <Canvas >
                <ambientLight intensity={0.8} />
                <directionalLight intensity={0.4} position={[0, 0, 1]} />
                <Center>
                  <Carpincho rotation={[0, (5 / 4) * Math.PI, 0]} scale={1.5} />
                </Center>
                <OrbitControls enableZoom={false} autoRotate={true} enablePan={false} />
              </Canvas>
            </div>
          </div>
          <div>
            <Skills />
            <Work />
            <Contact />
          </div>
        </div>
      </ThemeContexWrapper>
    </>
  )
}

export default App
