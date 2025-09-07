import React,{ useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import FlashSale from './components/FlashSale/FlashSale'
import Categories from './components/categories/Categories'

function App() {

  return (
    <>
    <Banner/>
    <FlashSale/>
    <Categories/>
    </>
  )
}

export default App
