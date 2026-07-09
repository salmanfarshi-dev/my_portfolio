import React from 'react'
import { SiPolymerproject } from "react-icons/si";
import { GrShieldSecurity } from "react-icons/gr";
import { IoIosTimer } from "react-icons/io";
import { FaTv } from "react-icons/fa6";






function TalkifyOverview() {
  return (
    <div className='flex justify-between flex-col md:flex-row border-b border-border gap-y-5 md:gap-y-0 pb-10'>
        <div className="flex flex-col">
            <div className="flex items-center gap-x-4">
                <div className="w-10 h-10 rounded-[10px] flex justify-center items-center border border-primary shadow-[inset_0_0_55px_rgba(59,130,246,0.3)]">
        <SiPolymerproject className='rotate-90 text-primary'/>

                </div>
                <p className='text-[18px] font-medium tracking-tight text-text-primary'>Project Overview</p>
            </div>
            <p className='mt-2 text-[16px] text-text-secondary/60 w-full lg:w-[70%]'>Talkify is a frontend chat application designed to provide a modern and responsive messaging experience. Built with React and Firebase, it includes user authentication, real-time messaging, and a clean interface that works seamlessly across desktop and mobile devices.</p>
        </div>


       <div className="">
         <div className="w-full md:w-130 flex justify-center  border border-border rounded-[10px] py-5 px-10 gap-x-8 md:gap-x-16">
            <div className="flex flex-col gap-y-2 text-center items-center">
                <FaTv className='drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] text-primary text-xl'/>
                <h6 className='text-sm md:text-xl font-semibold text-text-primary'>100%</h6>
                <p className='text-xs md:text-sm text-text-secondary'>Responsive</p>

            </div>
            <div className="flex flex-col gap-y-2 text-center items-center">
                <IoIosTimer  className='drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] text-primary text-2xl'/>
                <h6 className='text-sm md:text-xl font-semibold text-text-primary'>Real-time</h6>
                <p className='text-xs md:text-sm text-text-secondary'>Messaging</p>

            </div>
            <div className="flex flex-col gap-y-2 text-center items-center">
                <GrShieldSecurity  className='drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] text-primary text-2xl'/>
                <h6 className='text-sm md:text-xl font-semibold text-text-primary'>Secure</h6>
                <p className='text-xs md:text-sm text-text-secondary'>Authentication</p>

            </div>
        </div>
       </div>

    </div>
  )
}

export default TalkifyOverview