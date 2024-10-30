import Link from "next/link";
import React from "react";

const CompareInfo = ({ productsData }) => {
  return (
    <div className="">
      <span className="flex gap-2 text-gray-900 h-20 text-lg title-font font-medium mb-2">
        {productsData?.map((product, index) => (
          <React.Fragment key={index}>
            <h1>{product?.data?.[0]?.attributes?.Title}</h1>
            {index < productsData.length - 1 && <span>vs</span>}
          </React.Fragment>
        ))}
      </span>
      <div className="flex flex-col items-end md:ml-40 md:px-10">
        <div className="w-full inline-flex flex-shrink-0 ">
          {productsData?.map((item, index) => {
            const { Slug, Thumbnail } = item?.data?.[0]?.attributes;
            return (
              <Link
                key={index}
                className="object-cover object-center rounded sm:w-52 sm:h-52 h-40 w-40 mx-auto"
                href={`/product/${Slug}`}
              >
                <img
                  alt="Product"
                  src={`${Thumbnail?.data?.attributes?.url}`}
                />
              </Link>
            );
          })}
        </div>
        <span className="w-full inline-flex flex-shrink-0 py-5">
          {productsData?.map((item, index) => {
            const { Slug, Price } = item?.data?.[0]?.attributes;
            return (
              <Link
                href={`/product/${Slug}`}
                key={index}
                className="flex flex-col text-center md:px-10 mx-auto"
              >
                <span className="text-gray-900 text-sm md:text-lg title-font font-medium ">
                  Starting From
                </span>
                <span className="leading-relaxed text-base">
                  {Price?.[0]?.Price || "N/A"}
                </span>
              </Link>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default CompareInfo;
