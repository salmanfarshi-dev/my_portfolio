import React from 'react'

function Icon({icon, className}) {
  return (
    <div className={`flex justify-center items-center w-10 h-10 md:w-14  md:h-14 rounded-[10px] md:rounded-[20px]  ${className}`}>
        <div>{icon}</div>
    </div>
  )
}

export default Icon