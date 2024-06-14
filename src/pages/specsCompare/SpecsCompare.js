import React from "react";
import NavBar from "../../components/navBar/NavBar";
import GadgetMenu from "../../components/sections/gadgetMenu/GadgetMenu";
import PopularComparisons from "../../components/sections/popularComparisons/PopularComparisons";
import TechStories from "../../components/sections/techStories/TechStories";
import SubscribeForm from "../../components/subscribeForm/SubscribeForm";
import CompareSpeccs from "../../components/sections/compareSepes/CompareSpecs";
import Footer from "../../components/footer/Footer";

const SpecsCompare = () => {
  return (
    <div className="bg-customBgWhite">
      <NavBar />
      <GadgetMenu />
      <CompareSpeccs />
      <PopularComparisons />
      <div className="relative ">
        <TechStories />
        <SubscribeForm />
        <Footer />
      </div>
    </div>
  );
};

export default SpecsCompare;
