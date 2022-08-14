import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Elements/Footer'
import Header from './Elements/Header'

const MainC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainC
