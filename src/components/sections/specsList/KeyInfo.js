import React, { useEffect, useState } from "react";
import useFormattedPrice from "../../../customHook/useFormatedPrice";
import { Link } from "react-router-dom";
import CustomSelect from "../../commons/CustomSelect";
import { CiBatteryCharging, CiMobile1 } from "react-icons/ci";
import { MdOutlineCamera } from "react-icons/md";
import { LiaMicrochipSolid } from "react-icons/lia";
import { IoIosLaptop } from "react-icons/io";
import { BsCpu } from "react-icons/bs";

const KeyInfo = ({ ProductsInfo, KeySpec, price }) => {
  const variantsMap = price?.map((item) => item?.Variants);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();
  const formattedPrice = useFormattedPrice(selectedPrice);
  const [keyData, setKeyData] = useState(null);

  const handleChangeCategory = (selected) => {
    setSelectedCategory(selected);
    const selectedCategory = price?.find(
      (category) => category?.Variants === selected
    );
    setSelectedPrice(selectedCategory?.price);
  };

  useEffect(() => {
    if (price?.length > 0) {
      setSelectedCategory(price[0]?.Variants);
      setSelectedPrice(price[0]?.price);
    }
  }, [price]);

  const key =
    ProductsInfo?.data[0]?.attributes?.categories?.data[0]?.attributes?.title;
  useEffect(() => {
    if (key === "Mobile") {
      setKeyData(<MobileKey KeySpec={KeySpec} />);
    } else if (key === "Laptop") {
      setKeyData(<LaptopKey KeySpec={KeySpec} />);
    }
  }, [ProductsInfo]);

  return (
    <div className="w-full lg:w-1/2 ">
      <div>
        <h1 className="sm:text-2xl text-lg  text-customTextBlack py-1">
          {ProductsInfo && ProductsInfo?.data?.[0]?.attributes?.title}
        </h1>
        <div className="flex text-sm font-light text-customTextBlack py-2 gap-5  sm:gap-10">
          <h1>
            Released Date:{" "}
            {ProductsInfo && ProductsInfo?.data?.[0]?.attributes?.released_date}
          </h1>
          <div className=" bg-gray-300 h-4 w-0 border border-customTextBlack my-auto"></div>
          <Link
            to={ProductsInfo?.data?.[0]?.attributes?.find_store}
            rel="noopener"
            target="_blank"
          >
            Find Store
          </Link>
        </div>
        <div className="flex sm:text-base text-sm font-light text-customTextBlack py-4">
          <h1 className="my-auto">Variants:</h1>
          <div className="block text-customTextBlack w-1/4 md:w-1/3 h-11/12 bg-custom mx-4  py-2  rounded  ">
            <CustomSelect
              options={variantsMap}
              selectedOption={selectedCategory}
              onOptionSelect={handleChangeCategory}
            />
          </div>
          <h1 className="sm:text-2xl text-lg my-auto font-normal">
            Rs {formattedPrice}
          </h1>
        </div>

        <div className="flex items-center gap-3 ">
          <button className="bg-customBtn text-customTextWhite w-full h-[38px] rounded-md ">
            Add to Compare
          </button>
        </div>
      </div>
      {keyData}
    </div>
  );
};

export default KeyInfo;

const MobileKey = ({ KeySpec }) => {
  return (
    <div className="my-5 ">
      <h1 className="py-4 text-xl text-customTextBlack">Key Specification</h1>
      <div className="flex flex-wrap justify-between gap-1">
        <div className="flex flex-col items-center justify-center p-2">
          <CiMobile1 size={35} />
          <h1 className="sm:text-lg text-sm text-customTextBlack ">
            {KeySpec?.[0]?.Display?.key}
          </h1>
          <h1 className="sm:text-sm text-xs text-customTextBlack font-light ">
            {KeySpec?.[0]?.Display?.Value}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:text-sm text-xs">
          <MdOutlineCamera size={35} />

          <h1 className="sm:text-lg text-sm text-customTextBlack ">
            {KeySpec?.[0]?.Camera?.key}
          </h1>
          <h1 className="sm:text-sm text-xs text-customTextBlack font-light ">
            {KeySpec?.[0]?.Camera?.Value}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:text-sm text-xs">
          <CiBatteryCharging size={35} />
          <h1 className="sm:text-lg text-sm text-customTextBlack ">
            {KeySpec?.[0]?.Battery?.key}
          </h1>
          <h1 className="sm:text-sm text-xs text-customTextBlack font-light ">
            {KeySpec?.[0]?.Battery?.Value}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:text-sm text-xs">
          <LiaMicrochipSolid size={35} />
          <h1 className="sm:text-lg text-sm text-customTextBlack ">
            {KeySpec?.[0]?.CPU?.key}
          </h1>
          <h1 className="sm:text-sm text-xs text-customTextBlack font-light ">
            {KeySpec?.[0]?.CPU?.Value}
          </h1>
        </div>
      </div>
    </div>
  );
};

const LaptopKey = ({ KeySpec }) => {
  return (
    <div className="my-5 ">
      <h1 className="py-4 text-xl text-customTextBlack">Key Specification</h1>
      <div className="flex flex-wrap justify-between gap-1">
        <div className="flex flex-col items-center justify-center p-2">
          <IoIosLaptop size={35} />
          <h1 className="sm:text-lg text-sm text-customTextBlack ">
            {KeySpec?.[0]?.Display?.key}
          </h1>
          <h1 className="sm:text-sm text-xs text-customTextBlack font-light ">
            {KeySpec?.[0]?.Display?.Value}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:text-sm text-xs">
          <MdOutlineCamera size={35} />

          <h1 className="sm:text-lg text-sm text-customTextBlack ">
            {KeySpec?.[0]?.Camera?.key}
          </h1>
          <h1 className="sm:text-sm text-xs text-customTextBlack font-light ">
            {KeySpec?.[0]?.Camera?.Value}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:text-sm text-xs">
          <CiBatteryCharging size={35} />
          <h1 className="sm:text-lg text-sm text-customTextBlack ">
            {KeySpec?.[0]?.Battery?.key}
          </h1>
          <h1 className="sm:text-sm text-xs text-customTextBlack font-light ">
            {KeySpec?.[0]?.Battery?.Value}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:text-sm text-xs">
          <BsCpu size={35} />
          <h1 className="sm:text-lg text-sm text-customTextBlack ">
            {KeySpec?.[0]?.CPU?.key}
          </h1>
          <h1 className="sm:text-sm text-xs text-customTextBlack font-light ">
            {KeySpec?.[0]?.CPU?.Value}
          </h1>
        </div>
      </div>
    </div>
  );
};
