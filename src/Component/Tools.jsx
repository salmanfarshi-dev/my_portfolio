import React from 'react'

function Tools({className, tool}) {
  return (
    <div className={`bg-text-secondary/10 rounded-[14px]  py-1 md:py-2 px-3 md:px-5 border border-border text-text-primary font-semibold text-sm md:text-[16px] ${className}`}>{tool}</div>
  )
}

export default Tools