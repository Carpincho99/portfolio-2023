import { motion } from 'framer-motion'
import { educTimelineElements } from '../../constants'
import styles from './Educ.module.css'

const Educ = () => {
  return (
    <section id="work" className="mt-5 md:mt-12">
      <motion.h2 initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden"
      >
        Education
      </motion.h2>
      <div className={`${styles.timelineItems} relative w-full px-0 md:px-14 flex flex-col justify-center items-center mt-5`}>
        {educTimelineElements.map((element) => (
          <div key={element.id} className={`${element.id % 2 ? 'pr-[50%]' : 'pl-[50%]'} w-full`}>
            <div className={`${element.id % 2 ? 'pr-0 md:pr-[30px]' : 'pl-0 md:pl-[30px]'} w-full realtive`}>
              <div className="flex flex-row items-center mb-2">
                <div className={`${element.id % 2 ? 'bg-[#D62828]' : 'bg-[#D62828]'} w-[16px] h-[16px] rounded-full absolute left-[calc(50%-8px)]`}></div>
                <div className={`${element.id % 2 ? 'justify-end text-[#D62828]' : 'justify-start text-[#D62828]'} w-full flex text-lg font-semibold`}>
                  {element.date}
                </div>
              </div>
              <div className="rounded-[0.5rem] p-3 drop-shadow-2xl bg-[#EAE2B7] dark:bg-[#00141F]">
                <div className="font-bold text-xl">{element.title}</div>
                <div>{element.location}</div>
                <div>{element.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Educ
