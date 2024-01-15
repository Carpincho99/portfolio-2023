import { motion } from "framer-motion"
import profilePic from "../../assets/profilePicNoBg.png"
import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <section id="work" className="mt-5">
      <motion.h2 initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden"
      >
        About Me
      </motion.h2>
      <div className="w-full flex items-center justify-center">
        <div className="w-[900px] mb-8 mt-24 ">
          <div className={`${styles.img} mr-12 md:float-left w-[320px] h-[320px] flex items-center justify-center rounded-full overflow-hidden`}>
            <div className="w-[305px] h-[305px] bg-[#EAE2B7] overflow-hidden rounded-full relative">
              <img src={profilePic} alt="" className="w-[320px] absolute top-[-65px] left-[10px] z-50" />
            </div>
          </div>
          <div className="text-xl">
            <p className="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
