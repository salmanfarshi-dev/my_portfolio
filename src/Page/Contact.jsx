import React from 'react'
import { Element } from 'react-scroll'
import ContactUs from '../Layout/ContactUs'
import HeadTittle from '../Component/HeadTittle'
import HeadPera from '../Component/HeadPera'

function Contact() {
  return (

   <Element name='contact'>
     <section className='min-h-screen max-w-330 mx-auto px-4 md:px-0 md:pt-10' id='contact'>

      <HeadTittle tittle="Contact"/>
      <HeadPera pera="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible" className="w-full md:w-[50%] mx-auto"/>

<ContactUs/>
       
    </section>
   </Element>
  )
}

export default Contact