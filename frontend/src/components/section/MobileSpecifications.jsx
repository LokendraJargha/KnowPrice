import { renderSpecs } from "@/lib/renderSpecs";
import React from "react";

const MobileSpecifications = ({ productDetails }) => {
  return <div className="p-4">{renderSpecs(productDetails)}</div>;
};

export default MobileSpecifications;
