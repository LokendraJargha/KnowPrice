import React from "react";
import { create } from "zustand";

const useSocialMediaStore = create((set) => ({
  socialMediaData: [],
  fetchSocialMediaData: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/social-media?populate=icon.iconLogo`
      );
      const data = await response.json();
      // console.log(data);
      set({ socialMediaData: data });
    } catch (error) {
      console.log("'Error fetching social media data:'", error);
    }
  },
}));

export default useSocialMediaStore;
