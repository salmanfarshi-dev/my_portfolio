import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function ContactList() {
  return (
   <>
   <div className="flex flex-col">
     <div className=" py-1 px-4  flex items-center gap-x-3 mb-3">
          <div className="w-3 h-3 rounded-full bg-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]"></div>
          <p className='text-sm text-primary font-medium uppercase'>Let's work together</p>
         </div>
    <h5 className=' text-2xl md:text-4xl font-semibold text-text-primary'>I'd love to hear from you!</h5>
    <p className='mt-2 text-[16px] md:text-[18px] md:w-[70%] w-full flex-wrap text-text-secondary font-normal'>Have a project in mind or looking for a Frontend Developer? Feel free to reach out. I'm always open to discussing new opportunities, freelance projects, and creative collaborations.</p>
    <div className="flex flex-col mt-3 gap-y-2">
      <div className="flex items-center gap-x-3 bg-bg-secondary py-2 px-4 lg:lg:w-[40%] rounded-[10px] border border-border">
        <div className="w-10 h-10 bg-primary flex justify-center items-center rounded-[10px]">
          <TfiEmail />

        </div>
        <div className="flex flex-col">
          <h4 className='font-medium text-text-primary'>Email</h4>
          <p className='font-light text-text-secondary'>salmanfarshidevel@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 bg-bg-secondary py-2 px-4 lg:w-[40%] rounded-[10px] border border-border">
        <div className="w-10 h-10 bg-blue-600 flex justify-center items-center rounded-[10px]">
          <FaPhoneVolume />

        </div>
        <div className="flex flex-col">
          <h4 className='font-medium text-text-primary'>Phone</h4>
          <p className='font-light text-text-secondary'>+8801324385585</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 bg-bg-secondary py-2 px-4 lg:w-[40%] rounded-[10px] border border-border">
        <div className="w-10 h-10 bg-green-400 flex justify-center items-center rounded-[10px]">
          <FaLocationDot />


        </div>
        <div className="flex flex-col">
          <h4 className='font-medium text-text-primary'>Location</h4>
          <p className='font-light text-text-secondary'>Dhaka,Bangladesh</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 bg-bg-secondary py-2 px-4 lg:w-[40%] rounded-[10px] border border-border">
        <div className="w-10 h-10 bg-orange-400 flex justify-center items-center rounded-[10px]">
          <IoTime />

        </div>
        <div className="flex flex-col">
          <h4 className='font-medium text-text-primary'>Respons Time</h4>
          <p className='font-light text-text-secondary'>Within 24 Hours</p>
        </div>
      </div>
    </div>

    <div className="mt-3 flex flex-col justify-center items-center md:justify-start md:items-start">
      <p className='text-text-primary font-normal '>Find me on</p>
       <div className=" flex pt-2 gap-x-4 items-center">
  <a
    href="https://www.facebook.com/share/1DppoBYrNY/"
    target="_blank"
    rel="noopener noreferrer"
    className="iconlist"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://x.com/salmanfardev"
    target="_blank"
    rel="noopener noreferrer"
    className="iconlist"
  >
    <FaTwitter />
  </a>

  <a
    href="https://www.linkedin.com/in/salmanfarshi-dev/"
    target="_blank"
    rel="noopener noreferrer"
    className="iconlist"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com/salmanfarshi-dev"
    target="_blank"
    rel="noopener noreferrer"
    className="iconlist"
  >
    <FaGithub />
  </a>
</div>
    </div>

   
   </div>
   </>
  )
}

export default ContactList