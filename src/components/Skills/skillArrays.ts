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
import Inkscape from './svgIcons/Inkscape'
import Dart from './svgIcons/Dart'
import Flutter from './svgIcons/Flutter'
import C from './svgIcons/C'
import Cpp from './svgIcons/Cpp'
import ASM from './svgIcons/ASM'
import Latex from './svgIcons/Latex'
import SolidWorks from './svgIcons/SolidWorks'
import Verilog from './svgIcons/Verilog'
import Fusion from './svgIcons/Fusion'

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
    title: 'CSS Frameworks',
    icons: [Tailwind, Bootstrap, Material, Saas],
    iconsTitle: ['Tailwind', 'Bootstrap', 'Material Ui', 'Saas'],
  },
  {
    id: 'mobileDev',
    title: 'Mobile development',
    icons: [Dart, Flutter],
    iconsTitle: ['Dart', 'Flutter'],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    icons: [Three, Git, Vite, Webpack, Linux, Figma, Inkscape],
    iconsTitle: ['ThreeJs', 'Git', 'Vite', 'WebPack', 'Linux', 'Figma', 'Inkscape'],
  },
]

const IngSkillTitles = [
  {
    id: 'lowLevel',
    title: 'Microcontrollers',
    icons: [C, Cpp, ASM],
    iconsTitle: ['C', 'Cpp', 'Assambley'],
  },
  {
    id: 'hardware',
    title: 'Hardware Description',
    icons: [Verilog],
    iconsTitle: ['Verilog'],
  },
  {
    id: 'eda',
    title: 'EDA',
    icons: [Html, Css, Js, Typescript],
    iconsTitle: ['KiCad', 'Altium', 'Javascript', 'Typescript'],
  },
  {
    id: 'cad',
    title: 'CAD',
    icons: [SolidWorks, Fusion],
    iconsTitle: ['SolidWorks', 'Fusion360'],
  },
  {
    id: 'miss',
    title: 'Miscellaneous',
    icons: [Latex, Linux, Js, Typescript ,Typescript, Typescript],
    iconsTitle: ['Latex', 'Linux', 'LtSpice', 'Multisim', 'Octave', 'Matlab'],
  },
]

export {SkillTitles, IngSkillTitles};
