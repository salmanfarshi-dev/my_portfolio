import React from 'react'
import {Button} from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";


function ButtonGroup() {
  return (
    <div  className="flex items-center gap-x-3 md:gap-x-4">
         <Button variant="primary" className="bg-primary hover:bg-primary-hover text-xl md:px-10 px-5 py-4 md:py-6 ">
       
        Hire me <FaArrowRightLong className='mr-2'/>

      </Button>
       <Button variant="" className="  text-xl md:px-10 px-5 py-4 md:py-6 font-normal bg-accent/10 border border-accent/30 hover:bg-accent/15 hover:border-accent/25 duration-300">
        
     View projects
      </Button>
    </div>
  )
}

export default ButtonGroup