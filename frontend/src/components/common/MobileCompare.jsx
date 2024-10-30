import { extractSpecs, formatKey, renderSpecValue } from "@/lib/fromateSpecs";
import React from "react";

const MobileCompare = ({ data }) => {
  const products = data.map((item) => extractSpecs(item.data[0]));

  let allSpecsKeys = [
    ...new Set(
      products.reduce((acc, product) => {
        return [...acc, ...Object.keys(product.specs)];
      }, [])
    ),
  ];

  allSpecsKeys = allSpecsKeys.reverse();

  return (
    <div className=" text-wrap">
      <table className=" w-full border-collapse">
        <thead>
          <tr>
            <th className="border md:p-2 p-1  text-left text-[12px] md:text-lg">
              Specifications
            </th>
            {products.map((product, index) => (
              <th
                key={index}
                className="border md:p-2 p-1 text-left text-[12px] md:text-lg"
              >
                {product.Title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allSpecsKeys.map((specKey, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="bg-gray-100 md:p-2 p-1 md:font-bold text-[12px] border-l md:text-base">
                  {specKey}
                </td>
                {products.map((product, idx) => (
                  <td key={idx} className="md:p-2 p-1 bg-gray-100 "></td>
                ))}
              </tr>
              {typeof products[0].specs[specKey] === "object" &&
                Object.keys(products[0].specs[specKey] || {}).map(
                  (nestedKey, nestedIndex) => (
                    <tr key={`${index}-${nestedIndex}`}>
                      <td className="border md:p-2 p-1 md:pl-4 text-[12px] md:text-base font-semibold border-r">
                        {formatKey(nestedKey)}
                      </td>
                      {products.map((product, idx) => (
                        <td
                          key={idx}
                          className="border p-2 text-[12px] md:text-base"
                        >
                          {renderSpecValue(
                            product.specs[specKey]?.[nestedKey],
                            true
                          )}
                        </td>
                      ))}
                    </tr>
                  )
                )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MobileCompare;
