import React from 'react'
import Container from '../../layouts/Container'
import CountdownTimer from '../countdowntimer/CountdownTimer'
import Flex from '../../layouts/Flex'
import { products } from '../../utils/products'
import { BiSolidStar, BiStar } from 'react-icons/bi'
import ProductCard from '../productCard/ProductCard'
import Button from '../../layouts/Button'

const FlashSale = () => {
  return (
    <div className='font-body relative pb-[60px]'>
      <Container>
        <div className='text-primary  flex items-center justify-start '>
        <div className='w-5 h-10 rounded-sm bg-primary mr-4'></div>
    <span className='font-semibold'>Today's</span>
        </div>
        <Flex>
          <h3>Flash Sales</h3>
          <CountdownTimer/>
        </Flex>
        <Flex className="mb-[60px]">
        {
          products.filter((p)=>p.status=="flashSale").slice(0,4).map((product)=>(
            <ProductCard product={product}/>
          ))
        }
        </Flex>
        <div className='text-center'>
        <Button>View All Products</Button>

        </div>
<div className='w-[1170px] h-[1px] mx-auto absolute bottom-0 bg-black/30'></div>

      </Container>
    </div>
  )
}

export default FlashSale