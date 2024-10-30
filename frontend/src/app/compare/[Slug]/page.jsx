"use client";

import WidthWrapper from "@/components/common/WidthWrapper";
import React, { useEffect, useState } from "react";
import qs from "qs";
import fetchData from "@/service/fetchData";
import CompareSpecs from "@/components/section/CompareSpecs";

const Page = ({ params }) => {
  const [productsData, setProductsData] = useState([]);
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const slug = params.Slug || "";
      const slugArr = slug.split("-vs-");
      setSlug(slugArr);
      try {
        const products = await Promise.all(
          slugArr.map(async (slug) => {
            const query = qs.stringify(
              {
                populate: [
                  "Price",
                  "categories",
                  "Specification.SpecificationList",
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
            const data = await fetchData("api/products", query);
            return data;
          })
        );
        setProductsData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [params]);

  return (
    <WidthWrapper>
      <CompareSpecs productsData={productsData} slug={slug} />
    </WidthWrapper>
  );
};

export default Page;
