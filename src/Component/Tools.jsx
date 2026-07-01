import React from 'react'

function Tools({className, tool}) {
  return (
    <div className={`bg-text-secondary/10 rounded-[14px]  py-2 px-5 border border-border text-text-primary font-semibold ${className}`}>{tool}</div>
  )
}

export default Tools