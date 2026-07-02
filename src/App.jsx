import { Routes, Route } from "react-router-dom";

import Navbar from "./Layout/Navbar";
import Home from "./Page/Home";
import Skill from "./Page/Skill";
import Projects from "./Page/Projects";
import Services from "./Page/Services";
import Contact from "./Page/Contact";
import Footer from "./Layout/Footer";
import Chatting from "./Component/Chatting";
import Talkfy from './Page/Talkfy'



function MainPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <Chatting />
    </>
  );
}

function App() {
  return (

    
<>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/talkify" element={<Talkfy/> }/>
      
    </Routes>

  

</>
  );
}

export default App;