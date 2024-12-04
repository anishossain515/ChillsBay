import React from 'react'

function Card({img,title}) {
  return (
    <div className='flex flex-col items-center max-w-[295px]'>
       <img src={img} alt={title} className='w-full h-auto object-cover' /> 
       <h2 className='text-[#26395C] font-bold text-xl pt-3'>{title}</h2>
    </div>
  )
}

export default Card