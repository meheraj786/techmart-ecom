import React from "react";
import Container from "../layouts/Container";
import { products } from "../utils/products";
import Flex from "../layouts/Flex";
import ProductCard from "../components/productCard/ProductCard";
import HelmetJs from "../layouts/HelmetJs";

const WishList = () => {
  return (
    <div className="pt-20 pb-30">
      <HelmetJs title="Techmart - Wish List" desc="Great E-Commerce"/>
      <Container>
        <Flex>
          <h3>Wish List</h3>
          <button className="font-semibold px-4 py-2 border rounded-sm">Move All To Bag</button>
        </Flex>
        <Flex className="mb-[60px] items-start mt-[60px]">
          {products
            .filter((p) => p.status == "bestSelling")
            .slice(0, 4)
            .map((product) => (
              <ProductCard product={product} />
            ))}
        </Flex>
      </Container>
    </div>
  );
};

export default WishList;
