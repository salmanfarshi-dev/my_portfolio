import React from 'react'
import { Element } from 'react-scroll'
import HeadTittle from '../Component/HeadTittle'
import HeadPera from '../Component/HeadPera'
import ServiceCard from '../Layout/ServiceCard'

function Services() {
  return (

    <section className='min-h-screen max-w-330 mx-auto px-4 md:px-0 md:pt-10' id='service'>
      <HeadTittle tittle="Services"/>
      <HeadPera pera="From responsive frontend interfaces to complete web solutions, I create reliable, user-focused applications that bring your ideas to life." className="w-[70%] mx-auto"/>

        <ServiceCard/>
        
    </section>
  )
}

export default Services