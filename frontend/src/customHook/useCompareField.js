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

  const handleInputChange = (index, e) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = e.target.value;
    setInputFields(newInputFields);
  };

  return {
    inputFields,
    handleAdd,
    handleRemove,
    handleInputChange,
  };
};

export default useCompareField;
