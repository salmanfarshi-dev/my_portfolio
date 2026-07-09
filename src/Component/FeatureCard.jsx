import React from 'react'

function FeatureCard({Iconbg, Icon, tittle,pera}) {
  return (
    <div className='border border-border bg-bg-card px-2 py-3 rounded-xl w-62.6 h-full'>
        <div className="flex items-center gap-x-4">
            <div className={`w-12 h-12 rounded-2xl flex justify-center items-center ${Iconbg}`}>{Icon}</div>
            <h5 className='text-[16px] font-semibold text-text-primary border-b border-border pb-3'>{tittle}</h5>
        </div>
        <p className='mt-2 text-text-secondary text-[14px]'>{pera}</p>


    </div>
  )
}

export default FeatureCard