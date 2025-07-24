import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <>
    <div class="fixed -z-10 min-h-screen w-full [background:radial-gradient(circle_farthest-side,rgba(255,240,100,0.4),rgba(255,255,255,0))]"></div>

     <main className="flex flex-col items-center px-4 md:px-8
     lg:px-16">
      <Navbar/>
      <Hero/>
      <Tech/>
      <Project/>
      <Contact/>

     </main>
   </>
  )
}

export default App;
