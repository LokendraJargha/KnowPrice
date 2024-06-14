import { create } from "zustand";

const fetchCategory = create((set) => ({
  CategoryInfo: [],
  fetchCategoryInfo: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/categories`
      );
      const data = await response.json();
      set({ CategoryInfo: data });
    } catch (error) {
      console.log("'Error fetching Category info data:'", error);
    }
  },
}));

export default fetchCategory;
