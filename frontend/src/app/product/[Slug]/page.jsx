import qs from "qs";
import fetchData from "@/service/fetchData";
import React from "react";
import WidthWrapper from "@/components/common/WidthWrapper";
import SpecsList from "@/components/section/SpecsList";
import ProductInfo from "@/components/section/ProductInfo";
import { productsQuery } from "@/lib/apiQuery";

const page = async ({ params }) => {
  const { products, allProducts } = await dataFetch(params.Slug);

  return (
    <WidthWrapper>
      <ProductInfo products={products} />
      <SpecsList products={products} allProducts={allProducts} />
    </WidthWrapper>
  );
};

export default page;

const dataFetch = async (slug) => {
  const productQuerys = qs.stringify(
    {
      populate: [
        "Price",
        "categories",
        "sub_categories",
        "Specification.SpecificationList",
        "KeySpecification.Displays.Icon",
        "KeySpecification.Cameras.Icon",
        "KeySpecification.Batteries.Icon",
        "KeySpecification.Storages.Icon",
        "ProductInfo",
        "MobileSpecification.BODY",
        "MobileSpecification.DISPLAY",
        "MobileSpecification.PERFORMANCE",
        "MobileSpecification.MEMORY",
        "MobileSpecification.CONNECTIVITY",
        "MobileSpecification.MEDIA",
        "MobileSpecification.SENSORS",
        "MobileSpecification.BATTERY",
        "MobileSpecification.FRONT_CAMERA",
        "MobileSpecification.MAIN_CAMERA",
        "ProductImage",
        "Thumbnail",
      ],
      filters: {
        Slug: slug,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  try {
    const products = await fetchData("api/products", productQuerys);
    const allProducts = await fetchData("api/products", productsQuery);
    return { products, allProducts };
  } catch (error) {
    return { error: error.message };
  }
};
