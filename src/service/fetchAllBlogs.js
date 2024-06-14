import { create } from "zustand";

const fetchAllBlogs = create((set) => ({
  allBlogsInfo: [],
  fetchAllBlogsInfo: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/blogs?populate=%2A`
      );
      const data = await response.json();
      set({ allBlogsInfo: data });
    } catch (error) {
      console.log("'Error fetching Blogs info data:'", error);
    }
  },
}));

export default fetchAllBlogs;
