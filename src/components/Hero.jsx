import image from "./images/mypic.jpg";
import {motion} from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full
    items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center
      gap-10 text-white">

      <motion.div
      initial={{y: -50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.2}}
      
      >
       <img src={image} alt="Profile" className="mt-10 w-[300px]
       cursor-pointer rounded-full shadow-xl shadow-orange-900
       transition-all duration-300 hover:-translate-y-5 
       hover:scale-105 hover:shadow-2xl hover:shadow-orange-600
       md:w-[350px]" />
         </motion.div>

         <motion.div 
         initial={{y: 50, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{duration: 0.8, delay: 0.2}}
         
         className="=flex max-w-[600px] flex-col items-center
         justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent opacity-80 
      text-5xl font-semibold md:text-7xl">Heizalee Ibiaz</h1>
          <h3 className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent opacity-80 
      text-2xl font-light md:text-3xl">Computer Engineer</h3>
          <br></br>
          <p className="md:text-base text-pretty text-black text-justify text-sm text-black-400">
            I’m a computer engineering graduate with a solid foundation in software and hardware development, 
            and a growing interest in web development. I’m self-disciplined, quick to learn, and committed to 
            continuous growth. My internship experience strengthened my problem-solving skills and ability to apply
             technical knowledge in real-world settings. I’m a reliable team player, ready to contribute to innovative 
             projects and support organizational goals.
          </p>

           <br></br>
          <a href="/HEIZALEE C. IBIAZ-CV.pdf"
          download
          className="mt-4 inline-block rounded-lg bg-orange-500 px-6 py-3 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 shadow-lg">
         <center><AiOutlineDownload/></center>
          Resume
          </a>
         </motion.div>
      </div>
    </div>
  )
}

export default Hero;
