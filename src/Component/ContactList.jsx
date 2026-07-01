import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";





function ContactList() {
  return (
   <>
   <div className="flex flex-col">
    <h5 className=' text-2xl md:text-4xl font-semibold text-text-primary'>Let's Work Together</h5>
    <p className='mt-2 text-[16px] md:text-xl md:w-[70%] w-full flex-wrap text-text-secondary font-normal'>Have a project in mind or looking for a Frontend Developer? Feel free to reach out. I'm always open to discussing new opportunities, freelance projects, and creative collaborations.</p>

    <div className="mt-6 flex gap-x-4 items-center">
        <div className="iconlist">
            <FaFacebookF />
        </div>
        <div className="iconlist">
           <FaTwitter />

        </div>
        <div className="iconlist">
           <FaLinkedinIn />

        </div>
        <div className="iconlist">
            <FaGithub />

        </div>
    </div>
   </div>
   </>
  )
}

export default ContactList