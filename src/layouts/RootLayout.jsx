import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { products } from '../utils/products'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  products
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout