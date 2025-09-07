import React from 'react'
import Container from '../../layouts/Container'
import CountdownTimer from '../countdowntimer/CountdownTimer'
import Flex from '../../layouts/Flex'
import { products } from '../../utils/products'
import { BiSolidStar, BiStar } from 'react-icons/bi'

const FlashSale = () => {
  return (
    <div className='font-body'>
      <Container>
        <div className='text-primary mb-6 flex items-center justify-start '>
        <div className='w-5 h-10 rounded-sm bg-primary mr-4'></div>
    <span className='font-semibold'>Today's</span>
        </div>
        <Flex>
          <h3>Flash Sales</h3>
          <CountdownTimer/>
        </Flex>
        {/* {
          products.map((product)=>(
            <p>{product.title}</p>
          ))
        } */}
        <div className='w-[270px]'>
          <div className='w-full h-[250px] bg-[#F5F5F5] rounded-sm'></div>
          <p className='font-medium mt-4 mb-2'>Product Title</p>
          <Flex className="justify-start gap-x-[12px]">
            <span className='text-primary font-medium'>$120</span>
            <span className='line-through text-black/50 font-medium'>$220</span>
          </Flex>
          <Flex className="justify-start mt-2 gap-x-1">
          <BiSolidStar color='#FFAD33'/>
          <BiSolidStar color='#FFAD33'/>
          <BiSolidStar color='#FFAD33'/>
          <BiSolidStar color='#FFAD33'/>
          <span>(99)</span>
          </Flex>
        </div>
      </Container>
    </div>
  )
}

export default FlashSale