import React from 'react'
import { Autocomplete, AutocompleteItem, Button, DatePicker, DateRangePicker, TimeInput } from '@nextui-org/react'

function FindPlace() {
  return (
    <section>
        <div className='max-w-[1400px] mx-auto bg-[#FBFCFF] py-7 xl:px-0 md:px-20 px-10 sm:px-'>
           <h1 className='text-Dark_Indigo font-bold sm:text-3xl text-2xl sm:pb-0 pb-5'>Find the best places to eat and drink for any occasion</h1>

           <div className='py-2.5 flex flex-wrap items-center gap-2.5'>
           <Autocomplete labelPlacement='outside' label='Location' placeholder='Oshodi, VI' className='text-[#656B89]  sm:max-w-[152px]'>
            <AutocompleteItem value='Lagos'>Lagos</AutocompleteItem>
            <AutocompleteItem value='Nigeria'>Nigeria</AutocompleteItem>
          </Autocomplete>

          <DatePicker labelPlacement='outside' label='Date' placeholder='Date' className='sm:max-w-[152px]'/>

          <TimeInput label='Time' labelPlacement='outside' className='sm:max-w-[152px]'/>

          <Autocomplete labelPlacement='outside' label='Cuisine' placeholder='Chinese' className='text-[#656B89]  sm:max-w-[152px]'>
            <AutocompleteItem value='Italian'>Italian</AutocompleteItem>
            <AutocompleteItem value='Japanese'>Japanese</AutocompleteItem>
          </Autocomplete>

          <Autocomplete labelPlacement='outside' label='People' placeholder='2' className='text-[#656B89]  sm:max-w-[152px]'>
            <AutocompleteItem value='1'>1</AutocompleteItem>
            <AutocompleteItem value='3'>3</AutocompleteItem>
          </Autocomplete>

          <Button color='primary' className='px-4 py-[28px] mt-3 sm:w-[152px] w-full'>Search</Button>
           </div>
        </div>
    </section>
  )
}

export default FindPlace