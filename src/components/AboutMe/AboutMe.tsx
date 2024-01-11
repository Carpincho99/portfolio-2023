import { motion } from "framer-motion"
import profilePicGreyBg from "../../assets/profilePicGreyBg.png"

const AboutMe = () => {
  return (
    <section id="work" className="mt-5">
      <motion.h2 initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden"
      >
        About Me
      </motion.h2>
      <div className="w-full relative flex justify-center items-center mt-5 drop-shadow-2xl ">
        <div className="w-full md:w-[75%] flex md:flex-row flex-col items-center justify-center dark:bg-[#00141F] bg-[#EAE2B7] rounded-[1rem] text-black dark:text-white overflow-hidden">
          <img src={profilePicGreyBg} alt="" className="md:pr-4 w-full md:w-[350px]" />
          <div className="w-full flex flex-col px-4 font-[500]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </p>
            <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
