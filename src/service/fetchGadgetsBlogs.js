import { create } from "zustand";

const fetchGadgetsBlogs = create((set) => ({
  gadgetBlogsInfo: [],
  fetchGadgetsBlogsInfo: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/blogs?populate=%2A&filters%5BisGadget%5D=true`
      );
      const data = await response.json();
      set({ gadgetBlogsInfo: data });
    } catch (error) {
      console.log("'Error fetching gadget blogs info data:'", error);
    }
  },
}));

export default fetchGadgetsBlogs;
