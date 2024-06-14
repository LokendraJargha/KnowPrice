import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowRightLong } from "react-icons/fa6";

import fetchAllProducts from "../../../service/fetchAllProducts";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const isMobile = useMediaQuery({ maxWidth: 1020 });
  const visible = 2;
  const { fetchAllProductsInfo, allProductsInfo } = fetchAllProducts();

  useEffect(() => {
    fetchAllProductsInfo();
  }, []);
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 100000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  if (allProductsInfo.length === 0)
    return <div className={` lg:w-1/2 w-full mr-4`}>loading...</div>;

  return (
    <div className={` lg:w-1/2 w-full mr-4`}>
      <h1 className="text-2xl text-customTextBlack py-3 sm:block hidden">
        Latest Available
      </h1>
      <div className="gap-3 ">
        {!isMobile ? (
          allProductsInfo.data
            .slice(0, visible)
            .map((item, index) => (
              <LatestGadgets key={index} item={item.attributes} />
            ))
        ) : (
          <div className="px-2">
            <Slider {...settings}>
              {allProductsInfo.data.length > 0 &&
                allProductsInfo.data.map((item, index) => (
                  <LatestGadgets key={index} item={item.attributes} />
                ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;

const LatestGadgets = ({ item }) => {
  const navigate = useNavigate();
  if (!item) return null;
  const { product_png_image, title, price } = item;

  return (
    <div className="flex rounded-lg gap-3 py-3 ">
      <div
        onClick={() => navigate(`gadgets/${item.slug}`)}
        className="bg-customWhite sm:max-h-32 sm:max-w-32 sm:min-w-32 sm:min-h-32 max-w-24 max-h-24 rounded-lg cursor-pointer"
      >
        <img
          className="items-center sm:max-h-32 sm:max-w-32 sm:min-w-32 sm:min-h-32 max-w-24 max-h-24 object-cover rounded-lg  "
          src={`${process.env.REACT_APP_URL}${product_png_image?.data?.[0]?.attributes?.url}`}
          alt=""
        />
      </div>

      <div className="flex flex-col ml-3 lg:w-3/5 my-3 cursor-pointer">
        <h1
          onClick={() => navigate(`gadgets/${item.slug}`)}
          className="sm:text-lg text-base font-normal text-customTextBlack "
        >
          {title}
        </h1>
        <h1
          onClick={() => navigate(`gadgets/${item.slug}`)}
          className="md:text-lg text-sm font-normal text-customTextBlack "
        >
          Rs. {price[0]?.price}/-
        </h1>
        <div className="flex items-center gap-3 mt-3">
          <h1 className="font-light text-[10px] md:text-xs text-customTextBlack ">
            COMPARE NOW
          </h1>
          <FaArrowRightLong className="text-customBtn" />
        </div>
      </div>
    </div>
  );
};
