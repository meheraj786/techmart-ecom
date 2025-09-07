import React,{ useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import FlashSale from './components/FlashSale/FlashSale'
import Categories from './components/categories/Categories'
import BestSelling from './components/bestSelling/BestSelling'

function App() {

  return (
    <>
    <Banner/>
    <FlashSale/>
    <Categories/>
    <BestSelling/>
    </>
  )
}

export default App
