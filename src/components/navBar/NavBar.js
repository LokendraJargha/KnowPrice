import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import logo from "../../Images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import compareicon from "../../Images/Group 1.png";

import Container from "../commons/Container";
import useMenuStore from "../../store/useMenuStore";
import useSocialMediaStore from "../../store/ useSocialMediaStore";

const NavBar = () => {
  const { menus, fetchMenus } = useMenuStore();
  const { socialMediaData, fetchSocialMediaData } = useSocialMediaStore();

  useEffect(() => {
    fetchMenus();
    fetchSocialMediaData();
  }, []);

  return (
    <div className="w-full my-auto">
      <Container>
        <div className="w-full flex justify-between py-4">
          <div className=" flex md:flex-row items-center gap-1">
            <RxHamburgerMenu className="text-2xl md:hidden text-customTextBlack" />
            <Link to={`/`}>
              <img src={logo} className="w-28" />
            </Link>
          </div>
          <div className="md:block hidden w-3/5 mx-2">
            <SearchComponent />
          </div>
          <div className=" flex items-center pt-1 gap-2 mx-3">
            <div className="md:text-sm md:font-medium flex space-x-1 text-xs font-normal">
              <button className="drop-shadow-lg">Sign In</button>
              <div className="bg-[#cccccc] border border-[#CCCCCC]"></div>
              <Link to={`/compares`}>
                <button className="sm:block hidden drop-shadow-lg">
                  Compare
                </button>
              </Link>
            </div>
            <div>
              <Link to={`/compares`}>
                <img src={compareicon} />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <SearchComponent />
        </div>
        <div className=" md:flex justify-between py-4 lg:text-base xl:text-lg gap-3 text-customTextBlack hidden">
          <ul className="w-3/4 flex justify-between my-auto">
            {Array.isArray(menus?.data?.attributes?.MenuList) &&
              menus?.data?.attributes?.MenuList[0]?.list?.map((item, index) => (
                <div key={index}>
                  <Link to={item.slug}>
                    <li>{item?.menuName}</li>
                  </Link>
                </div>
              ))}
          </ul>
          <div className="w-1/4 flex justify-between">
            <h1 className="my-auto px-1 ml-auto"> Follow Us:</h1>
            <div className="flex items-center gap-3 h-8 my-auto bg-customRed px-5 justify-center rounded-xl py-2 text-white">
              {Array.isArray(socialMediaData?.data?.attributes?.icon) &&
                socialMediaData?.data?.attributes?.icon?.map((item, index) => (
                  <>
                    <Link
                      key={index}
                      to={item.slug}
                      rel="noopener"
                      target="_blank"
                    >
                      <img
                        src={`${process.env.REACT_APP_URL}${item?.iconLogo?.data?.attributes?.url}`}
                        className="h-4 max-w-3"
                      />
                    </Link>
                    <div className=" bg-[#928e8e] h-4 border border-[#f8f5f5]"></div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;

const SearchComponent = () => {
  return (
    <div className="flex justify-between items-center px-3 md:py-1 mt-1 bg-[#E7E7E7] rounded-lg  text-[#666666] gap-2 text-xl">
      <input
        type="text"
        className=" bg-[#E7E7E7] outline-none text-xs break-words md:w-full w-1/2 md:py-2 py-3"
        placeholder="Search Prouct/News Here"
      />
      <div className="flex gap-2">
        <div className="bg-[#928e8e] h-5 w-0.5 border border-[#cac8c8]"></div>
        <IoSearch className="bg-[#E7E7E7]" />
      </div>
    </div>
  );
};
