import React from 'react'

function HeadPera({pera, className}) {
  return (
    <p className={ `text-text-secondary text-center text-sm md:text-[16px] lg:text-xl font-medium mt-3 ${className
    }`} >{pera}</p> 
  )
}

export default HeadPera