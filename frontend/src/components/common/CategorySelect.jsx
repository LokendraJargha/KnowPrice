import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategorySelect = ({ categories, onChange }) => (
  <Select onValueChange={onChange}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder={"Select Category"} />
    </SelectTrigger>
    <SelectContent>
      {categories?.data?.map((category) => (
        <SelectItem key={category?.id} value={category?.attributes?.Title}>
          {category?.attributes?.Title}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default CategorySelect;
