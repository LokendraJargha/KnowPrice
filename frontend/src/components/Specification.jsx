import React from "react";
import GadgetSpecifications from "./GadgetSpecifications";
import MobileSpecifications from "./section/MobileSpecifications";

const Specification = ({ products }) => {
  const { Title, categories, MobileSpecification, Specification } =
    products?.data[0]?.attributes;
  const ifMobile = categories?.data[0]?.attributes?.Title;

  return (
    <div className="py-5">
      <h2 className="py-4 sm:text-xl text-lg font-semibold title-font">
        {Title} Specifications
      </h2>
      {ifMobile === "Mobiles" ? (
        <>
          <MobileSpecifications productDetails={MobileSpecification} />
        </>
      ) : (
        <>
          <GadgetSpecifications productDetails={Specification} />
        </>
      )}
    </div>
  );
};

export default Specification;
