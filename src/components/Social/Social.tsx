import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

const Social = () => (
  <div className="hidden sticky md:flex flex-col justify-end items-center top-0 left-0 h-screen w-20">
    <ul className="py-2">
      <li className="mb-3">
        <FaGithubSquare color="#F77F00" size={30} />
      </li>
      <li className="mb-3">
        <FaLinkedin color="#F77F00" size={30} />
      </li>
      <li className="mb-3">
        <FaInstagramSquare color="#F77F00" size={30} />
      </li>
    </ul>
    <div className="bg-[#F77F00] h-12 w-[2px] mb-3 "></div>
  </div>
)

export default Social
