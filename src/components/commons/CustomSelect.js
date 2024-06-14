import React, { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const CustomSelect = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption);
  const selectRef = useRef(null);

  useEffect(() => {
    setSelected(selectedOption);
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef, selectedOption]);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  return (
    <div className="relative inline-block w-full " ref={selectRef}>
      <div
        className="flex justify-between items-center border rounded px-4 py-2 h-[40px] bg-white cursor-pointer"
        onClick={handleSelectClick}
      >
        {selected}
        <BsChevronDown size={12} strokeWidth="0" />
      </div>
      {isOpen && (
        <div className="absolute z-auto h-32 border rounded bg-white w-full mt-1 overflow-scroll">
          {options?.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
