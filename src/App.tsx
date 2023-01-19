import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model as Carpincho, Nav } from './components'
import Hero from './components/Hero/Hero'
import Social from './components/Social/Social'

function App() {
  return (
    <>
      <Nav />
      <Social />
      <div className="md:px-20 px-0 flex justify-bletween flex-col">
        <div className=" flex flex-col w-full h-screen md:flex-row justify-around">
          <div className="md:w-1/2 w-full md:h-screen flex items-center">
            <Hero />
          </div>
          <div className="w-full md:h-screen md:w-1/2 flex items-center justify-center">
            <Canvas>
              <ambientLight intensity={0.8} />
              <directionalLight intensity={0.4} position={[0, 0, 1]} />
              <Carpincho />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque eleifend eros ac fringilla. Quisque eget metus sed velit porta eleifend eget at justo. Nunc gravida viverra magna, in sagittis mi tincidunt non. Nunc vel urna nisl. Morbi tincidunt mauris ac congue dapibus. Proin est ante, lacinia vitae semper id, cursus vel velit. Sed euismod nibh eu ex egestas, quis sagittis lorem dapibus.
          Pellentesque fermentum, nibh at facilisis facilisis, est libero varius quam, eget imperdiet lacus dolor quis dui. Donec velit ante, pellentesque eu turpis ac, porta vulputate odio. Etiam leo massa, bibendum eu eros quis, dapibus auctor purus. Sed pulvinar aliquet eleifend. Cras ac sapien vel dolor sollicitudin pulvinar. Vestibulum libero purus, iaculis et ultrices sit amet, cursus eu lorem. Nulla nec tristique felis, at vehicula mi.
          Suspendisse ullamcorper venenatis tellus, quis congue velit gravida sit amet. Nulla at viverra dolor, vitae viverra velit. Sed dolor ligula, placerat euismod nisi non, porta placerat est. Proin id maximus erat, vel posuere massa. Phasellus et malesuada massa. Nunc posuere ligula non aliquet suscipit. Curabitur cursus non elit quis convallis. Sed in congue mauris. Sed finibus tristique imperdiet. Nullam eget risus ultricies libero iaculis ultrices. Morbi fringilla malesuada pulvinar. Sed bibendum nulla dui, vel lacinia urna bibendum at. Phasellus leo erat, tincidunt id tempor eget, euismod ac odio.
          Pellentesque et erat non ligula dictum consectetur. Pellentesque in erat sit amet sapien gravida bibendum vel quis purus. Suspendisse in fringilla justo, posuere hendrerit ligula. Quisque id dolor at urna fermentum elementum. Pellentesque tempor enim id magna condimentum, vitae finibus sem venenatis. Fusce mollis malesuada cursus. Sed orci nunc, pharetra sit amet est non, ornare facilisis tortor. Integer facilisis, lorem ac efficitur luctus, diam nisi vehicula dui, commodo fermentum ipsum tortor fringilla neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi venenatis consequat commodo.
          Proin tincidunt a velit quis accumsan. Vivamus eget congue tellus. Nullam in nulla vel augue ornare hendrerit. Curabitur nec odio neque. Sed mattis dui justo, a molestie mauris pretium a. Nulla bibendum et arcu id mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ornare purus vulputate mauris congue blandit. Donec nec erat non nulla hendrerit auctor. Sed faucibus libero non velit congue, a sollicitudin arcu ultricies. Integer eros purus, porttitor nec sem at, lacinia condimentum massa. Proin blandit orci eget metus rutrum euismod. Donec sed lorem tristique, luctus lectus quis, ultricies enim. Nam lobortis neque odio, nec
          p
        </div>
      </div>
      </>
  )
}

export default App
