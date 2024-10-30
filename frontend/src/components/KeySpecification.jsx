import { specItems } from "@/constant";
import { Aperture, Battery, MemoryStick, Smartphone } from "lucide-react";
import React from "react";

const KeySpecification = ({ products }) => {
  const keySpecs = products?.data[0]?.attributes?.KeySpecification?.[0] || {};

  return (
    <section>
      <h2 className="py-5 sm:text-xl text-base font-semibold title-font ">
        Key Specification
      </h2>
      <section className="text-gray-600 body-font ">
        <div className="flex flex-wrap items-center justify-between w-full text-center">
          {specItems?.map((spec, index) => {
            const item = keySpecs[spec.key] || {};
            const iconUrl = item?.[spec.iconKey]?.data?.attributes?.url;
            return (
              <div
                key={index}
                className="xl:w-1/4 lg:w-1/2 w-32 flex flex-col items-center "
              >
                {iconUrl && (
                  <img className="size-6" src={iconUrl} alt={spec.key} />
                )}
                <h2 className="text-base sm:text-lg text-gray-900 font-medium title-font py-2">
                  {item?.[spec.primaryKey]}
                </h2>
                <p className="leading-relaxed text-sm mb-4 h-10">
                  {item?.[spec.secondaryKey]}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default KeySpecification;
