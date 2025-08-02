import React from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Drinks from '../components/drinks'
import Footer from '../components/Footer'
import ScrollUp from '../components/BackToTopButton'
import { Outlet } from 'react-router-dom'

export const rootLayout = () => {
  return (
    <>
     <Navbar/>
     <Header/>
     <ScrollUp/>
     <Drinks/>
     <Footer/>
     <Outlet/>
    </>
  )
}
export default rootLayout