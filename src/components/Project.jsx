import image1 from "./images/avems.jpg";
import image2 from "./images/playlist.jpg";
import image3 from "./images/enginuity.jpg";
import image4 from "./images/gora.jpg";
import image5 from "./images/alonsalin.jpg";
import { motion } from "framer-motion";



const projectsData = [
  {
    image: image1,
    title: "Audio-Visual Equipment Management System (AVEMS)",
    description: "AVEMS is an application for students, teachers, professors, and both academic and non-academic organizations of San Sebastian College – Recoletos de Cavite to conveniently book and reserve audio-visual (AV) equipment needed for various activities or events. Through this program, the intended users would be able to check the availability, reserve, borrow, and return the equipment of the school with ease and assurance. On the main page of the program, the users will have five options: BORROW, RESERVE, RETURN, VIEW LIST, HELP, and EXIT.",
    Technology: ["Java","SQL"],
  },
  {
    image: image2,
    title: "Playlist Maker",
    description: "This Playlist Maker is a Java-based desktop application that demonstrates the use of a Doubly Linked List data structure. It includes features such as adding at the beginning, adding at a specific position, and adding at the end. With this application, you can create a single playlist and arrange songs accordingly. It does not use a database, as it is solely focused on showcasing the functionality of a Doubly Linked List.",
    Technology: ["Java"],
  },
  {
    image: image3,
    title: "EngiNuity",
    description: "EngiNuity is an educational mobile application that includes lectures, quizzes, and games—all related to the lessons. It was built using MIT App Inventor as a requirement for my Midterm exam, focusing solely on subjects I took in college. The purpose of this project is to explore and apply various features of MIT App Inventor.",
    Technology: ["MIT App Inventor"],
  },
  {
    image: image4,
    title: "GORA!",
    description: "GORA! A Travel Guide and Planning Application is a mobile app designed to assist travelers with their travel plans. It features maps, weather updates, place reviews, and a journal function. It was developed using MIT App Inventor and is now available for download.",
    Technology: ["MIT App Inventor"],
  },
  {
    image: image5,
    title: "AlonSalin",
    description: "AlonSalin is a translation mobile application that supports various languages and includes a text-to-speech feature. It was developed using MIT App Inventor.",
    Technology: ["MIT App Inventor"],
  },
  
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div 
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row
    md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl
      transition-all duration-300 hover:scale-105 md:w-[300px]"/>

    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold text-orange-500">{project.title}</div>
        <p className="text-black-400">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-5">
        {
          project.Technology.map((tech,index) => (
            <span key={index} className="rounded-lg bg-yellow-200 p-3 ">
              {tech}
            </span>
          ))
        }
      </div>
    </div>
    </div>
    </ScrollReveal>
  )
}

const Project = () => {
  return (
   
    <div id="project" className="flex min-h-screen-w-full flex-col
    items-center justify-center gap-16 p-4 md:px-14 md:py-24">
    
    <ScrollReveal>
    <h1 className="text-4xl font-light text-orange-500 md:text-6xl">My Projects</h1>      
    
    </ScrollReveal>

    <div className="flex w-full max-w-[1000px] flex-col gap-16
    text-orange">
      {
        projectsData.map((project, index) => (
          <ProjectCard key={index} project={project}/>
        ))
      }
      </div>
    </div>

  )
}

export default Project
