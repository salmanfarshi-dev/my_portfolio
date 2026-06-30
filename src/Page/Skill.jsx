import React from "react";
import { Element } from "react-scroll";
import Education from "../Layout/Education";

function Skill() {
  return (
   <Element name="skill">
     <section className="min-h-screen max-w-330 mx-auto md:pt-10 mt-5 px-4 md:px-0" id="skill">
     <Education/>
    </section>
   </Element>
  );
}

export default Skill;
