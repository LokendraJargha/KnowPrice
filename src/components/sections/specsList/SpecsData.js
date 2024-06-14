import React from "react";
import RelatedProduct from "../relatedProduct/RelatedProduct";
import RichTextBlock from "../../commons/RichTextBlock";
import LimitContent from "../../commons/LimitContent";

const SpecsData = ({ ProductsInfo, specsList }) => {
  const content = ProductsInfo?.data?.[0]?.attributes?.description || ""
  const category =
    ProductsInfo?.data?.[0]?.attributes?.categories?.data[0]?.attributes
      ?.title || "";
  const cpu =
    ProductsInfo?.data?.[0]?.attributes?.Key_Specs?.[0]?.CPU?.key || "";
  // console.log("content", ProductsInfo?.data?.[0]?.attributes);
  return (
    <div className="px-0 sm:px-14 md:px-24 lg:px-28 xl:px-36 ">
      <div className="flex flex-col justify-center my-5 ">
        {ProductsInfo && (
          <div className="">
            <h1 className="text-xl text-customTextBlack font-medium py-5">
              Description
            </h1>
            <RichTextBlock
              content={content}
              limit={300}
              show={true}
              type={"productPage"}
            />
          </div>
        )}
        <hr class="h-px my-5  w-full bg-slate-400 border-0 " />
        <div className="mb-5">
          <h1 className="text-xl text-customTextBlack font-medium py-5">
            Key Specification
          </h1>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              {specsList &&
                specsList?.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"
                  >
                    <dt className="font-medium text-gray-900">{item?.title}</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {item?.specs}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
        <hr class="h-px my-4  w-full bg-slate-400 border-0 " />
      </div>
      <RelatedProduct categories={category} cpu={cpu} />
    </div>
  );
};

export default SpecsData;
