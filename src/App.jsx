import './App.css'
import HomePage from './Components/Pages/Homepage/HomePage'
import EatDrink from './Components/Pages/EatDrink/EatDrink'
import WithNavFoot from './WithNavFoot'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentPage from './Components/Pages/Cart/Payment';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<WithNavFoot><HomePage/></WithNavFoot>}/>
        <Route path='/eatDrink' element={<WithNavFoot><EatDrink/></WithNavFoot>}/>
        <Route path='/payment' element={<WithNavFoot><PaymentPage/></WithNavFoot>}/>
      </Routes>
    </Router>
  )
}

export default App
