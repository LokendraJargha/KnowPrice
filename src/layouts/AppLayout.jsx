import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import GadgetMenu from "../components/sections/gadgetMenu/GadgetMenu";
import TechStories from "../components/sections/techStories/TechStories";
import SubscribeForm from "../components/subscribeForm/SubscribeForm";
import Footer from "../components/footer/Footer";

export default function AppLayout() {
  return (
    <div className="bg-customBgWhite">
      <NavBar />
      <GadgetMenu />
      <Outlet />
      <div className="relative ">
        <div className="bg-customGray">
          <TechStories />
        </div>
        <SubscribeForm />
        <Footer />
      </div>
    </div>
  );
}
