import React from 'react'
import Card from '../../Common/Card'
import { TopThingsData } from '../../Utilities/Data'

function TopThings() {
  return (
    <section className='bg-[#F5FAFF] py-[50px] lg:px-16 sm:px-10 px-2'>
        <div className='max-w-[1400px] mx-auto'>
        <h1 className='text-Dark_Indigo font-bold md:text-[32px] sm:text-3xl text-2xl'>Top things to do in Lagos</h1>
        <div className='flex flex-wrap lg:justify-start justify-center items-center gap-10 pt-10'>
            {TopThingsData.map(({img,title},index)=>(
                <Card img={img} title={title} key={index} />
            ))}
        </div>
        </div>
    </section>
  )
}

export default TopThings