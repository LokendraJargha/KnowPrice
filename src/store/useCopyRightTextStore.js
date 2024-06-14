import React from "react";
import { create } from "zustand";

const useCopyRightTextStore = create((set) => ({
  copyRightInfo: [],

  fetchCopyRightInfo: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/site-info`
      );

      const data = await response.json();
      set({ copyRightInfo: data });
    } catch (error) {
      console.log("'Error fetching copyright info data:'", error);
    }
  },
}));

export default useCopyRightTextStore;
