import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icon
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../../commons/Container";
import fetchBestDelas from "../../../service/fetchBestDeals";
import { useNavigate } from "react-router-dom";

const BestDeals = () => {
  const navigate = useNavigate();
  const { BestDealsInfo, fetchBestDealsInfo } = fetchBestDelas();

  useEffect(() => {
    fetchBestDealsInfo();
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  if (BestDealsInfo?.length === 0)
    return (
      <div className=" py-5 overflow-hidden">
        <Container>loading...</Container>
      </div>
    );

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-2xl text-customTextBlack mb-3">Best Deals</h1>
        <div className="rounded-lg py-3 ">
          <Slider {...settings}>
            {BestDealsInfo?.data?.slice(0, 7)?.map((item, index) => (
              <div key={index} className="flex space-y-2 cursor-pointer">
                <div className="bg-customBgWhite rounded-md drop-shadow-[2px_2px_2px_2px_rgba(0.1,0,0,0.1)]">
                  <img
                    onClick={() =>
                      navigate(`gadgets/${item?.attributes?.slug}`)
                    }
                    src={`${process.env.REACT_APP_URL}${item?.attributes?.product_png_image?.data?.[0]?.attributes?.url}`}
                    className="sm:size-52 size-40 mx-auto object-cover mix-blend-multiply"
                    alt=""
                  />
                </div>
                <div>
                  <h1
                    onClick={() =>
                      navigate(`gadgets/${item?.attributes?.slug}`)
                    }
                    className="md:text-base text-xs font-normal text-customTextBlack "
                  >
                    {item?.attributes?.title}
                  </h1>
                  <h1
                    onClick={() =>
                      navigate(`gadgets/${item?.attributes?.slug}`)
                    }
                    className="md:text-lg text-sm font-normal text-customTextBlack "
                  >
                    {item?.attributes?.price[0]?.price}
                  </h1>
                  <div className="flex items-center gap-3 mt-3">
                    <h1 className="font-light text-[10px] md:text-xs text-customTextBlack ">
                      COMPARE NOW
                    </h1>
                    <FaArrowRightLong className="text-customBtn" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default BestDeals;
