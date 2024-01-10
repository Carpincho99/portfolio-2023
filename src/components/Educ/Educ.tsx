import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const Educ = () => {
  return (
    <section id="work" className="mt-5">
      <motion.h2 initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden"
      >
        Education
      </motion.h2>
      <div className="w-full relative flex flex-col justify-center items-center mt-5">
      a
      </div>
    </section>
  )
}

export default Educ
