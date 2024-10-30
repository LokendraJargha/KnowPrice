import React from "react";
import CompareInfo from "../CompareInfo";
import MobileCompare from "../common/MobileCompare";
import GadgetCompare from "../common/GadgetCompare";

const CompareSpecs = ({ productsData, slug }) => {
  const ifMobile =
    productsData?.[0]?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
      ?.Title;

  return (
    <div className="py-10">
      <CompareInfo productsData={productsData} slug={slug} />
      {ifMobile === "Mobiles" ? (
        <>
          <MobileCompare data={productsData} />
        </>
      ) : (
        <>
          <GadgetCompare data={productsData} />
        </>
      )}
    </div>
  );
};

export default CompareSpecs;
