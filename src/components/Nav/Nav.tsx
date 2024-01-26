import { motion } from 'framer-motion'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Nav.module.css'

const Nav = () => {
  const { t, i18n } = useTranslation();
  const lngs = ['en', 'es'];
  const [lng, setlng] = useState(navigator.language);

  const NavLinks = [
    {
      id: "aboutMe",
      text: t('Nav.me')
    },
    {
      id: "skill",
      text: t('Nav.skills')
    },
    {
      id: "educ",
      text: t('Nav.educ')
    },

    {
      id: "work",
      text: t('Nav.work')
    },
    {
      id: "contact",
      text: t('Nav.contact')
    },
  ]

  return (<>
    <div className={`w-8 md:w-20 fixed flex items-center justify-between flex-col top-0 right-0 h-screen  z-50`}>
      <div className={`flex items-center ${styles.textVertical}`}>
        <ul className="py-3 sticky">
          {NavLinks.map((link) => (
            <li key={link.id} className="inline-block py-3 text-sm md:text-base text-[#D62828] font-bold">
              <a href={`/#${link.id}`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.text}
                </motion.div>
              </a>
            </li>
          ))}
        </ul>
        <div className="bg-[#D62828] h-24 w-[2px] sticky "></div>
      </div>
      <div>
        <motion.button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-5 h-[40px] w-[40px] bg-[#D62828] font-bold text-lg text-white rounded drop-shadow-md hover:drop-shadow-xl dark:text-[#00283D]"
        >
          {i18n.language === 'en' ? 'es' : 'en'}
        </motion.button>
      </div>
    </div>
  </>)

}

export default Nav
