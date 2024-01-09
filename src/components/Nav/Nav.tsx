import { NavLinks } from '../../constants'
import styles from './Nav.module.css'

const Nav = () => (
  <>
    <div className={`w-8 md:w-20 fixed flex items-center top-0 right-0 h-screen  z-50 ${styles.textVertical}`}>
      <ul className="py-3 sticky">
        {NavLinks.map((link) => (
          <li key={link.id} className="inline py-3 text-[#D62828] font-bold">
            <a href={`#${link.id}`}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="bg-[#D62828] h-24 w-[2px] sticky "></div>
    </div>
  </>

)

export default Nav
