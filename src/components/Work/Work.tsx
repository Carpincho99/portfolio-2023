import portfolioDark from '../../assets/projectPortfolio.png'
import portfolioLight from '../../assets/projectPortfolioLight.png'
import styles from './Work.module.css'
import { FaGithubSquare, FaLink, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))

  useEffect(() => {
    let observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false
    })

    return () => {
    }
  }, [])

  return (
    <section id="work" className="mt-5">
      <motion.h2 initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden"
      >
        Work
      </motion.h2>
      <div className="w-full relative flex flex-col justify-center items-center mt-5">
        <div className="">
          <motion.div 
          initial={{x: "99vw"}} whileInView={{x: 0}} transition={{duration: 0.5}} viewport={{once: true}}
          className={`${styles.imgBorder} rounded-2xl p-1 drop-shadow-2xl`}
          >
            {
              isDark
                ?
                <img src={portfolioLight} alt="" width={700} className="rounded-t-xl md:rounded-xl" />
                :
                <img src={portfolioDark} alt="" width={700} className="rounded-t-xl md:rounded-xl" />
            }
            <div className="md:hidden w-full flex flex-col dark:bg-[#00141F] bg-[#EAE2B7] rounded-b-2xl p-3 dark:text-white">
              <div className="flex items-center justify-start">
                <FaLink className="mr-2" />
                <h6 className="text-lg font-bold">this.portfolio</h6>
              </div>
              <p className="text-md">This website was created with React and tailwind. ThreeJs was used for the 3D render and animations.</p>
              <div className="mt-2 flex flex-row items-center justify-between">
                <div className="flex flex-row">
                  <FaReact className="mx-1" />
                  <SiTailwindcss className="mx-1" />
                </div>
                <FaGithubSquare size={30} />
              </div>  
            </div>
          </motion.div>
          <motion.div
            initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5}} viewport={{once: true}}
            className={`${styles.overlay} hidden md:flex flex-col absolute w-80 text-end dark:bg-[#00141F] bg-[#EAE2B7] rounded-2xl p-3 drop-shadow-2xl bg-opacity-90 dark:bg-opacity-90 dark:text-white`}
          >
            <div className="flex items-center justify-end">
              <FaLink className="mr-2" />
              <h6 className="text-lg font-bold">this.portfolio</h6>
            </div>
            <p className="text-md">
              This website was created with React and tailwind. ThreeJs was used for the 3D render and animations.
            </p>
            <div className="mt-2 flex flex-row items-center justify-between">
              <div className="flex flex-row">
                <FaReact className="mx-1" />
                <SiTailwindcss className="mx-1" />
              </div>
              <FaGithubSquare size={30} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
