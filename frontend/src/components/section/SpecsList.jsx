import React from "react";
import WidthWrapper from "../common/WidthWrapper";
import RichTextProducts from "../common/RichTextProducts";
import Specification from "../Specification";
import RelatedProduct from "./RelatedProduct";
import { productsQuery } from "@/lib/apiQuery";
import { Separator } from "../ui/separator";

const SpecsList = ({ products, allProducts }) => {
  const { ProductDescription } = products?.data[0]?.attributes;

  return (
    <WidthWrapper className={"w-full md:w-3/4 py-5"}>
      <h1 className="py-4 sm:text-xl text-lg font-semibold title-font">
        Description
      </h1>
      <RichTextProducts
        content={ProductDescription}
        initialDisplayParagraphs={3}
      />
      <Separator className="my-8" />
      <Specification products={products} />
      <Separator className="my-6" />
      <RelatedProduct product={products} allProducts={allProducts} />
    </WidthWrapper>
  );
};

export default SpecsList;
