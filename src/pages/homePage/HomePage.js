import React from "react";
import NewArrivals from "../../components/sections/newArrivals/NewArrivals";
import FeatureProduct from "../../components/sections/featureProduct/FeatureProduct";
import CompareGadgets from "../../components/sections/compareGadgets/CompareGadgets";
import BestDeals from "../../components/sections/bestDeals/BestDeals";
import TechNews from "../../components/sections/techNews/TechNews";
import GadgetCategory from "../../components/sections/gadgetCategory/GadgetCategory";
import PopularBrand from "../../components/sections/popularBrands/PopularBrands";
import Container from "../../components/commons/Container";

const HomePage = () => {
  return (
    <>
      <div className="bg-customGray">
        <div className="py-5 bg-customGray">
          <Container>
            <div className="flex items-start lg:flex-row flex-col">
              <NewArrivals />
              <FeatureProduct />
            </div>
          </Container>
        </div>
        <CompareGadgets />
        <BestDeals />
      </div>
      <div className="py-5">
        <Container>
          <div className="flex items-center xl:flex-row flex-col">
            <TechNews />
            <GadgetCategory />
          </div>
        </Container>
      </div>
      <div className="bg-customGray">
        <PopularBrand />
      </div>
    </>
  );
};

export default HomePage;
