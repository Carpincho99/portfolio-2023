import { NavLinks } from '../../constants'
import styles from './Nav.module.css'

const Nav = () => (
  <div className={`sticky flex items-center top-0 right-0 h-screen w-20 ${styles.textVertical}`}>
    <ul className="py-2">
      {
        NavLinks.map((link) => (
          <li key={link.id} className="inline py-2">{link.text}</li>
        ))
      }
    </ul>
    <div className="bg-black h-28 w-[2px] "></div>
  </div>

)

export default Nav
