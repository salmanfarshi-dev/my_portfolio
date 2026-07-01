import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
   <section className=' bg-bg-card py-3'>
   <div className="max-w-330 mx-auto px-4 md:px-0">
     <div className="flex justify-between items-center flex-col md:flex-row gap-y-5 md:gap-y-0 ">
        <p className='text-text-secondary/60 text-[16px]'>Designed & Developed by Salman Farshi · 2026</p>

 <div className=" flex gap-x-4 items-center">
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

   </section>
  )
}

export default Footer