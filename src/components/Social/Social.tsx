import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'


const Social = () => (<div className="sticky flex flex-col justify-end items-center top-0 right-full h-screen w-20">
  <ul className="py-2">
    <li className="mb-3">
        <FaGithubSquare size={30}/>
    </li>
    <li className="mb-3">
        <FaLinkedin size={30}/>
    </li>
    <li className="mb-3">
        <FaInstagramSquare size={30}/>
    </li>
  </ul>
  <div className="bg-black h-12 w-[2px] mb-3 "></div>
</div>

)

export default Social
