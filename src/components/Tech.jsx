import { BiLogoCPlusPlus, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoMicrosoft, BiLogoPostgresql, BiLogoPython, BiLogoVisualStudio } from "react-icons/bi"
import { SiArduino, SiCanva, SiCss3, SiEclipseide, SiHtml5, SiMysql, SiPycharm, SiXampp, } from "react-icons/si";


const Tech = () => {
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center
    justify-center gap-16 md:gap-32">
      <h1 className="text-4xl font-light text-orange-500 md:text-6xl">
        Technologies
      </h1>
      
    <div className="flex flex-wrap items-center justify-center 
    gap-2 p-0">
      <div className="flex justify-center gap-10 flex-wrap">
        <div>
        <BiLogoJavascript className="cursor-pointer text-[80px]
        text-yellow-400 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <BiLogoJava className="cursor-pointer text-[80px]
        text-cyan-600 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <BiLogoCPlusPlus className="cursor-pointer text-[80px]
        text-blue-700 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <BiLogoPython className="cursor-pointer text-[80px]
        text-yellow-400 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <SiHtml5 className="cursor-pointer text-[70px]
        text-orange-600 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <SiCss3 className="cursor-pointer text-[70px]
        text-blue-600 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

    </div>
    </div>

    {/* development tools*/}
      <h1 className="text-4xl font-light text-orange-500 md:text-6xl">
        Development Tools 
      </h1>
      
    <div className="flex flex-wrap items-center justify-center 
    gap-2 p-0">
      <div className="flex justify-center gap-10 flex-wrap">
        <div>
        <SiXampp className="cursor-pointer text-[70px]
        text-orange-600 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <SiMysql className="cursor-pointer text-[70px]
        text-blue-600 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <BiLogoVisualStudio className="cursor-pointer text-[70px]
        text-blue-500 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <SiPycharm className="cursor-pointer text-[70px]
        text-green-500 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <SiEclipseide className="cursor-pointer text-[70px]
        text-blue-900 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
        <SiArduino className="cursor-pointer text-[70px]
        text-cyan-600 transition-all duration-300 hover:-translate-y-5 
        sm:text-[100px] md:text-[120px]"/>
        </div>

      
    </div>
    </div>
    </div>
    
    
    
  )
}


export default Tech
