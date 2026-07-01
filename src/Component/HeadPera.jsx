import React from 'react'

function HeadPera({pera, className}) {
  return (
    <p className={ `text-text-secondary text-center text-sm md:text-2xl font-medium mt-3 ${className
    }`} >{pera}</p> 
  )
}

export default HeadPera