import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    function handleClickOutside(event) {
      let isClickOutside = true;

      for (let i = 0; i < elementsRef.current.length; i++) {
        if (
          elementsRef.current[i] &&
          elementsRef.current[i].contains(event.target)
        ) {
          isClickOutside = false;
          break;
        }
      }

      if (isClickOutside) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return elementsRef;
};

export default useClickOutside;
