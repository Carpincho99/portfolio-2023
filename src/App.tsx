import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model as Carpincho, Nav } from './components'
import Social from './components/Social/Social'

function App() {
  return (
      <div className="flex items-center justify-center">
      <Nav />
      <Social />
        <div className="w-80 h-screen bg-gray-300">
          <Canvas>
            <ambientLight intensity={0.8} />
            <Carpincho />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
  )
}

export default App
