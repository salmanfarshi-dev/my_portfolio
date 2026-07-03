import React from 'react'
import EcommerceImage from '../assets/ecommerce.png'
import { Link } from 'react-router-dom'

function Ecommerce() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-6 lg:gap-x-10 items-center">
        <div className="w-full md:w-1/2 ">
       <Link to="/exclusive">
          <img src={EcommerceImage} alt="" className='rounded-4xl' />
       </Link>
        </div>
       
        <div className="w-full md:w-1/2">
       <Link to="/exclusive">
          <h5 className=' text-2xl md:text-3xl lg:text-[45px] leading-tight font-medium w-full text-center cursor-pointer'>A modern online store where users can browse, search, and purchase products with a smooth and user-friendly shopping experience.</h5>
       </Link>
        </div>
      </div>
    </section>
  )
}

export default Ecommerce