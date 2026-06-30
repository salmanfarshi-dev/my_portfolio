import React from 'react'
import Navbar from './Layout/Navbar'
import Home from './Page/Home'
import Skill from './Page/Skill'
import Projects from './Page/Projects'
import Services from './Page/Services'
import Contact from './Page/Contact'

function App() {
  return (
    <>
     <Navbar/>

     <div className="pt-30 md:pt-40">
      <Home/>
      <Skill/>
      <Projects/>
      <Services/>
      <Contact/>


     </div>
    </>
  )
}

export default App