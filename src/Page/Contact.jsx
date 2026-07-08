import React from 'react'
import { Element } from 'react-scroll'
import ContactUs from '../Layout/ContactUs'
import HeadTittle from '../Component/HeadTittle'
import HeadPera from '../Component/HeadPera'

function Contact() {
  return (

   <Element name='contact'>
     <section className='min-h-screen md:w-[90%] max-w-330 mx-auto px-4 md:px-0 md:pt-5 lg:pt-10 mb-10' id='contact'>
         <div className="w-fit py-1 px-4 rounded-full mx-auto border border-border flex items-center gap-x-3 mb-3">
          <div className="w-3 h-3 rounded-full bg-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]"></div>
          <p className='text-sm text-primary font-medium '>Contact Me</p>
         </div>
      <HeadTittle tittle="Let's Build Something Amazing Together" className="w-full md:w-[50%] md:text-[45px]! md:leading-[55px] mx-auto"/>
      <HeadPera pera="Have aproject in mind ? I'm available for work, internships and full-time oportunities" className="lg:w-[35%] text-[16px] md:ext-[18px]! mx-auto"/>

<ContactUs/>
       
    </section>
   </Element>
  )
}

export default Contact