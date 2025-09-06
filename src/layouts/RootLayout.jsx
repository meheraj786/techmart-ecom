import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { products } from '../utils/products'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  products
  return (
    <div>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default RootLayout