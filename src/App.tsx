import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model as Carpincho, Nav } from './components'
import Hero from './components/Hero/Hero'
import Social from './components/Social/Social'

function App() {
  return (
    <div className="flex justify-between ">
        <Social />
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-full md:mt-44">
          <Hero />
        </div>
        <div className="w-full flex items-center justify-center" >
          <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight intensity={0.4} position={[0, 0, 1]} />
            <Carpincho  />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default App
