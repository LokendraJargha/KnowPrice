import WidthWrapper from "@/components/common/WidthWrapper";
import CompareGadget from "@/components/section/CompareGadget";
import fetchData from "@/service/fetchData";
import React from "react";

const page = async () => {
  const { categories } = await dataFetch();

  return (
    <WidthWrapper className={"py-24"}>
      <CompareGadget categories={categories} />
    </WidthWrapper>
  );
};

export default page;

const dataFetch = async () => {
  try {
    const categories = await fetchData("api/categories");
    return { categories };
  } catch (error) {
    return { error: error.message };
  }
};
