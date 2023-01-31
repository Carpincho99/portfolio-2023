import { Carpincho3DWrapper, Contact, Hero, Nav, Skills, Social, Work } from './components'

function App() {
  return (
    <>
      <Nav />
      <Social />
      <div className="md:px-20 px-10 antialiased flex justify-bletween flex-col bg-gradient-to-br from-white to-[#E0F4FF] dark:from-[#00111A] dark:to-[#00283D]">
        <div className="mb-16 flex flex-col w-full h-screen md:flex-row justify-around">
          <div className="mt-14 md:mt-0 w-full h-1/3 md:w-1/2 md:h-screen flex items-center">
            <Hero />
          </div>
          <Carpincho3DWrapper />
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
