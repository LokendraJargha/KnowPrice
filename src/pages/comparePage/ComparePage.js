import React from "react";
import NavBar from "../../components/navBar/NavBar";
import GadgetMenu from "../../components/sections/gadgetMenu/GadgetMenu";
import CompareGadgets from "../../components/sections/compareGadgets/CompareGadgets";
import TechStories from "../../components/sections/techStories/TechStories";
import PopularComparisons from "../../components/sections/popularComparisons/PopularComparisons";
import SubscribeForm from "../../components/subscribeForm/SubscribeForm";
import Footer from "../../components/footer/Footer";

const ComparePage = () => {
  return (
    <div className="bg-customBgWhite">
      <CompareGadgets />
      <PopularComparisons />
    </div>
  );
};

export default ComparePage;
