import React from "react";
import { Scale } from "lucide-react";
import VariantSelector from "./VariantSelector";
import ShareSocial from "./common/ShareSocial";
import { Separator } from "./ui/separator";

const KeyInfo = ({ products }) => {
  const currentPageUrl = window?.location?.href;
  const { Title, ReleasedDate, Description, Price } =
    products?.data[0]?.attributes;

  return (
    <>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        {Title}
      </h1>
      <span className="sm:w-10/12 flex items-center justify-between py-2 text-sm ">
        <span> Released Date: {ReleasedDate}</span>
        <Separator orientation="vertical" className="h-5" />
        <span className="text-gray-600 ml-3">Find Store</span>
      </span>
      <p className="leading-relaxed py-3 text-base xl:block lg:hidden block">
        {Description}
      </p>
      <VariantSelector products={products} />
      <ShareSocial currentPageUrl={currentPageUrl} />
      <Separator className="my-4" />
    </>
  );
};

export default KeyInfo;
