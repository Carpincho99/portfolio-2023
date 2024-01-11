import { motion } from 'framer-motion'
import { educTimelineElements } from '../../constants'

const Educ = () => {
  return (
    <section id="work" className="mt-5 md:mt-12">
      <motion.h2 initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden"
      >
        Education
      </motion.h2>
      <div className="w-full px-0 md:px-14 relative flex flex-col justify-center items-center mt-5">
        {educTimelineElements.map((element) => (
          <div key={element.id} className={`${element.id % 2 ? 'pr-[50%]' : 'pl-[50%]'} w-full`}>
            <div className={`${element.id % 2 ? 'pr-[30px]' : 'pl-[30px]'} w-full realtive`}>
              <div className={`${element.id % 2 ? 'justify-end' : 'justify-start'} w-full flex`}>
                {element.date}
              </div>
              <div className="bg-white rounded-[1rem] p-1">
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
