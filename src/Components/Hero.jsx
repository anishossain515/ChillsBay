import { Autocomplete, AutocompleteItem, Button, DatePicker, DateRangePicker } from '@nextui-org/react'
import React from 'react'

function Hero() {
  return (
    <section className="bg-[url('/hero.png')] bg-no-repeat bg-cover w-full h-[800px]"> 

      <div className='container py-20 lg:px-[100px] md:px-20 sm:px-10 px-2 '>
        <h1 className='max-w-[700px] lg:leading-[74.4px] font-bold lg:text-[62px] md:text-5xl text-3xl text-white'>Find amazing things to do anytime, anywhere in Lagos.</h1>

        <div className='bg-[#FBFCFF] max-w-[730px] p-[30px] rounded-[8px] mt-10'>

          <div className='max-w-[666px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
          <Autocomplete labelPlacement='outside' label='Location' placeholder='Oshodi' className='text-[#656B89] sm:max-w-[174px]'>
            <AutocompleteItem value='Lagos'>Lagos</AutocompleteItem>
            <AutocompleteItem value='Nigeria'>Nigeria</AutocompleteItem>
          </Autocomplete>

          <DatePicker labelPlacement='outside' label='Date' placeholder='Date'/>

          <Autocomplete labelPlacement='outside' label='Activities' placeholder='Night Clubs' className='text-[#656B89] sm:max-w-[152px]'>
            <AutocompleteItem value='Music'>Music</AutocompleteItem>
            <AutocompleteItem value='Luxury'>Luxury</AutocompleteItem>
          </Autocomplete>

          
          <Button color='primary' className='px-4 py-[28px] mt-3'>Search</Button>
          </div>


          </div>

      </div>

    </section>
  )
}

export default Hero