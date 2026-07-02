import React from 'react'
import { Element } from 'react-scroll'
import HeadTittle from '../Component/HeadTittle'
import HeadPera from '../Component/HeadPera'
import Ecommerce from '../Layout/Ecommerce'
import ChatApp from '../Layout/ChatApp'



function Projects() {
  return (

    <section className='min-h-screen mx-auto max-w-330 w-full px-4 md:px-0 mt-10 mb-20' id='project'>
      

      
<HeadTittle tittle="Projects"/>
<HeadPera pera="A collection of frontend projects showcasing responsive design, clean code, and modern web development practices." className="w-full md:w-[50%] mx-auto"/>


        <div className="flex flex-col gap-y-30 mt-16">
            <Ecommerce/>
            <ChatApp/>
        </div>
    </section>
  )
}

export default Projects