import './App.css'
import ChillsBay from './Components/ChillsBay'
import NavbarArea from './Components/Common/Navbar'
import Slider from './Components/Common/Slider/Slider'
import Hero from './Components/hero'
import Mood from './Components/Mood'
import TopThings from './Components/TopThings'

function App() {

  return (
    <>
     <NavbarArea/>
     <Hero/>
     <Mood/>
     <TopThings/>
     <ChillsBay/>
     <Slider/>
    </>
  )
}

export default App
