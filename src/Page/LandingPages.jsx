import React, { useState } from 'react'
import LandingCard from '../Component/LandingCard'

function LandingPages() {

    const [show, setShow] = useState(3)
  return (
   <section className='w-full md:w-[90%] max-w-330 mx-auto px-4 md:px-0'>
    <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-Jakarta font-bold  ">
        {" "}
        My{" "}
        <span className="bg-gradient-to-r from-[#8d60f6] to-[#206ce6] bg-clip-text text-transparent">
          Landing Pages 
        </span>{" "}
      </h1>
      <p className="text-sm md:text-[16px] text-text-secondary font-normal w-full md:w-100 mx-auto text-center mt-4">
       A collection of responsive and modern landing pages built with React, HTML, CSS and modern UI libraries
      </p>
    </div>


    <div className="mt-20 flex justify-between items-center flex-wrap">

    </div>

   </section>
  )
}

export default LandingPages