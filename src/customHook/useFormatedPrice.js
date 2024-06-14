import { useMemo } from "react";

const useFormattedPrice = (price) => {
  const formattedPrice = useMemo(() => {
    if (price === null || price === undefined) return "";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, [price]);

  return formattedPrice;
};

export default useFormattedPrice;
