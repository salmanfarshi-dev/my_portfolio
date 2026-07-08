import React from 'react'

function HeadTittle({tittle,className}) {
  return (
    <h4 className={`text-3xl md:text-4xl lg:text-6xl text-center font-Jakarta font-semibold text-text-primary ${className}`} >{tittle}</h4>
  )
}

export default HeadTittle