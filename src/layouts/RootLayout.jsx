import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router'
import HelmetJs from './HelmetJs'

const RootLayout = () => {
  
  return (
    <div>
      <HelmetJs title="Techmart" desc="Great E-Commerce"/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout