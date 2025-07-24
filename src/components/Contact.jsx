

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full
    items-center justify-center">
      <div className="flex flex-col items-center justify-center
      gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
        <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text 
        text-transparent">Get in touch</span>
        </h1>

        <p className="text-center text-lg font-light text-black">
          Feel free to reach out — I'm always open to new opportunities and collaborations!
          <br></br>Send me an E-mail through this button and I'll get back to you as soon as I can.
        </p>

        <a href="mailto:heizalee.ibiaz@gmail.com" 
        className="text-nowrap rounded-lg border border-orange-500 bg-yellow-200 px-5 py-3
         text-lg font-bold  text-orange-500 shadow-lg shadow-orange-400 
         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl 
         hover:shadow-orange-400" >Contact Me</a>
      </div>
    </div>
  )
}

export default Contact
