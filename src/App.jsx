import './App.css'
import Chilling from './Components/Chilling'
import ChillsBay from './Components/ChillsBay'
import Footer from './Components/Common/Footer'
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
     <Chilling/>
     <Footer/>
    </>
  )
}

export default App
