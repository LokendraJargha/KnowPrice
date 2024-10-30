import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const ProductsImage = ({ ProductImage, currentImage, setCurrentImage }) => {
  return (
    <div className="lg:w-1/2 w-full mx-auto flex flex-col gap-4">
      {ProductImage?.length > 0 && (
        <img
          alt="Mobile price in nepal"
          className="w-full h-[300px] sm:h-[500px] object-cover object-center rounded"
          src={`${ProductImage[currentImage]}`}
        />
      )}
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <div className="flex h-24 gap-10">
          {ProductImage?.map((item, index) => (
            <img
              key={index}
              alt="Mobile price in nepal"
              className="w-full h-full object-cover object-center border-[0.5px] border-gray-200 rounded"
              src={`${item}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ProductsImage;
