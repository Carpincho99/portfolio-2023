import styles from './Contact.module.css'
import carpincho from '../../assets/contactCarpincho.jpeg'

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <h2 className="text-transparent bg-clip-text bg-[#F77F00] font-extrabold text-5xl overflow-hidden">
          Contact Me
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row">

        <div className="p-3 w-full md:w-1/2 bg-[#EAE2B7] dark:bg-[#00141F] drop-shadow-2xl rounded-[1rem] items-center ">
          <form className={`${styles.form} px-4 flex flex-col items-center dark:text-white`}>
            <div className="m-2 w-full relative text-start">
              <label htmlFor="" className="font-extrabold text-2xl overflow-hidden">Name</label>
            </div>
            <div className="m-2 mt-5 w-[95%] relative text-black">
              <input type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full border-none  rounded-md" />
            </div>
            <div className="w-full m-2 mt-5 relative">
              <label htmlFor="" className="font-extrabold text-2xl overflow-hidden">Email</label>
            </div>
            <div className="m-2 mt-5 w-[95%] relative text-black">
              <input type="email" placeholder="Email" className="ring-1 ring-gray-300 w-full border-none rounded-md" />
            </div>
            <div className="w-full m-2 mt-5 relative">
              <label htmlFor="" className="font-extrabold text-2xl overflow-hidden">Message</label>
            </div>
            <div className="m-2 mt-5 w-[95%] relative text-black">
              <textarea placeholder="Message" className="ring-1 ring-gray-300 w-full border-none rounded-md" />
            </div>
            <button className="m-2 mt-5 w-full py-2 rounded-lg bg-[#F77F00] font-extrabold border-none text-2xl">Send</button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center">
            <img src={carpincho} alt="" width={200} height={200} className="mt-12" />
            <button></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
