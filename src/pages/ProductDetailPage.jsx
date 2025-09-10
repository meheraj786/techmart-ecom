import React, { useState } from "react";
import { FaStar, FaTruck, FaUndo } from "react-icons/fa";
import Container from "../layouts/Container";
import Button from "../layouts/Button";
import { BiHeart, BiSolidStar } from "react-icons/bi";
import { products } from "../utils/products";
import Flex from "../layouts/Flex";
import { useParams } from "react-router";
import ProductCard from "../components/productCard/ProductCard";

const ProductDetailPage = () => {
  const {id}=useParams()
  const product = products.find((p) => p.id == id);

  const star = [];
  const noStar = [1, 2, 3, 4, 5];
  for (let i = 0; i < product.stars; i++) {
    star.push(i);
    noStar.pop();
  }

  const relatedProducts=products.filter((p)=>{
    if (p.category==product.category && p.id!==product.id) {
      return p
    }
  })

  return (
    <Container>
      <div className="p-6 pt-[130px] pb-[140px] font-body grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Images */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 w-20">
            <img
              src={product.image}
              className=" bg-[#F5F5F5] rounded-lg cursor-pointer hover:scale-105 transition"
            />
          </div>
          <div className="flex-1">
            <img
              src={product.image}
              alt="main"
              className="w-full bg-[#F5F5F5] rounded-xl  object-cover"
            />
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="flex flex-col">
          {/* Title */}
          <h3 className="">{product.title}</h3>

          {/* Rating & Stock */}
          <Flex className="justify-start my-2 gap-x-1">
            {star.map(() => (
              <BiSolidStar size={24} color="#FFAD33" />
            ))}
            {noStar.map(() => (
              <BiSolidStar size={24} className="text-black/25" />
            ))} 
            <span className="text-black/50 text-[18px] ml-3 font-semibold">
              ({product.rating} Reviews)
            </span> <span className="mx-3 text-gray-400">|</span> {
              product.isStock ? <span className="text-green-400 font-semibold">In Stock</span> : <span className="text-red-400 font-semibold">Out of Stock</span>
            }
          </Flex>

          {/* Price */}
          <Flex className="justify-start gap-x-[12px]">
            {product.offerprice && product.offerprice > 0 ? (
              <>
                <span className="text-primary text-xl font-medium">
                  ${product.offerprice}
                </span>
                <span className="line-through text-xl text-black/50 font-medium">
                  ${product.mainprice}
                </span>
              </>
            ) : (
              <span className="text-primary text-xl font-medium">
                ${product.mainprice}
              </span>
            )}
          </Flex>

          {/* Description */}
          <p className="!text-gray-600 !text-[14px] mt-3">{product.description}</p>

          {/* Colors */}
          {product.colors && (
            <div className="mt-5">
              <h4 className="font-medium mb-2">Colours:</h4>
              <div className="flex gap-1">
                {product?.colors?.map((color, i) => (
                  <span
                    key={i}
                    style={{ backgroundColor: color }}
                    className="w-5 h-5 mt-2 rounded-full inline-block"
                  ></span>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          <div className="mt-4">
            <h4 className="font-medium mb-2">Size:</h4>
            <div className="flex gap-3 flex-wrap">
              {!product.sizes ? (
                <p>One Size</p>
              ) : (
                <>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-1 border rounded-md transition`}
                    >
                      {size}
                    </button>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-2 hover:bg-primary hover:text-white cursor-pointer transition">
                -
              </button>
              <span className="px-4">1</span>
              <button className="px-3 py-2 hover:bg-primary hover:text-white cursor-pointer transition">
                +
              </button>
            </div>
            {
              product.isStock ?             <Button>
              Buy Now
            </Button> :  <Button className="bg-primary/60">
              Out of Stock
            </Button>
            }

            <button className="border px-4 py-4 rounded-lg hover:bg-gray-100 transition">
              <BiHeart size={24} />
            </button>
          </div>

          {/* Delivery & Return Info */}
          <div className="mt-6 space-y-3 text-gray-600">
            <p className="flex items-center gap-2">
              <FaTruck className="text-gray-500" /> Free Delivery
            </p>
            <p className="flex items-center gap-2">
              <FaUndo className="text-gray-500" /> Return Delivery (Free 30 Days
              Delivery Returns. Details)
            </p>
          </div>
        </div>
      </div>
          <div className='font-body relative pb-[60px]'>
      <Container>
        <div className='text-primary flex items-center justify-start '>
        <div className='w-5 h-10 rounded-sm bg-primary mr-4'></div>
    <span className='font-semibold'>Related Items</span>
        </div>
        <Flex>
          {/* <Button>
            View All
          </Button> */}
        </Flex>
        <Flex className="mb-[60px] justify-start gap-x-[30px] mt-[60px]">
        {
          relatedProducts.slice(0,4).map((product)=>(
            <ProductCard product={product}/>
          ))
        }
        </Flex>
        <div className='text-center'>
        <Button>View All Products</Button>

        </div>

      </Container>
    </div>
    </Container>
  );
};

export default ProductDetailPage;
