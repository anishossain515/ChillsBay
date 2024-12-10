import React from 'react'
import NavbarArea from '../Common/Navbar'
import Footer from '../Common/Footer'

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