import { motion } from 'framer-motion'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLinks } from '../../constants'
import styles from './Nav.module.css'

const Nav = () => {
  const { t, i18n } = useTranslation();
  const lngs = ['en', 'es'];
  const [lng, setlng] = useState(navigator.language);

  return (<>
    <div className={`w-8 md:w-20 fixed flex items-center justify-between top-0 right-0 h-screen  z-50 ${styles.textVertical}`}>
      <div className={'flex items-center'}>
        <ul className="py-3 sticky">
          {NavLinks.map((link) => (
            <li key={link.id} className="inline py-3 text-sm md:text-base text-[#D62828] font-bold">
              <a href={`#${link.id}`}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="bg-[#D62828] h-24 w-[2px] sticky "></div>
      </div>
      <div>
        <motion.button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
          className="-rotate-90 mb-5 px-1 py-2 h-[40px] w-[40px] bg-[#D62828] font-bold  text-lg text-white rounded drop-shadow-md hover:drop-shadow-xl dark:text-[#00283D]"
        >
          {i18n.language === 'en' ? 'es' : 'en'}
        </motion.button>
      </div>
    </div>
  </>)

}

export default Nav
