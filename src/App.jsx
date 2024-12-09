import './App.css'
import Footer from './Components/Common/Footer'
import NavbarArea from './Components/Common/Navbar'
import Slider from './Components/Common/Slider/Slider'
import Hero from './Components/Pages/Homepage/Hero'
import Chilling from './Components/Pages/Homepage/Chilling'
import Mood from './Components/Pages/Homepage/Mood'
import ChillsBay from './Components/Pages/Homepage/ChillsBay'
import TopThings from './Components/Pages/Homepage/TopThings'

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
