
const Hero = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div>
        <h4 className="pl-[4px] font-extrabold text-1xl lg:text-2xl mt-2">Hi, I'm</h4>
        <h1 className="overflow-hidden mt-2 font-extrabold text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-[#FB8500] to-[#d62828]">Ezequiel</h1>
          <h2 className="mt-2 pl-[4px] font-extrabold text-2xl lg:text-4xl  overflow-hidden">FrontEnd developer</h2>
        <button className="mt-8 pl-[4px] rounded-full bg-[#FB8500]">Contact me</button>
      </div>
    </div>
  )
}

export default Hero
