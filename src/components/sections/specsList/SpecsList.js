import React, { useEffect } from "react";
import Container from "../../commons/Container";

import { useState } from "react";
import fetchAllProducts from "../../../service/fetchAllProducts";
import fetchProducts from "../../../service/fetchProducts";
import { useLocation } from "react-router-dom";
import SpecsData from "./SpecsData";
import KeyInfo from "./KeyInfo";
import ProductImage from "./ProductImage";

const SpecsList = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/")[2];
  const [currentImage, setCurrentImage] = useState(0);
  const { ProductsInfo, fetchProductsInfo } = fetchProducts();
  const { fetchAllProductsInfo } = fetchAllProducts();

  useEffect(() => {
    fetchProductsInfo(slug);
    fetchAllProductsInfo();
  }, [slug]);

  const specsList =
    ProductsInfo?.data?.[0]?.attributes?.Specification?.[0]?.specs_list;

  const imageUrl =
    ProductsInfo?.data?.[0]?.attributes?.product_image?.data?.map(
      (i) => i.attributes.url
    );

  const KeySpec = ProductsInfo?.data?.[0]?.attributes?.Key_Specs;

  const price = ProductsInfo?.data?.[0]?.attributes?.price;

  if (ProductsInfo?.length === 0)
    return <div className={` lg:w-1/2 w-full mr-4`}>loading...</div>;

  return (
    <div className="flex flex-col ">
      <Container>
        <div className="flex lg:flex-row flex-col w-full gap-5 py-7 ">
          <ProductImage
            imageUrl={imageUrl}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
          <KeyInfo
            ProductsInfo={ProductsInfo}
            KeySpec={KeySpec}
            price={price}
          />
        </div>
      </Container>
      <div className="bg-gray-50 py-5">
        <Container>
          <SpecsData ProductsInfo={ProductsInfo} specsList={specsList} />
        </Container>
      </div>
    </div>
  );
};

export default SpecsList;
