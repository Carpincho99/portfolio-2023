import styles from './Skill.module.css'
import Html from './svgIcons/Html'
import Css from './svgIcons/Css'
import Js from './svgIcons/Js'
import Typescript from './svgIcons/Typescript'
import React from './svgIcons/React'
import Svelte from './svgIcons/Svelte'
import Tailwind from './svgIcons/Tailwind'
import Bootstrap from './svgIcons/Bootstrap'
import Material from './svgIcons/Material'
import Three from './svgIcons/Three'
import Git from './svgIcons/Git'
import Vite from './svgIcons/Vite'
import Linux from './svgIcons/Linux'
import Webpack from './svgIcons/Webpack'
import Saas from './svgIcons/Saas'
import Figma from './svgIcons/Figma'
import Redux from './svgIcons/Redux'
import Inkscape from './svgIcons/Inkscape'
import { motion } from 'framer-motion'

const Skills = () => {
  const SkillTitles = [
    {
      id: 'basics',
      title: 'Basics',
      icons: [Html, Css, Js, Typescript],
      iconsTitle: ['Html', 'Css', 'Javascript', 'Typescript'],
    },
    {
      id: 'front',
      title: 'FrontEnd Frameworks',
      icons: [React, Svelte],
      iconsTitle: ['ReactJs', 'Svelte'],
    },
    {
      id: 'css',
      title: 'Css Frameworks',
      icons: [Tailwind, Bootstrap, Material, Saas],
      iconsTitle: ['Tailwind', 'Bootstrap', 'Material Ui', 'Saas'],
    },
    {
      id: 'misc',
      title: 'Miscellaneous',
      icons: [Three, Git, Vite, Webpack, Linux, Redux, Figma, Inkscape],
      iconsTitle: ['ThreeJs', 'Git', 'Vite', 'WebPack', 'Linux', 'Redux', 'Figma', 'Inkscape'],
    },
  ]

  return (
    <section id="skill" className="mt-5 md:mt-5">
      <motion.div initial={{ x: "-50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden">
          Skills
        </h2>
      </motion.div>
      <div className="mt-5 flex flex-col md:flex-row w-full justify-center items-start">
        <motion.div initial={{ x: "-35vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}
          className="w-full md:w-1/3">
          <p className="md:mr-6 mr-0 text-justify md:text-left text-xl dark:text-white">
            I mainly use ReactJs and Tailwind to build beautiful website, like this portfolio. Also, I
            am learning Svelte (which is an awesome framework!). Some other tools that I am constantly
            working with are Git/GitHub (for version control) and Linux as my daily OS.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "50vw" }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}
          className={`${styles.skillTitle} w-full md:w-2/3 mt-5 md:mt-0 drop-shadow-2xl
        dark:text-white flex flex-col items-center dark:bg-[#00141F] bg-[#EAE2B7] rounded-[1rem]`}
        >
          {SkillTitles.map((section, i) => {
            return (
              <div key={section.id} className="w-full">
                <h2
                  className={`${i === 0 ? 'mt-5' : 'mt-0'} pl-2 md:pl-6 w-full relative text-start font-extrabold text-2xl overflow-hidden`}
                >
                  {section.title}
                </h2>
                <div className="pl-0 md:pl-4 flex flex-row flex-wrap items-center justify-center">
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
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
