import React from 'react'
import { FaCode } from "react-icons/fa";
import SkillItems from './SkillItems';
import Skilltwo from './Skilltwo';


function Skills() {
  return (
   <div >
    <div className="flex gap-x-4">
          <div className="w-14 h-14 rounded-md bg-primary/10 flex justify-center items-center border border-border-hover">
            <FaCode  className="text-2xl md:text-3xl text-primary" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-text-primary text-2xl md:text-3xl font-Jakarta font-semibold">
              Frontend Skills
            </h3>
            <p className="text-text-secondary font-medium ">
              Technologies I work with
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-x-7 md:gap-x-20 items-center">
            <div className="flex flex-col gap-y-3">
                <SkillItems/>
                
            </div>
            <div className="flex flex-col gap-y-3">
              <Skilltwo/>
                
            </div>

        </div>

   </div>
  )
}

export default Skills