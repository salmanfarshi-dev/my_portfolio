import React from 'react'
import ChattingImage from '../assets/chattingapp.png'
import { Link } from 'react-router-dom'

function ChatApp() {
  return (
    <section>
          <div className="flex flex-col-reverse gap-y-5 md:gap-y-0  md:flex-row gap-x-10 items-center">
            
            <div className="w-full md:w-1/2">
              <Link to="talkify">
              <h5 className='text-2xl md:text-[45px] leading-tight font-medium w-full text-center md:w-[90%]'>Talkfy is a real-time messaging platform that I developed with a focus on speed, simplicity, and a seamless user experience</h5>
              </Link>
            </div>

            <div className="w-full md:w-1/2 cursor-pointer">
             <Link to="/talkify">
              <img src={ChattingImage} alt="" className='rounded-4xl' />
             </Link>
            </div>
          </div>
        </section>
  )
}

export default ChatApp