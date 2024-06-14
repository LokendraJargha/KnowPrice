import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import Container from "../../commons/Container";
import useCompareField from "../../../customHook/useCompareField";
import { Link } from "react-router-dom";
import CustomSelect from "../../commons/CustomSelect";
import fetchCategory from "../../../service/fetchCategory";

const CompareGadgets = () => {
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const { fetchCategoryInfo, CategoryInfo } = fetchCategory();
  const {
    inputFields,
    handleAdd,
    handleRemove,
    handleInputChange,
    handleSubmit,
  } = useCompareField();

  useEffect(() => {
    fetchCategoryInfo();
  }, []);

  const handleChangeCategory = (selected) => {
    setSelectedCategory(selected);
  };

  const CategoryList = CategoryInfo?.data?.map(
    (item) => item?.attributes?.title
  );

  // console.log(CategoryList?.[0]);
  // useEffect(() => {
  //   if (CategoryList?.length > 0) {
  //     setSelectedCategory(CategoryInfo?.data?.[0]?.attributes?.title);
  //   }
  // }, []);
  // console.log("select", selectedCategory);

  if (CategoryInfo?.length === 0) {
    return <div className="py-5 z-50">Loading....</div>;
  }
  return (
    <div className="py-5 z-50">
      <Container>
        <div className="bg-customWhite rounded-lg px-5 py-5 drop-shadow-[2px_3px_2px_rgba(0.1,0.1,0.1,0.1)]">
          <h1 className="text-2xl text-customTextBlack ">Compare Gadget</h1>
          <div className="flex flex-shrink lg:justify-between flex-col gap-2 lg:flex-row items-center py-5 lg:py-[21px]">
            <div className="block  w-full lg:w-1/4 h-11/12 ">
              <CustomSelect
                options={CategoryList}
                selectedOption={selectedCategory}
                onOptionSelect={handleChangeCategory}
              />
            </div>

            {inputFields.map((field, index) => (
              <div
                key={index}
                className="flex items-center border bg-customWhite justify-between p-2 rounded-md w-full lg:w-2/5 h-[40px]"
              >
                <IoMdAdd className="size-[20px] text-customGray-200" />
                <input
                  onChange={(e) => handleInputChange(index, e)}
                  value={field.value}
                  className="text-sm outline-none w-5/6 h-11/12"
                  placeholder="Search Product Name Here...."
                  type="text"
                />
                <IoIosSearch className="size-[20px] text-customGray-200" />
                {inputFields.length > 2 && (
                  <IoCloseOutline
                    className="size-[20px] text-customGray-200"
                    onClick={() => handleRemove(index)}
                  />
                )}
              </div>
            ))}
            {inputFields.length < 4 && (
              <div onClick={handleAdd} className="flex items-center">
                <CiCirclePlus className="w-[38px] h-[38px] text-customGreen-100" />
              </div>
            )}

            <div className="flex items-center gap-3 text-center rounded-md bg-customBtn w-full lg:w-1/4 h-11/12 ">
              <Link to={"compare/:compareid"}>
                <button
                  onSubmit={handleSubmit}
                  className=" text-customTextWhite w-full h-[40px]  "
                >
                  Compare
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompareGadgets;
