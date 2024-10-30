import React from "react";

const GadgetSpecifications = ({ productDetails }) => {
  return (
    <>
      {productDetails?.map((item, index) => (
        <div key={index} className="my-3">
          <h2
            className="font-semibold md:text-lg text-sm bg-gray-100 p-2
"
          >
            {item?.SpecificationName}
          </h2>
          {item?.SpecificationList?.map((spec) => (
            <div key={spec?.id} className="flex py-2 px-2 md:text-base text-sm">
              <span className="font-medium text-gray-700 w-4/6 md:w-1/4">
                {spec?.SpecificationLabel}
              </span>
              <span className="text-gray-900 w-full px-1">
                {spec?.SpecificationValue}
              </span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default GadgetSpecifications;
