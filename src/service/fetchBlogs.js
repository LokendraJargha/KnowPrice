import React from "react";
import { create } from "zustand";

const fetchBlog = create((set) => ({
  BlogInfo: [],
  fetchBlogInfo: async (slug) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/blogs?populate=%2A&filters%5Bslug%5D=${slug}`
      );
      const data = await response.json();
      set({ BlogInfo: data });
    } catch (error) {
      console.log("'Error fetching Blog info data:'", error);
    }
  },
}));

export default fetchBlog;
