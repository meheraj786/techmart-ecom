import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-[270px] mx-auto animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-[250px] bg-gray-200 rounded-sm relative overflow-hidden">
        <div className="absolute top-3 left-3 w-12 h-5 bg-gray-300 rounded-sm"></div>
        <div className="w-full h-full bg-gray-200"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gray-300"></div>
      </div>

      {/* Title Placeholder */}
      <div className="mt-4 mb-2 w-3/4 h-4 bg-gray-300 rounded"></div>

      {/* Price Placeholder */}
      <div className="flex gap-x-3 mt-2">
        <div className="w-16 h-4 bg-gray-300 rounded"></div>
        <div className="w-12 h-4 bg-gray-200 rounded"></div>
      </div>

      {/* Star Ratings */}
      <div className="flex gap-x-1 mt-3">
        {Array(5)
          .fill()
          .map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
          ))}
        <div className="w-8 h-3 bg-gray-200 rounded ml-2"></div>
      </div>

      {/* Color Dots */}
      <div className="flex mt-2 gap-x-1">
        {Array(3)
          .fill()
          .map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-300 rounded-full"></div>
          ))}
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
