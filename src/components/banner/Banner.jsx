import React from "react";
import Container from "../../layouts/Container";
import Flex from "../../layouts/Flex";
import { Link } from "react-router";
import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi";

const Banner = () => {
  const categories = [
    { name: "Woman's Fashion", hasArrow: false, link: "/" },
    { name: "Men's Fashion", hasArrow: false, link: "/" },
    { name: "Electronics", hasArrow: false, link: "/" },
    { name: "Home & Lifestyle", hasArrow: false, link: "/" },
    { name: "Medicine", hasArrow: false, link: "/" },
    { name: "Sports & Outdoor", hasArrow: false, link: "/" },
    { name: "Baby's & Toys", hasArrow: false, link: "/" },
    { name: "Groceries & Pets", hasArrow: false, link: "/" },
    { name: "Health & Beauty", hasArrow: false, link: "/" },
  ];
  return (
    <div className="font-body pt-10 pb-[140px]">
      <Container>
        <Flex className="items-start">
          <aside className="xl:w-[233px] relative hidden after:absolute after:content-[''] after:w-[1px] after:h-[384px] after:bg-black/30 after:-top-10 after:right-0 xl:block">
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.link}
                    className="flex items-center justify-between text-black text-base hover:text-gray-700"
                  >
                    {category.name}
                    {category.hasArrow && <span>&gt;</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className="flex-1 text-white">
            <Flex className="bg-black max-w-[892px] ms-auto">
              <div className="left pl-[54px] w-[320px] pt-[64px] pb-[47px]">
                <h2 className="!text-white py-5 !leading-[60px]">
                  Up to 10% off Voucher
                </h2>
                <button className="font-medium flex items-center gap-x-2">
                  <span className="border-b border-white">Shop Now </span>
                  <span>
                    <BiArrowToRight size={24} />
                  </span>
                </button>
              </div>

              <div className="right pb-[47px] pr-[100px]">
                <img src="" alt="" />
                img
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
