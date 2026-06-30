import React from 'react'

function CardTittle({head,className}) {
  return (
    <h2 className={`text-[40px] font-Jakarta font-bold text-text-primary ${className}`}>{head}</h2>
  )
}

export default CardTittle