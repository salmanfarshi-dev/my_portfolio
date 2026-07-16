import React, { useState } from 'react'
import LandingCard from '../Component/LandingCard'
import LandingApidata from "../Component/LandingPage"
import { Button } from '@heroui/react'
import { Link } from 'react-router-dom'

function LandingPages() {

    const [show, setShow] = useState(6)
  return (
   <section className='w-full md:w-[90%] max-w-330 mx-auto px-4 md:px-0'>
    <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-Jakarta font-bold  ">
        {" "}
        My{" "}
        <span className="bg-gradient-to-r from-[#8d60f6] to-[#206ce6] bg-clip-text text-transparent">
          Landing Pages 
        </span>{" "} 🚀
      </h1>
      <p className="text-sm md:text-[16px] text-text-secondary font-normal w-full md:w-100 mx-auto text-center mt-4">
       A collection of responsive and modern landing pages built with React, HTML, CSS and modern UI libraries
      </p>
    </div>


    <div className="mt-20 grid grid-cols-3 gap-6 items-center flex-wrap">
        {
            LandingApidata.slice(0,show).map(item=>(
                <LandingCard 
                key={item.id}
                Image={item.image}
                link={item.link}
                title={item.tittle}
                description={item.description}
                firsttools={item.firsttools}
                secondtools={item.secondtools}
                thirdtools={item.thirdtools}
                />
            ))
        }

    </div>
    <div className="text-center mt-16 pb-16 border-b border-[#8282824d]">
          {show < LandingApidata.length ?
            <Button onClick={()=>setShow(show+3)} className="py-7 px-10 font-medium text-xl rounded-[8px]">Show More</Button>
            :
            <Link to="/">
             <Button className="py-7 px-10 font-medium text-xl rounded-[8px]">Back Now</Button>
            </Link>
           
          }
        </div>

   </section>
  )
}

export default LandingPages