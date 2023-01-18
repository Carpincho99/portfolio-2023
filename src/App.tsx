import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model as Carpincho, Nav } from './components'
import Hero from './components/Hero/Hero'
import Social from './components/Social/Social'

function App() {
  return (
    <div className="flex items-center justify-around">
      <Social />
      <div className="w-full h-screen">
        <Hero />
      </div>
      <div className="w-full h-screen bg-blue-300">
        <Canvas>
          <ambientLight intensity={0.8} />
          <Carpincho />
          <OrbitControls />
        </Canvas>
      </div>
      <Nav />
    </div>
  )
}

export default App
