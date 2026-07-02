import React from 'react'
import ChattingImage from '../assets/chattingapp.png'
import { Link } from 'react-router-dom'

function ChatApp() {
  return (
    <section>
          <div className="flex flex-col md:flex-row gap-x-10 items-center">
            
            <div className="w-full md:w-1/2">
              <h5 className='text-[45px] leading-tight font-medium w-full text-center md:w-[90%]'>Talkfy is a real-time messaging platform that I developed with a focus on speed, simplicity, and a seamless user experience</h5>
            </div>

            <div className="w-full md:w-1/2 ">
             <Link to="/talkify">
              <img src={ChattingImage} alt="" className='rounded-4xl' />
             </Link>
            </div>
          </div>
        </section>
  )
}

export default ChatApp