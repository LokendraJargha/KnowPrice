"use client";
import Link from "next/link";
import React from "react";
import KeySpecification from "../KeySpecification";
import { specItems } from "@/constant";

const CategoryProductCards = ({ products }) => {
  const { Title, Thumbnail, Price, Slug } = products?.attributes;
  const price = Price?.[0]?.Price;
  const imageUrl = `${Thumbnail?.data?.attributes?.url}`;
  const keySpecs = products?.attributes?.KeySpecification?.[0];

  return (
    <section
      className={`text-gray-600 body-font w-full  border-[0.5px] rounded-md shadow-sm py-3 sm:text-start text-center`}
    >
      <Link href={`/product/${Slug}`}>
        <div className="w-full gap-2 flex sm:flex-row flex-col items-center px-2 sm:mb-0 mb-6">
          <div
            className={`rounded-lg sm:max-w-lg md:h-60 md:w-64 size-40  overflow-hidden`}
          >
            <img
              alt="content"
              className="object-contain object-center h-full w-full"
              src={`${imageUrl}`}
            />
          </div>
          <div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-3">
              {Title}
            </h2>
            <p className="text-lg font-semibold leading-relaxed mt-2">
              {price}
            </p>
            <section className="text-gray-600 body-font w-full py-3 md:text-start text-center">
              <div className="flex flex-col gap-3 px-4 sm:px-0 w-full ">
                {specItems?.map((spec, index) => {
                  const item = keySpecs[spec.key] || {};
                  const iconUrl = item?.[spec.iconKey]?.data?.attributes?.url;
                  return (
                    <div key={index} className=" flex gap-3  items-center ">
                      {iconUrl && (
                        <img className="size-5" src={iconUrl} alt={spec.key} />
                      )}
                      <div>
                        <p className="leading-relaxed text-sm ">
                          {item?.[spec.secondaryKey]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default CategoryProductCards;
