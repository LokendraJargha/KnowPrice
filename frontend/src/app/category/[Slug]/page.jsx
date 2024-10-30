import WidthWrapper from "@/components/common/WidthWrapper";
import { categoryQuery, productsQuery } from "@/lib/apiQuery";
import fetchData from "@/service/fetchData";
import React from "react";
import qs from "qs";
import CategoryProduct from "@/components/section/CategoryProduct";

const page = async ({ params }) => {
  const { categories } = await dataFetch(params?.Slug);

  return (
    <WidthWrapper>
      <CategoryProduct categories={categories} slug={params?.Slug} />
    </WidthWrapper>
  );
};

export default page;

const dataFetch = async (slug) => {
  const categoryQuery = qs.stringify(
    {
      populate: [
        "products.Price",
        "products.Thumbnail",
        "sub_categories",
        "products.KeySpecification.Displays.Icon",
        "products.KeySpecification.Cameras.Icon",
        "products.KeySpecification.Batteries.Icon",
        "products.KeySpecification.Storages.Icon",
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
    const categories = await fetchData("api/categories", categoryQuery);
    return {
      categories,
    };
  } catch (error) {
    return { error: error.message };
  }
};
