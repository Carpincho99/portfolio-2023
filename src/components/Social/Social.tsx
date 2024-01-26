import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Social = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  useEffect(() => {
    if (localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light')
    }

    return (() => { localStorage.removeItem('theme'); })
  }, [])

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
    else {
      document.documentElement.classList.add('dark');
    }
  }, [theme])

  return (
    <div className="z-50 h-screen fixed flex flex-col justify-between items-center top-0 left-0 w-8  md:w-20">
      <div className="flex items-center">
        {theme === 'dark'
          ?
          <motion.button
            onClick={() => setTheme('light')}
            className="mt-5 p-1 bg-[#F77F00] rounded drop-shadow-md hover:drop-shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdLightMode size={25} />
          </motion.button>
          :
          <motion.button
            onClick={() => setTheme('dark')}
            className="mt-5 p-1 bg-[#F77F00] rounded drop-shadow-md hover:drop-shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdDarkMode color="#FFFF" size={25} />
          </motion.button>}
      </div>
      <div className="flex items-center flex-col">
        <div>
          <ul>
            <li className="pb-3 drop-shadow-md hover:drop-shadow-xl">
              <a href="">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithubSquare color="#F77F00" size={40} className="" />
                </motion.div>
              </a>
            </li>
            <li className="pb-3 drop-shadow-md hover:drop-shadow-xl">
              <a href="">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin color="#F77F00" size={40} />
                </motion.div>
              </a>
            </li>
            {/*
            <li className="pb-3 drop-shadow-md hover:drop-shadow-xl">
              <a href="">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagramSquare color="#F77F00" size={40} />
                </motion.div>
              </a>
            </li>
            */
            }
          </ul>
        </div>
        <div className="bg-[#F77F00] h-12 w-[2px] mb-4 "></div>
      </div>
    </div>
  )
}

export default Social
