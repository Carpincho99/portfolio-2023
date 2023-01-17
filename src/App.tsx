import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './components/Carpincho3D/Carpincho3D'

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
