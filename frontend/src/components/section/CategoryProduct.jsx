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
import { Separator } from "../ui/separator";

const CategoryProduct = ({ categories, slug }) => {
  const [visible, setVisible] = useState(16);
  const { products, Title, Description, sub_categories } =
    categories?.data?.[0]?.attributes;
  console.log("check", products?.data?.length);
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
      <Separator />
      {products?.data?.length <= 0 ? (
        <EmptyProductMessage />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 py-3 ">
          {products?.data?.slice(0, visible)?.map((item, index) => (
            <div className="py-3 px-2" key={index}>
              <CategoryProductCards products={item} />
            </div>
          ))}
        </div>
      )}

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

export default CategoryProduct;

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

const EmptyProductMessage = () => {
  return (
    <div className=" px-5 py-10">
      <div className="text-center space-x-4 py-20 bg-customBg bg-white bg-opacity-50 ">
        <h1 className="text-2xl font-extrabold text-customPurple py-8">
          Oops! This category is currently empty.
        </h1>
        <p className="text-sm font-light">
          It seems we haven't added any products to this category yet. Please
          check back later or explore other categories.
        </p>
      </div>
    </div>
  );
};
