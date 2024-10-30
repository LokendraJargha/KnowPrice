"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import WidthWrapper from "../common/WidthWrapper";
import { Button } from "../ui/button";
import useCompareField from "@/customHook/useCompareField";

import { Search, X } from "lucide-react";
import { CiCirclePlus } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";
import { useDebouncedCallback } from "use-debounce";
import qs from "qs";
import fetchData from "@/service/fetchData";
import useClickOutside from "@/customHook/useClickOutside";
import useCompareStore from "@/customHook/useCompareStore";
import CategorySelect from "../common/CategorySelect";

const CompareGadget = ({ categories }) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const router = useRouter();
  const { inputFields, handleAdd, handleRemove, handleInputChange } =
    useCompareField();
  const { removeGadget, updateGadget, selectedGadgets } = useCompareStore();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [inputSuggestions, setInputSuggestions] = useState(
    inputFields.map(() => [])
  );
  const dropdownRef = useClickOutside(() =>
    setInputSuggestions(inputFields.map(() => []))
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setProducts([]);
    setInputSuggestions(inputFields.map(() => []));
  };

  const fetchProductData = useDebouncedCallback(async (index, value) => {
    if (selectedCategory && value) {
      const query = qs.stringify(
        {
          populate: [
            "Price",
            "categories",
            "sub_categories",
            "Specification.SpecificationList",
            "KeySpecification.Displays.Icon",
            "KeySpecification.Cameras.Icon",
            "KeySpecification.Batteries.Icon",
            "KeySpecification.Storages.Icon",
            "ProductInfo",
            "MobileSpecification.BODY",
            "MobileSpecification.DISPLAY",
            "MobileSpecification.PERFORMANCE",
            "MobileSpecification.MEMORY",
            "MobileSpecification.CONNECTIVITY",
            "MobileSpecification.MEDIA",
            "MobileSpecification.SENSORS",
            "MobileSpecification.BATTERY",
            "MobileSpecification.FRONT_CAMERA",
            "MobileSpecification.MAIN_CAMERA",
            "ProductImage",
            "Thumbnail",
          ],
          filters: {
            categories: {
              Title: {
                $eq: selectedCategory,
              },
            },
            Title: {
              $containsi: value,
            },
          },
        },
        { encodeValuesOnly: true }
      );

      try {
        const data = await fetchData(`api/products?${query}`, query);
        setProducts(data.data);
        const newInputSuggestions = [...inputSuggestions];
        newInputSuggestions[index] = data.data;
        setInputSuggestions(newInputSuggestions);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  }, 300);

  const handleSearchChange = (index, e) => {
    const value = e.target.value;

    handleInputChange(index, e);

    if (value.trim() === "") {
      removeGadget(index);
    }

    if (value.trim()) {
      fetchProductData(index, value);
    } else {
      const newInputSuggestions = [...inputSuggestions];
      newInputSuggestions[index] = [];
      setInputSuggestions(newInputSuggestions);
    }
  };

  const handleProductSelect = (index, product) => {
    updateGadget(index, product);
    handleInputChange(index, { target: { value: product.attributes.Title } });
    const newInputSuggestions = [...inputSuggestions];
    newInputSuggestions[index] = [];
    setInputSuggestions(newInputSuggestions);
  };

  const handleSubmit = () => {
    const productSlugs = selectedGadgets
      .map((product) => product?.attributes?.Slug)
      .filter(Boolean)
      .join("-vs-");
    if (productSlugs) {
      router.push(`/compare/${productSlugs}`);
    }
  };

  return (
    <WidthWrapper className="bg-customGrey rounded-xl px-2 mx-auto py-3 my-3">
      <section className="text-gray-600 body-font">
        <h1 className="px-5 py-2 sm:text-2xl text-xl font-semibold title-font">
          Compare Gadget
        </h1>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex w-full lg:flex-row flex-col mx-auto px-8 lg:space-x-4 lg:space-y-0 space-y-4 lg:px-0 items-center">
            <CategorySelect
              categories={categories}
              onChange={handleCategoryChange}
            />
            {inputFields?.map((fields, index) => (
              <div
                key={index}
                className="relative w-full"
                ref={(el) => (dropdownRef.current[index] = el)}
              >
                <InputFields
                  fields={fields}
                  inputFields={inputFields}
                  selectedGadget={selectedGadgets[index]}
                  handleRemove={handleRemove}
                  index={index}
                  handleInputChange={(e) => handleSearchChange(index, e)}
                  removeGadget={removeGadget}
                />
                {inputSuggestions[index] &&
                  inputSuggestions[index].length > 0 && (
                    <div className="absolute z-40 top-full left-0 w-full bg-white border-[1px] rounded-lg mt-2 py-2 shadow-lg h-auto max-h-60 overflow-scroll no-scrollbar">
                      {inputSuggestions[index].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center py-3 px-2 cursor-pointer"
                          onClick={() => handleProductSelect(index, item)}
                        >
                          <div className="size-14 mr-3 items-center justify-center  flex-shrink-0">
                            <img
                              src={
                                item?.attributes?.Thumbnail?.data?.attributes
                                  ?.url
                              }
                              alt={
                                item?.attributes?.Thumbnail?.data?.attributes
                                  ?.name
                              }
                              className="w-full h-full object-contain rounded-lg mt-1"
                            />
                          </div>
                          <span className="w-full text-lg">
                            {item?.attributes?.Title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
            {!isMobile && inputFields?.length < 4 && (
              <div
                onClick={handleAdd}
                className="flex justify-center cursor-pointer"
              >
                <CiCirclePlus className="size-[30px] text-gray-600" />
              </div>
            )}
            <Button
              onClick={handleSubmit}
              className="border-0 py-2 px-8 focus:outline-none rounded text-lg"
            >
              Compare
            </Button>
          </div>
        </div>
      </section>
    </WidthWrapper>
  );
};

export default CompareGadget;

const InputFields = ({
  fields,
  inputFields,
  selectedGadget,
  handleRemove,
  index,
  handleInputChange,
  removeGadget,
}) => {
  return (
    <div className="w-full flex h-10 justify-between items-center flex-grow bg-white bg-opacity-50 rounded-md border border-input bg-background border-gray-300 focus:bg-slate-50 focus:shadow-md text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      <input
        onChange={(e) => {
          handleInputChange(e);
        }}
        type="text"
        value={fields.value}
        placeholder="Search Product Name Here...."
        className="outline-none w-full"
      />
      <Search className="size-[20px] text-customGray-200" />
      {inputFields.length > 2 && (
        <X
          className="size-[20px] text-customGray-200 cursor-pointer"
          onClick={() => {
            handleRemove(index);
            removeGadget(index);
          }}
        />
      )}
    </div>
  );
};

