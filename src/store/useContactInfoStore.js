import React from "react";
import { create } from "zustand";

const useContactInfoStore = create((set) => ({
  contactInfo: [],
  fetchContactInfo: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/contact?populate=ContactList.icon`
      );
      const data = await response.json();
      set({ contactInfo: data });
    } catch (error) {
      console.log("'Error fetching contact info data:'", error);
    }
  },
}));

export default useContactInfoStore;
