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
        <div className="w-full md:w-[90%] mb-8 mt-5 md:mt-24 md:inline flex items-center justify-center flex-col">
          <div className={`${styles.img} mt-4 md:mr-12 md:float-left w-[300px] h-[300px] md:w-[350px] md:h-[350px] flex items-center justify-center rounded-full overflow-hidden`}>
            <div className="w-[280px] h-[280px] md:w-[330px] md:h-[330px] bg-[#EAE2B7] overflow-hidden rounded-full relative">
              <img src={profilePic} alt="" className="w-[330px] absolute top-[-65px] left-[10px] z-50" />
            </div>
          </div>
          <div className="mt-5 md:mt-0 text-xl md:inline dark:text-white">
            <p className="pb-2">Mi nombre es Ezequiel Giorgis, tengo 21 años y soy de Córdoba, Argentina. Me apasiona el deporte y aprender cosas nuevas.</p>
            <p className="pb-2"> Desde pequeño me ha llamado la atención el funcionamiento de las computadoras y aparatos electrónicos. Esta curiosidad me llevo a estar estudiando, a día de hoy, ingeniería electrónica en la Universidad  Tecnológica Nacional (UTN-FRC). </p>
            <p className="pb-2">Por otra parte, de manera autodidacta, me encanta aprender sobre programación en general. Me fascina la idea de crear experiencias virtuales para el usuario, ya sea en forma de páginas web o aplicaciones mobiles.</p>
            <p className="pb-2">Por último me consideró flexible ante las innovaciones de un mundo tan cambiante, por lo que siempre estoy en busca de integrar ambos intereses: programación y electrónica, en productos vanguardistas fuera y dentro de las pantallas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
