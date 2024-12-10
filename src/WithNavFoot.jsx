import React from 'react'
import NavbarArea from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'

function WithNavFoot({children}) {
  return (
    <>
      <NavbarArea/>
       {children}
      <Footer/> 
    </>
  )
}

export default WithNavFoot