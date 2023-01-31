import styles from './Contact.module.css'
import carpincho from '../../assets/contactCarpincho.jpeg'
import { motion } from 'framer-motion'
import Carpincho2D from './Carpincho2D'

const Contact = () => {
  return (
    <section id="contact" className="mt-12">
      <motion.div initial={{x: "-50vw"}} whileInView={{x: 0}} transition={{duration: 0.5}}>
        <h2 className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden">
          Contact Me
        </h2>
      </motion.div>
      <div className="w-full mt-5 flex flex-col md:flex-row">
        <motion.div 
        initial={{x: "-45vw"}} whileInView={{x: 0}} transition={{duration: 0.5}}
        className="p-3 w-full md:w-1/2 bg-[#EAE2B7] dark:bg-[#00141F] drop-shadow-2xl rounded-[1rem] items-center"
        >
          <form className={`${styles.form} px-4 flex flex-col items-center dark:text-white`}>
            <div className="m-2 w-full relative text-start">
              <label htmlFor="" className="font-extrabold text-2xl overflow-hidden">Name</label>
            </div>
            <div className="m-2 mt-3 w-[95%] relative text-black">
              <input type="text" placeholder="Name" className="px-2 text-lg py-2 ring-1 ring-gray-300 w-full border-none  rounded-md" />
            </div>
            <div className="w-full m-2 mt-3 relative">
              <label htmlFor="" className="font-extrabold text-2xl overflow-hidden">Email</label>
            </div>
            <div className="m-2 mt-3 w-[95%] relative text-black">
              <input type="email" placeholder="Email" className="px-2 py-2 text-lg ring-1 ring-gray-300 w-full border-none rounded-md" />
            </div>
            <div className="w-full m-2 mt-3 relative">
              <label htmlFor="" className="font-extrabold text-2xl overflow-hidden">Message</label>
            </div>
            <div className="m-2 mt-3 w-[95%] relative text-black">
              <textarea placeholder="Message" className="px-2 py-2 ring-1 ring-gray-300 w-full border-none rounded-md" />
            </div>
            <motion.button
              className="m-2 mt-3 w-full py-2 rounded-lg bg-[#F77F00] font-extrabold border-none text-2xl"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
        <div className="md:pl-10 md:pt-10 w-full md:w-1/2">
          <div className="flex flex-col items-center justify-center mt-10 md:mt-0">
          <Carpincho2D />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
