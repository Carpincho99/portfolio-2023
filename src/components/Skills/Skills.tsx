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

const Skills = () => {

  const SkillTitles = [
    {
      id: "basic",
      title: "Basics",
      icons: [Html, Css, Js, Typescript],
      iconsTitle: ["Html", "Css", "Javascript", "Typescript"]
    },
    {
      id: "fontFrameworks",
      title: "FrontEnd Frameworks",
      icons: [React, Svelte],
      iconsTitle: ["ReactJs", "Svelte"]
    },
    {
      id: "cssFrameworks",
      title: "Css Frameworks",
      icons: [Tailwind, Bootstrap, Material, Saas],
      iconsTitle: ["Tailwind", "Bootstrap", "Material Ui", "Saas"]
    },
    {
      id: "misc",
      title: "Miscellaneous",
      icons: [Three, Git, Vite,Webpack, Linux],
      iconsTitle: ["ThreeJs", "Git", "Vite", "WebPack", "Linux"]
    }
  ]

  return (
    <div className="mt-5 flex flex-row w-full justify-center items-start">
      <div className="w-1/2">
        <h2 className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden">Skills</h2>
        <p className="mt-5 pr-4 text-lg dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div className={`${styles.skillTitle} w-3/4 drop-shadow-2xl dark:text-white flex flex-col items-center dark:bg-[#000D14] bg-[#EAE2B7]  rounded-[1rem]`}>
        {
          SkillTitles.map((section, i) => {
            return (
              <>
                <h2 className={`${i === 0 ? "mt-5" : "mt-0"} pl-6 w-full relative text-start font-extrabold text-2xl overflow-hidden`}>{section.title}</h2>
                <div className="pl-4 flex flex-row">
                  {
                    section.icons.map((Icon, i) => {
                      return (
                        <div className={`${i === 0 ? "mr-3 ml-0" : "mx-6"} flex flex-col justify-center items-center my-5`}>
                          <div className="w-16">
                            <Icon />
                          </div>
                          <p className="dark:text-white mt-1 text-xs">{section.iconsTitle[i]}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills
