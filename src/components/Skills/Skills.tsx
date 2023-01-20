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
      icons: [Tailwind, Bootstrap, Material],
      iconsTitle: ["Tailwind", "Bootstrap", "Material Ui"]
    },
    {
      id: "misc",
      title: "Miscellaneous",
      icons: [Three, Git, Vite],
      iconsTitle: ["ThreeJs", "Git", "Vite", "WebPack", "Linux"]
    }
  ]

  return (
    <div className="mt-5 flex flex-row w-full justify-center items-start">
      <div className="w-1/2">
        <h2 className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-4xl overflow-hidden">Skills</h2>
        <p className="mt-5 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div className={`${styles.skillTitle} w-3/4 dark:text-white flex flex-col items-center dark:bg-[#000D14] bg-gray-100  rounded-[0.5rem]`}>
        {
          SkillTitles.map((section, i) => {
            return (
              <>
                <h2 className={`${i === 0 ? "mt-4" : "mt-0"} pl-5 w-full relative text-start font-extrabold text-2xl overflow-hidden`}>{section.title}</h2>
                <div className="pl-4 flex flex-row">
                  {
                    section.icons.map((Icon, i) => {
                      return (
                        <div className={`${i === 0 ? "mr-3 ml-0" : "mx-4"} flex flex-col justify-center items-center my-6`}>
                          <div className="w-14">
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
