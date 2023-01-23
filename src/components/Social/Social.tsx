import { useContext, useEffect, useState } from 'react'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'

const Social = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <div className="z-50 h-screen hidden fixed md:flex flex-col justify-between items-center bottom-0 left-0  w-20">
      <div className="flex items-center">
        <button
          onClick={() => changeCurrentTheme(currentTheme == 'light' ? 'dark' : 'light')}
          className="mt-5 p-1 bg-[#F77F00] rounded drop-shadow-md hover:drop-shadow-xl"
        >
          {currentTheme == 'light' ? <MdDarkMode color="#FFFF" size={20} /> : <MdLightMode size={20} />}
        </button>
      </div>
      <div className="flex items-center flex-col">
        <div>
          <ul>
            <li className="pb-3 drop-shadow-md hover:drop-shadow-xl">
              <a href="">
                <FaGithubSquare color="#F77F00" size={30} className="" />
              </a>
            </li>
            <li className="pb-3 drop-shadow-md hover:drop-shadow-xl">
              <a href="">
                <FaLinkedin color="#F77F00" size={30} />
              </a>
            </li>
            <li className="pb-3 drop-shadow-md hover:drop-shadow-xl">
              <a href="">
                <FaInstagramSquare color="#F77F00" size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-[#F77F00] h-12 w-[2px] mb-4 "></div>
      </div>
    </div>
  )
}

export default Social
