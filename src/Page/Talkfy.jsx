import React from 'react'
import Image from '../assets/chattingapp.png'
import { FaStar } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import TalkifyOverview from '../Component/TalkifyOverview';
import Features from '../Component/Features';
import { BsStack } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";








function Talkfy() {
  return (
 <section className='min-h-screen md:w-[90%] max-w-330 mx-auto px-4 md:px-0 md:pt-5 pt-5 lg:pt-10 mb-10'>
  <div className="flex justify-between flex-col md:flex-row gap-y-5 md:gap-y-0 items-center">
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
         <p className='mt-5 text-text-secondary/60 lg:text-[16px] md:w-[70%]'>
          Talkify is a modern chat application built with React, Tailwind CSS, and Firebase. It provides a clean, responsive, and user-friendly interface where users can securely sign in, connect with others, and exchange messages in real time. The project focuses on delivering a smooth user experience with modern UI and Firebase integration.
         </p>

        <div className="flex gap-x-4 items-center mt-7">
              <Button
                component="a"
                href="https://talkify-tau.vercel.app"
               startIcon={<TbWorld />}
                variant="contained"
                sx={{
                  background: "#3B82F6",
                  borderRadius: "12px",
                  padding: {
                    md: "10px 20px",
                  },
                  textTransform: "capitalize",
                  fontSize: {
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                  border: "1px solid #334155",
                  "&:hover": {
                    backgroundColor: "#3b82f617",
                    borderColor: "#3B82F6",
                  },
                }}
              >
               Live Demo
              </Button>
              <Button
                component="a"
                href="https://github.com/salmanfarshi-dev/Talkify"
               startIcon={<FaGithub />}
                variant="contained"
                sx={{
                  background: "#1E293B",
                  borderRadius: "12px",
                  padding: {
                    md: "10px 20px",
                  },
                  textTransform: "capitalize",
                  fontSize: {
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                  border: "1px solid #334155",
                  "&:hover": {
                    backgroundColor: "#3b82f617",
                    borderColor: "#3B82F6",
                  },
                }}
              >
                Github
              </Button>
              
            </div>
        </div>
    </div>

<div className="">
  <img src={Image} alt="" className='rounded-lg'/>
</div>

  </div>

  <div className="mt-14 md:mt-[140px]">
    <TalkifyOverview/>
  </div>
  <Features/>

  <div className="mt-8 ">
     <div className="flex justify-center gap-x-3 items-center ">
            <BsStack  className="text-primary text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            <p className="text-text-primary font-Jakarta text-xl font-semibold">
              Tech Stack
            </p>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <div className="tech">
              <p>React Js</p>

            </div>
            <div className="tech">
              <p>Tailwind CSS</p>

            </div>
            <div className="tech">
              <p>React Router</p>

            </div>
            <div className="tech">
              <p>React Icons</p>

            </div>
            <div className="tech">
              <p>Vite</p>

            </div>
          </div>
  </div>

  <div className="mt-30 mb-10 flex justify-center">
  <Link to="/">
       <Button startIcon={<FaArrowLeft />
} sx={{padding:"10px 20px", textTransform:"capitalize", fontSize:"18px"}} variant="contained">Back Home</Button>
  </Link>
  </div>



 </section>
  )
}

export default Talkfy