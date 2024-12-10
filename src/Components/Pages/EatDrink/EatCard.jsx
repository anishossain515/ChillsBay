import { Button } from '@nextui-org/react'
import React from 'react'
import { EatCardData } from '../../Utilities/Data'

function EatCard() {
  return (
    <section className='bg-[#F5FAFF]'>
        <div className='max-w-[1400px] flex sm:flex-col flex-col-reverse mx-auto md:px-20 sm:px-8 px-5 sm:py-16 py-10'>
            <div className='flex sm:justify-end justify-center sm:pt-0 pt-5'><h2 className='text-Dodger_Blue font-semibold text-2xl'>See More</h2></div>

            <div className='flex flex-wrap items-center lg:justify-start justify-center gap-5 mt-6'>

               {EatCardData.map(({img,head,des,details},index)=>(
                <div className='flex flex-col max-w-[300px]' key={index}>
                 <img src={img} alt="EatCardImg" className='w-full h-full object-cover' />
                 <div className='py-2'>
                     <h2 className='text-Dark_Indigo font-bold text-2xl'>{head}</h2>
                     <p className='text-Dark_Indigo font-bold text-[15px] pt-1'>{details}</p>
                 </div>
                 <p className='text-Dark_Indigo text-[15px]'>{des}</p>
                 <Button color='primary' className='max-w-[150px] mt-4'>Reserve Now</Button>
             </div>
               ))}

            </div>

        </div>
    </section>
  )
}

export default EatCard