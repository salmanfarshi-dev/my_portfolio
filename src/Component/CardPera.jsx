import React from 'react'

function CardPera({className,pera}) {
  return (
   <p className={`text-[18px] text-text-secondary font-normal ${className}`}>{pera}</p>
  )
}

export default CardPera