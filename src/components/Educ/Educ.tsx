import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import styles from './Educ.module.css'

const Educ = () => {
  const { t } = useTranslation();

  const educTimelineElements = [
    {
      id: 1,
      title: t('Education.electronicStudent.title'),
      location: t('Education.electronicStudent.place'),
      description: t('Education.electronicStudent.summary'),
      buttonText: "Descargar análitico",
      date: `2021 - ${t('Education.electronicStudent.today')}`,
    },
    {
      id: 2,
      title: t('Education.primarySecondary.title'),
      location: t('Education.primarySecondary.place'),
      description: t('Education.primarySecondary.summary'),
      buttonText: "Descargar análitico",
      date: "2008 - 2020",
    },
    {
      id: 3,
      title: t('Education.argProgram.title'),
      location: t('Education.argProgram.place'),
      description: t('Education.argProgram.summary'),
      buttonText: "Descargar certificado",
      date: "2020 - 2022",
    },
  ]

  return (
    <section id="educ" className="mt-5 md:mt-12">
      <motion.h2 initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden"
      >
        {t('Education.sectionTitle')}
      </motion.h2>
      <div className={`${styles.timelineItems} relative w-full px-0 md:px-14 flex flex-col justify-center items-center mt-5`}>
        {educTimelineElements.map((element) => (
          <div key={element.id} className={`${element.id % 2 ? 'pr-0 md:pr-[50%] pl-8 md:pl-0' : 'pl-8 md:pl-[50%]'} w-full mt-5 md:mt-0`}>
            <div className={`${element.id % 2 ? 'pr-0 md:pr-[30px]' : 'pl-0 md:pl-[30px]'} w-full realtive`}>
              <div className="flex flex-row items-center mb-2">
                <div className={`${element.id % 2 ? 'bg-[#D62828]' : 'bg-[#D62828]'} w-[16px] h-[16px] rounded-full absolute left-[1px] md:left-[calc(50%-8px)]`}></div>
                <div className={`${element.id % 2 ? 'md:justify-end text-[#D62828]' : 'md:justify-start text-[#D62828]'} justify-start w-full flex text-lg font-semibold`}>
                  {element.date}
                </div>
              </div>
              <motion.div initial={{ x: `${screen.width > 768 ? element.id % 2 ? "-25vw" : "25vw" : "50vw"}` }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                className="rounded-[0.5rem] p-3 drop-shadow-2xl bg-[#EAE2B7] dark:bg-[#00141F]"
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <div className="font-bold text-xl dark:text-white">{element.title}</div>
                  <div className="dark:text-white">{element.location}</div>
                </div>
                <div className="pt-2 dark:text-white">{element.description}</div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Educ
