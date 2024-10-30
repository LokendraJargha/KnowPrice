import fetchData from "@/service/fetchData";
import React from "react";
import qs from "qs";
import WidthWrapper from "@/components/common/WidthWrapper";
import SubCategoryProduct from "@/components/section/SubCategoryProduct";
import CategoryProduct from "@/components/section/CategoryProduct";

const page = async ({ params }) => {
  const { subCategories, categories } = await dataFetch(
    params?.Slugs,
    params.Slug
  );

  return (
    <WidthWrapper>
      <SubCategoryProduct
        subCategories={subCategories}
        categories={categories}
        slug={params.Slug}
      />
    </WidthWrapper>
  );
};

export default page;

const dataFetch = async (slug, slugs) => {
  const subCategoryQuery = qs.stringify(
    {
      populate: [
        "products.Price",
        "products.Thumbnail",
        "sub_categories",
        "products.KeySpecification.Displays.Icon",
        "products.KeySpecification.Cameras.Icon",
        "products.KeySpecification.Batteries.Icon",
        "products.KeySpecification.Storages.Icon",
        "categories",
      ],
      filters: {
        Slug: slug,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const categoryQuery = qs.stringify(
    {
      populate: ["sub_categories"],
      filters: {
        Slug: slugs,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  try {
    const subCategories = await fetchData(
      "api/sub-categories",
      subCategoryQuery
    );
    const categories = await fetchData("api/categories", categoryQuery);

    return {
      subCategories,
      categories,
    };
  } catch (error) {
    return { error: error.message };
  }
};
