import { BiMailSend } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { enterText, leaveText } from '../../app/store';
import styles from './Hero.module.css'

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-full justify-center items-center">
      <div onMouseOver={()=>dispatch(enterText())} onMouseLeave={()=>dispatch(leaveText())}>
        <h4 className="pl-[4px] font-extrabold text-black text-1xl lg:text-2xl mt-2 dark:text-white">Hi, I'm</h4>
        <h1  className={`${styles.animatedGrad} overflow-hidden mt-2 font-extrabold text-transparent text-6xl lg:text-8xl bg-clip-text`}>Ezequiel</h1>
        <h2 className="mt-2 pl-[4px] font-extrabold text-2xl lg:text-4xl overflow-hidden dark:text-white">FrontEnd Developer</h2>
        <button className={`${styles.animatedGrad} mt-8 ml-[4px] px-3 py-1 dark:text-white rounded-full flex flex-row items-center drop-shadow-md hover:drop-shadow-xl`}>
          <BiMailSend className="px-2" size={40} />
          <span className="pr-2 font-bold">
            Contact me
          </span>
        </button>
      </div>
    </div>
  )
}

export default Hero
