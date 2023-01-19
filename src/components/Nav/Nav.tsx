import { NavLinks } from '../../constants'
import styles from './Nav.module.css'

const Nav = () => (
  <div className={`hidden sticky md:flex items-center top-0 right-0 h-screen w-20 ${styles.textVertical}`}>
    <ul className="py-2 sticky">
      {
        NavLinks.map((link) => (
          <li key={link.id} className="inline py-2 text-[#D62828] font-bold">{link.text}</li>
        ))
      }
    </ul>
    <div className="bg-[#D62828] h-28 w-[2px] sticky "></div>
  </div>

)

export default Nav
