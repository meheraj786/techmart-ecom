import React,{ useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import FlashSale from './components/FlashSale/FlashSale'
import Categories from './components/categories/Categories'
import BestSelling from './components/bestSelling/BestSelling'
import OurProducts from './components/outProducts/OurProducts'
import SingleOfferBanner from './components/singleOfferBanner.jsx/SingleOfferBanner'

function App() {

  return (
    <>
    <Banner/>
    <FlashSale/>
    <Categories/>
    <BestSelling/>
    <SingleOfferBanner/>
    <OurProducts/>
    </>
  )
}

export default App
