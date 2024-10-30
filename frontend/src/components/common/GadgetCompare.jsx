import React from "react";

const GadgetCompare = ({ data }) => {
  const specifications = data?.[0]?.data?.[0]?.attributes?.Specification;

  return (
    <div className="text-wrap">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border md:p-2 p-1 text-left text-[12px] md:text-lg">
              Specifications
            </th>
            {data.map((product, index) => (
              <th
                key={index}
                className="border md:p-2 p-1 text-left text-[12px] md:text-lg"
              >
                {product?.data?.[0]?.attributes?.Title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specifications?.map((specKey, index) => (
            <React.Fragment key={index}>
              <tr>
                <td
                  colSpan={data.length + 1}
                  className="w-full bg-gray-100 md:p-2 p-1 md:font-bold text-[12px] md:text-base border"
                >
                  {specKey?.SpecificationName}
                </td>
              </tr>
              {specKey?.SpecificationList?.map((spec, specIndex) => (
                <tr key={spec?.id}>
                  <td className="border p-2 font-medium text-gray-700">
                    {spec?.SpecificationLabel}
                  </td>
                  {data.map((product, prodIndex) => {
                    const prodSpecs =
                      product?.data?.[0]?.attributes?.Specification;
                    const specValue =
                      prodSpecs?.[index]?.SpecificationList?.[specIndex]
                        ?.SpecificationValue;
                    return (
                      <td
                        key={prodIndex}
                        className="border p-2 text-[12px] md:text-base"
                      >
                        {specValue || "N/A"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GadgetCompare;
