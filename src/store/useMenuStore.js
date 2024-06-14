import React from "react";
import { create } from "zustand";

const useMenuStore = create((set) => ({
  menus: [],
  fetchMenus: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/menu-item?populate=MenuList.list`
      );
      const data = await response.json();
      // console.log("data", data);
      set({ menus: data });
    } catch (error) {
      console.log("'Error fetching menu data:'", error);
    }
  },
}));

export default useMenuStore;
