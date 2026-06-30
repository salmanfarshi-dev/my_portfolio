import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";



function Skilltwo() {
  return (
    <>
       <div className="flex gap-x-4">
         <IoIosCheckmarkCircle className=" text-xl md:text-3xl text-primary" />
         <div className="flex flex-col ">
           <h3 className="text-[16px] md:text-xl text-text-primary font-medium">Tailwind</h3>
           <p className="text-text-secondary/70 font-normal text-sm md:text-[16px]">Experienced</p>
         </div>
       </div>
       <div className="flex gap-x-4">
         <IoIosCheckmarkCircle className=" text-xl md:text-3xl text-primary" />
         <div className="flex flex-col ">
           <h3 className="text-[16px] md:text-xl text-text-primary font-medium">JavaScript</h3>
           <p className="text-text-secondary/70 font-normal text-sm md:text-[16px]">Basic</p>
         </div>
       </div>
       <div className="flex gap-x-4">
         <IoIosCheckmarkCircle className=" text-xl md:text-3xl text-primary" />
         <div className="flex flex-col ">
           <h3 className="text-[16px] md:text-xl text-text-primary font-medium">React.js</h3>
           <p className="text-text-secondary/70 font-normal text-sm md:text-[16px]">Experienced</p>
         </div>
       </div>
       </>
  )
}

export default Skilltwo