import { useEffect, useState } from 'react'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Social = () => {
  const [theme, setTheme] = useState(localStorage.theme)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [])

  useEffect(() => {
    if (theme == 'light') {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    }
    if (theme == 'dark') {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  return (
    <div className="z-50 h-screen hidden fixed md:flex flex-col justify-between items-center bottom-0 left-0  w-20">
      <div className="flex items-center">
        <button
          onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
          className="mt-5 p-1 bg-[#F77F00] rounded drop-shadow-md hover:drop-shadow-xl"
        >
          {theme == 'light' ? <MdDarkMode color="#FFFF" size={20} /> : <MdLightMode size={20} />}
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
