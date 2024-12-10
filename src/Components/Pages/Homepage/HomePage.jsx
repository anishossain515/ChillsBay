import React from 'react'
import Hero from './Hero'
import Mood from './Mood'
import TopThings  from './TopThings'
import ChillsBay  from './ChillsBay'
import Chilling from './Chilling'
import Slider from '../../Common/Slider/Slider'
function HomePage() {
  return (
    <>
      <Hero/>
      <Mood/>
      <TopThings/>
      <ChillsBay/>
      <Slider/>
      <Chilling/>    
    </>
  )
}

export default HomePage