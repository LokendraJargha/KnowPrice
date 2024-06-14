import { create } from "zustand";

const fetchBestDeals = create((set) => ({
  BestDealsInfo: [],
  fetchBestDealsInfo: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/products?populate[0]=product_image&populate[1]=product_png_image&populate[2]=Key_Specs.Display&populate[3]=Key_Specs.Camera&populate[4]=Key_Specs.Battery&populate[5]=Key_Specs.CPU&populate[6]=Specification.specs_list&populate[7]=price&filters%5BbestDeals%5D=true`
      );
      const data = await response.json();
      set({ BestDealsInfo: data });
    } catch (error) {
      console.log("'Error fetching products info data:'", error);
    }
  },
}));

export default fetchBestDeals;
