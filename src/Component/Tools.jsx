import React from 'react'

function Tools({className, tool}) {
  return (
    <div className={`bg-text-secondary/40 rounded-[14px]  py-2 px-5 border border-border text-text-primary font-semibold ${className}`}>{tool}</div>
  )
}

export default Tools