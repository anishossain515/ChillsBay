import './App.css'
import HomePage from './Components/Pages/Homepage/HomePage'
import WithNavFoot from './Components/Pages/WithNavFoot'
import { Routes,Route,Router,BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WithNavFoot><HomePage/></WithNavFoot>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
