import portfolioDark from '../../assets/projectPortfolio.png'
import portfolioLight from '../../assets/projectPortfolioLight.png'
import styles from './Work.module.css'
import Three from '../../components/Skills/svgIcons/Three'
import { FaGithub, FaGithubSquare, FaLink, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { useEffect, useState } from 'react'

const Work = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))

  useEffect(() => {
    var observer = new MutationObserver(function(event) {
      setIsDark(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false
    })

    return () => {
    }
  }, [])

  return (
    <section id="work">
      <h2 className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden">
        Work
      </h2>
      <div className="w-full relative flex flex-col justify-center items-center mt-5">
        <div className="">
          <div className={`${styles.imgBorder} rounded-2xl p-1 drop-shadow-2xl`}>
            {
              isDark
                ?
                <img src={portfolioLight} alt="" width={700} className="rounded-xl" />
                :
                <img src={portfolioDark} alt="" width={700} className="rounded-xl" />
            }
          </div>
          <div className={`${styles.overlay} absolute w-80 text-end dark:bg-[#00141F] bg-[#EAE2B7] rounded-2xl p-3 drop-shadow-2xl bg-opacity-90 dark:bg-opacity-90 dark:text-white`}>
            <div className="flex items-center justify-end">
              <FaLink className="mr-2" />
              <h6 className="text-lg font-bold">this.portfolio</h6>
            </div>
            <p className="text-md">This website was created whith React and tailwind. ThreeJs was used for the 3D render and animations.</p>
            <div className="mt-2 flex justify-end drop-shadow-2xl">
              <FaGithubSquare size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
