"use client";
import React, { useState } from "react";
import CategoryProductCards from "../common/CategoryProductCards";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const SubCategoryProduct = ({ subCategories, slug, categories }) => {
  const [visible, setVisible] = useState(16);
  const { sub_categories } = categories?.data?.[0]?.attributes;
  const { products, Title, Description } = subCategories?.data?.[0]?.attributes;
  return (
    <div className="py-10">
      <div className="bg-gray-100 rounded-sm py-4">
        <h1 className="px-5 py-3 sm:text-2xl text-xl font-semibold title-font">
          {Title}
        </h1>
        <p className="px-5 text-sm md:text-base">{Description}</p>
      </div>
      <div className="flex items-center py-10 w-full">
        <h2 className="px-5 sm:text-xl text-lg font-semibold title-font">
          {Title} Price List
        </h2>

        <span className="w-1/4">
          <CategorySelect categories={sub_categories} slug={slug} />
        </span>
      </div>
      <div className="flex  items-center  border-b-2 border-gray-100"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-3">
        {products?.data?.slice(0, visible)?.map((item, index) => (
          <div className="py-3 px-2" key={index}>
            <CategoryProductCards products={item} />
          </div>
        ))}
      </div>
      <div>
        {products?.data?.length > visible && (
          <div
            onClick={() => {
              setVisible(visible + 20);
            }}
            className="w-1/3 my-3 py-2 cursor-pointer border mx-auto"
          >
            <h1 className="flex items-center justify-center text-xs sm:text-base">
              LOAD MORE..
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategoryProduct;

const CategorySelect = ({ categories, slug }) => {
  const router = useRouter();

  const handleChange = (slugs) => {
    router.push(`/category/${slug}/${slugs}`);
  };
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={"Select Category"} />
      </SelectTrigger>
      <SelectContent>
        {categories?.data?.map((category) => (
          <SelectItem
            key={category?.id}
            value={`${category?.attributes?.Slug}`}
          >
            {category?.attributes?.Title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
