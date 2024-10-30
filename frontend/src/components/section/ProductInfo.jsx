"use client";
import React, { useState } from "react";
import KeySpecification from "../KeySpecification";
import ProductsImage from "../ProductsImage";
import KeyInfo from "../KeyInfo";

const ProductInfo = ({ products }) => {
  const { ProductImage } = products?.data[0]?.attributes;

  const imageUrl = ProductImage?.data?.map((image) => image?.attributes?.url);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 my-14 mx-auto">
        <div className="lg:w-11/12 w-full mx-auto flex lg:flex-row flex-col">
          <ProductsImage
            ProductImage={imageUrl}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-4 mt-6 lg:mt-0">
            <KeyInfo products={products} />
            <KeySpecification products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
