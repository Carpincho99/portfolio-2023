import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { BiMailSend } from 'react-icons/bi'
import { MdDownload } from "react-icons/md";
import styles from './Hero.module.css'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full justify-center items-center">
      <div>
        <h4 className="pl-[4px] font-extrabold text-1xl lg:text-2xl mt-2 dark:text-white">{t('Hero.hi')}</h4>
        <h1 className={`${styles.animatedGrad} overflow-hidden mt-2 font-extrabold text-transparent text-6xl lg:text-8xl bg-clip-text`}>Ezequiel</h1>
        <h2 className="mt-3 pl-[4px] pb-[2px] font-extrabold text-2xl lg:text-4xl overflow-hidden dark:text-white">{t('Hero.student')}</h2>
        <h2 className="mt-1 pl-[4px] pb-[2px] font-extrabold text-2xl lg:text-4xl overflow-hidden dark:text-white">{t('Hero.devJr')}</h2>
        <div className="w-full flex flex-row items-center justify-start">
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${styles.animatedGrad} mt-8 ml-[2px] px-3 py-1 dark:text-white rounded-full flex flex-row items-center drop-shadow-md hover:drop-shadow-xl`}
            >
              <BiMailSend className="px-2" size={40} />
              <span className="pr-2 font-bold">
                {t('Hero.contactMe')}
              </span>
            </motion.button>
          </a>
          <a href="">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${styles.animatedGrad} mt-8 ml-[10px] px-3 py-1 dark:text-white rounded-full flex flex-row items-center drop-shadow-md hover:drop-shadow-xl`}
            >
              <MdDownload className="px-2" size={40}/>
              <span className="pr-2 font-bold">
                PDF CV
              </span>
            </motion.button>
          </a>
        </div>
      </div>
    </div >
  )
}

export default Hero
