import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import profilePic from "../../assets/profilePicNoBg.png"
import styles from './AboutMe.module.css'

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="aboutMe" className="mt-5">
      <motion.h2 initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden"
      >
        {t('AboutMe.sectionTitle')}
      </motion.h2>
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-[90%] mb-8 mt-5 md:mt-24 md:inline flex items-center justify-center flex-col">
          <div className={`${styles.img} mt-4 md:mr-12 md:float-left w-[300px] h-[300px] md:w-[350px] md:h-[350px] flex items-center justify-center rounded-full overflow-hidden`}>
            <div className="w-[280px] h-[280px] md:w-[330px] md:h-[330px] bg-[#EAE2B7] overflow-hidden rounded-full relative">
              <img src={profilePic} alt="" className="w-[330px] absolute top-[-65px] left-[10px] z-50" />
            </div>
          </div>
          <div className="mt-5 md:mt-0 text-xl md:inline dark:text-white">
            <p className="pb-2">{t('AboutMe.p1')}</p>
            <p className="pb-2">{t('AboutMe.p2')}</p>
            <p className="pb-2">{t('AboutMe.p3')}</p>
            <p className="pb-2">{t('AboutMe.p4')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
