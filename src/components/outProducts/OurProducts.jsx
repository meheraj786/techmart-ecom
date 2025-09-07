import React from "react";
import Flex from "../../layouts/Flex";
import Container from "../../layouts/Container";
import { Link } from "react-router";
import { products } from "../../utils/products";
import ProductCard from "../productCard/ProductCard";
import Button from "../../layouts/Button";

const OurProducts = () => {
  return (
    <div className="font-body relative pt-[60px] pb-[60px]">
      <Container>
        <div className="text-primary mb-5 flex items-center justify-start ">
          <div className="w-5 h-10 rounded-sm bg-primary mr-4"></div>
          <span className="font-semibold">Our Products</span>
        </div>
        <Flex>
          <h3>Explore Our Products</h3>
          {/* <Button>
            View All
          </Button> */}
        </Flex>
        <Flex className="mb-[60px] gap-y-7 mt-[60px]">
          {products.slice(0, 8).map((product) => (
            <ProductCard product={product} />
          ))}
        </Flex>
        <div className="text-center">
          <Button>View All Products</Button>
        </div>
      </Container>
    </div>
  );
};

export default OurProducts;
