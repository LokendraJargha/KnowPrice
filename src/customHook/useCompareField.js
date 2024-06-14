import React, { useState } from "react";

const useCompareField = (
  defaultFields = [{ value: "" }, { value: "" }],
  maxFields = 4
) => {
  const [inputFields, setInputFields] = useState(defaultFields);

  const handleAdd = () => {
    const newFields = [...inputFields];
    if (newFields.length < maxFields) {
      newFields.push({ value: "" });
      setInputFields(newFields);
    }
  };

  const handleRemove = (index) => {
    const newFields = [...inputFields];
    newFields.splice(index, 1);
    setInputFields(newFields);
  };

  const handleInputChange = (index, event) => {
    const newFields = [...inputFields];
    newFields[index].value = event.target.value;
    setInputFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };

  return {
    inputFields,
    handleAdd,
    handleRemove,
    handleInputChange,
    handleSubmit,
  };
};

export default useCompareField;
