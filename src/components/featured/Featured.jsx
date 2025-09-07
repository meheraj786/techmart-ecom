import React from "react";
import Container from "../../layouts/Container";
import Flex from "../../layouts/Flex";

const Featured = () => {
  return (
    <div className="font-body pb-[140px]">
      <Container>
        <div className="text-primary mb-5 flex items-center justify-start ">
          <div className="w-5 h-10 rounded-sm bg-primary mr-4"></div>
          <span className="font-semibold">Featured</span>
        </div>
        <Flex className="mb-[60px]">
          <h3>New Arrival</h3>
        </Flex>
        <div className="grid grid-cols-2 gap-x-[30px]">
          <div className="bg-black relative h-[600px]">
            <div className="absolute bottom-8 left-8">
              <h4 className="text-2xl text-white font-bold mb-3">
                PlayStation 5
              </h4>
              <p className="text-gray-300 text-[14px] mb-4 leading-relaxed">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="text-white underline cursor-pointer hover:text-gray-300 transition-colors">
                Shop Now
              </p>
            </div>
          </div>
          <div className=" h-[600px]">
            <div className="grid grid-rows-2 gap-y-[30px]">
              <div className="bg-black relative h-[285px]">
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl text-white font-bold mb-3">
                    PlayStation 5
                  </h4>
                  <p className="text-gray-300 mb-4 text-[14px] leading-relaxed">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <p className="text-white text-[16px] underline cursor-pointer hover:text-gray-300 transition-colors">
                    Shop Now
                  </p>
                </div>
              </div>
              <div className=" h-[285px]">
                <div className="grid grid-cols-2 gap-x-[30px]">
                  <div className="bg-black relative h-[285px]">
                    <div className="absolute bottom-8 left-8">
                      <h4 className="text-2xl text-white font-bold mb-3">
                        PlayStation 5
                      </h4>
                      <p className="text-gray-300 text-[14px] mb-4 leading-relaxed">
                        Black and White version of the PS5 coming out on sale.
                      </p>
                      <p className="text-white underline cursor-pointer hover:text-gray-300 transition-colors">
                        Shop Now
                      </p>
                    </div>
                  </div>
                  <div className="bg-black relative h-[285px]">
                    <div className="absolute bottom-8 left-8">
                      <h4 className="text-2xl text-white font-bold mb-3">
                        PlayStation 5
                      </h4>
                      <p className="text-gray-300 text-[14px] mb-4 leading-relaxed">
                        Black and White version of the PS5 coming out on sale.
                      </p>
                      <p className="text-white underline cursor-pointer hover:text-gray-300 transition-colors">
                        Shop Now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
