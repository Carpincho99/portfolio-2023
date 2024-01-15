import styles from './Skill.module.css'
import { motion } from 'framer-motion'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { SkillTitles, IngSkillTitles } from './skillArrays'
import { useState } from 'react'

const Skills = () => {

const [tabSelectedIdx, setTabSelectedIdx] = useState(0);

  return (
    <section id="skill" className="mt-5 md:mt-12">
      <motion.div initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
        <h2 className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden">
          Skills
        </h2>
      </motion.div>
      <div className="mt-5 flex flex-col md:flex-row w-full justify-center items-start">
        <motion.div initial={{ x: "-35vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="w-full md:w-1/3">
          <p className="md:mr-6 mr-0 md:text-left text-xl dark:text-white">
            I mainly use ReactJs and Tailwind to build beautiful website, like this portfolio. Also, I
            am learning Svelte (which is an awesome framework!). Some other tools that I am constantly
            working with are Git/GitHub (for version control) and Linux as my daily OS.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="w-full md:w-2/3 mt-5 md:mt-0 flex flex-col items-start drop-shadow-2xl "
        >
          <Tabs selectedIndex={tabSelectedIdx} onSelect={(idx)=>setTabSelectedIdx(idx)} className="w-full">
            <TabList className="w-fit flex items-center cursor-pointer">
              <Tab  className={`${tabSelectedIdx == 0 ? 'dark:bg-[#00141F] bg-[#EAE2B7]' : 'dark:bg-[#000e14] bg-[#f3d180]'} px-2 py-2 md:px-10 md:py-2 rounded-t-[1rem] font-extrabold text-3xl text-black dark:text-white`}>Electronics</Tab>
              <Tab  className={`${tabSelectedIdx == 1 ? 'dark:bg-[#00141F] bg-[#EAE2B7]' : 'dark:bg-[#000e14] bg-[#f3d180]'} px-2 py-2 md:px-10 md:py-2 rounded-t-[1rem] font-extrabold text-3xl text-black dark:text-white`}>{window.innerWidth>768 ? 'Programming' : 'Dev'}</Tab>
            </TabList>
            <TabPanel className="w-full">
              <div className={`${styles.skillTitle} w-full dark:text-white flex flex-col items-center dark:bg-[#00141F] bg-[#EAE2B7] rounded-b-[1rem] rounded-tr-[1rem]`}>
                {IngSkillTitles.map((section, i) => {
                  return (
                    <div key={section.id} className="w-full">
                      <h2
                        className={`${i === 0 ? 'mt-5' : 'mt-0'} pl-2 md:pl-6 w-full relative text-start font-extrabold text-2xl overflow-hidden`}
                      >
                        {section.title}
                      </h2>
                      <div className="pl-0 md:pl-4 flex flex-row flex-wrap items-end justify-center">
                        {section.icons.map((Icon, i) => {
                          return (
                            <div
                              key={i}
                              className={`${i === 0 ? 'md:mr-3 md' : 'mx-6'} flex flex-col justify-center items-center my-5`}
                            >
                              <div className="w-16">
                                <Icon />
                              </div>
                              <p className="dark:text-white mt-1 text-xs">{section.iconsTitle[i]}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${styles.skillTitle} w-full dark:text-white flex flex-col items-center dark:bg-[#00141F] bg-[#EAE2B7] rounded-b-[1rem] rounded-tr-[1rem]`}>
                {SkillTitles.map((section, i) => {
                  return (
                    <div key={section.id} className="w-full">
                      <h2
                        className={`${i === 0 ? 'mt-5' : 'mt-0'} pl-2 md:pl-6 w-full relative text-start font-extrabold text-2xl overflow-hidden`}
                      >
                        {section.title}
                      </h2>
                      <div className="pl-0 md:pl-4 flex flex-row flex-wrap items-end justify-center">
                        {section.icons.map((Icon, i) => {
                          return (
                            <div
                              key={Icon.name}
                              className={`${i === 0 ? 'md:mr-3 md:ml-0 mx-6' : 'mx-6'} flex flex-col justify-center items-center my-5`}
                            >
                              <div className="w-16">
                                <Icon />
                              </div>
                              <p className="dark:text-white mt-1 text-xs">{section.iconsTitle[i]}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabPanel>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
