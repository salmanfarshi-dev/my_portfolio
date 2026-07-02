import React from 'react'
import EcommerceImage from '../assets/ecommerce.png'

function Ecommerce() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-x-10 items-center">
        <div className="w-full md:w-1/2 ">
          <img src={EcommerceImage} alt="" className='rounded-4xl' />
        </div>
        <div className="w-full md:w-1/2">
          <h5 className='text-[45px] leading-tight font-medium w-full text-center'>A modern online store where users can browse, search, and purchase products with a smooth and user-friendly shopping experience.</h5>
        </div>
      </div>
    </section>
  )
}

export default Ecommerce