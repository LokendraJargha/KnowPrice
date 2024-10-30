"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const VariantSelector = ({ products }) => {
  const { Price } = products?.data[0]?.attributes;
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");

  useEffect(() => {
    if (Price && Price.length > 0) {
      setSelectedPrice(Price[0]?.Price);
      setSelectedVariant(Price[0]?.Variant);
    }
  }, [Price]);

  const handleVariantChange = (value) => {
    const selectedVariant = Price.find((item) => item.Variant === value);
    setSelectedPrice(selectedVariant?.Price || "");
    setSelectedVariant(value);
  };

  return (
    <div className="flex flex-wrap items-center py-3 gap-3">
      <span className="my-auto ">Variants:</span>
      <Select
        className="outline-none "
        onValueChange={handleVariantChange}
        defaultValue={selectedVariant}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={Price?.[0]?.Variant} />
        </SelectTrigger>
        <SelectContent>
          {Price?.map((item) => (
            <SelectItem key={item?.id} value={item.Variant}>
              {item?.Variant}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="title-font font-medium text-2xl text-gray-900">
        {selectedPrice}
      </span>
    </div>
  );
};

export default VariantSelector;
