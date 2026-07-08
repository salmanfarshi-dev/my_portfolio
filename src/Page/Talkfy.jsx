import React from 'react'
import Image from '../assets/chattingapp.png'
import { FaStar } from "react-icons/fa";










function Talkfy() {
  return (
 <section className='min-h-screen md:w-[90%] max-w-330 mx-auto px-4 md:px-0 md:pt-5 lg:pt-30 mb-10'>
  <div className="flex justify-between items-center">
    <div className="flex flex-col">
       <div className="w-fit py-1 px-4 rounded-full  border border-primary/50 flex items-center gap-x-3 mb-3">
          <div>
            <FaStar className='text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]'/>

          </div>
          <p className='text-sm text-primary font-medium '>Featured Project</p>
         </div>
        <div className="">
           <h1 className='text-5xl font-Jakarta font-bold bg-gradient-to-r from-[#3B82F6] to-[#05359b] bg-clip-text text-transparent'>Talkify</h1>
         <p className='[mt-2 font-medium text-[18px] text-text-secondary'>Modern Chat Application</p>
         <p className='mt-5 text-text-secondary/60 lg:text-[16px] w-[50%]'>
          Talkify is a modern chat application built with React, Tailwind CSS, and Firebase. It provides a clean, responsive, and user-friendly interface where users can securely sign in, connect with others, and exchange messages in real time. The project focuses on delivering a smooth user experience with modern UI and Firebase integration.
         </p>
        </div>
    </div>

<div className="">
  <img src={Image} alt="" className='rounded-lg'/>
</div>

  </div>

 </section>
  )
}

export default Talkfy