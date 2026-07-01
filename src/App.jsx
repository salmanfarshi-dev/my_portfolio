import React from 'react'
import Navbar from './Layout/Navbar'
import Home from './Page/Home'
import Skill from './Page/Skill'
import Projects from './Page/Projects'
import Services from './Page/Services'
import Contact from './Page/Contact'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Layout/Footer'

function App() {
    useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
     <Navbar/>

     <div>
      <Home/>
      <Skill/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>


     </div>
    </>
  )
}

export default App