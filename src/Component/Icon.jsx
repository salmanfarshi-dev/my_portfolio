import React from 'react'

function Icon({icon, className}) {
  return (
    <div className={`flex justify-center items-center w-14 h-14 rounded-[20px]  ${className}`}>
        <div>{icon}</div>
    </div>
  )
}

export default Icon