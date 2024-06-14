import React from "react";
import { useMediaQuery } from "react-responsive";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Pagination from "../../commons/Pagination";

const GadgetCategory = () => {
  const isMobile = useMediaQuery({ maxWidth: 766 });
  const isMediumScreen = useMediaQuery({ maxWidth: 1024 });
  const menu = [
    {
      name: "SmartPhone",
    },
    {
      name: "Laptop",
    },
    {
      name: "Smart Watch",
    },
    {
      name: "Camera",
    },
    {
      name: "Speaker",
    },
    {
      name: "Headphones",
    },
  ];

  const data = [
    {
      name: "Samsung A54 Ultra 5G AI Smartphone",
      price: "Rs 9,999/-",
      image:
        "https://w7.pngwing.com/pngs/603/63/png-transparent-smartphone-vivo-v9-2018-world-cup-feature-phone-smartphone-blue-gadget-electronics.png",
    },
    {
      name: "ASUS Vivobook 15, IntelCore i7-12650H ",
      price: "Rs 9,999/-",
      image:
        "https://w7.pngwing.com/pngs/391/725/png-transparent-laptop-asus-computer-laptop-electronics-netbook-computer.png",
    },
    {
      name: "BenQ LED monitor ZOWIE RL-55 1231",
      price: "Rs 9,999/-",
      image:
        "https://storage.aoc.com/assets/8714/AOC_U28G2XU_PV_-FRONT-large.png",
    },
    {
      name: "Sony Mirrorless Camera A7S  U03b17",
      price: "Rs 9,999/-",
      image: "https://www.pngall.com/wp-content/uploads/4/DSLR-Camera.png",
    },
    {
      name: "Samsung A54 Ultra 5G AI Smartphone",
      price: "Rs 9,999/-",
      image:
        "https://www.vhv.rs/dpng/d/7-72850_new-mobile-phone-png-transparent-png.png",
    },
    {
      name: "Samsung A54 Ultra 5G AI Smartphone",
      price: "Rs 9,999/-",
      image:
        "https://w7.pngwing.com/pngs/603/63/png-transparent-smartphone-vivo-v9-2018-world-cup-feature-phone-smartphone-blue-gadget-electronics.png",
    },
    {
      name: "ASUS Vivobook 15, IntelCore i7-12650H ",
      price: "Rs 9,999/-",
      image:
        "https://w7.pngwing.com/pngs/391/725/png-transparent-laptop-asus-computer-laptop-electronics-netbook-computer.png",
    },
    {
      name: "Sony Mirrorless Camera A7S  U03b17",
      price: "Rs 9,999/-",
      image: "https://www.pngall.com/wp-content/uploads/4/DSLR-Camera.png",
    },
    {
      name: "ASUS Vivobook 15, IntelCore i7-12650H ",
      price: "Rs 9,999/-",
      image:
        "https://w7.pngwing.com/pngs/391/725/png-transparent-laptop-asus-computer-laptop-electronics-netbook-computer.png",
    },
    {
      name: "Sony Mirrorless Camera A7S  U03b17",
      price: "Rs 9,999/-",
      image: "https://www.pngall.com/wp-content/uploads/4/DSLR-Camera.png",
    },
  ];

  const settings = {
    dots: false,
    speed: 500,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 310,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const setting = {
    dots: false,
    speed: 500,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
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
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:ml-5 ml-0 md:bg-white  md:my-4 md:rounded-md md:shadow-lg">
      {!isMediumScreen ? (
        <div className="flex items-center mx-3 text-center justify-between gap-2 text-base rounded-t-md font-light py-2">
          {menu?.map((item, index) => (
            <h1 key={index}>{item.name}</h1>
          ))}
        </div>
      ) : (
        <div className=" overflow-hidden mx-3 text-center text-sm md:rounded-t-md font-light py-3">
          <Slider {...settings}>
            {menu?.map((item, index) => (
              <h1 key={index}>{item.name}</h1>
            ))}
          </Slider>
        </div>
      )}
      <div className="px-4">
        <h1 className="text-xl text-customTextBlack my-2">Popular Phones</h1>

        {isMobile ? (
          <div>
            <Slider {...setting}>
              {data.map((item, index) => (
                <PopularMobile key={index} item={item} />
              ))}
            </Slider>
          </div>
        ) : (
          <div className="sm:grid sm:grid-cols-4 gap-4 ">
            {data.splice(0, 8).map((item, index) => (
              <div className=" ">
                <PopularMobile key={index} item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="py-5 hidden sm:block">
        <Pagination />
      </div>
    </div>
  );
};

export default GadgetCategory;

const PopularMobile = ({ item }) => {
  return (
    <>
      <div className="md:bg-customBgWhite bg-customGray rounded-md px-2 drop-shadow-[2px_2px_2px_2px_rgba(0.1,0,0,0.1)]">
        <div className="">
          <img
            src={item.image}
            className="sm:size-32 size-24 mx-auto object-contain mix-blend-multiply"
            alt=""
          />
        </div>
        <h1 className="md:text-sm text-xs font-normal text-customTextBlack ">
          {item.name}
        </h1>
        <p className="md:text-base text-sm font-normal my-2 text-customTextBlack ">
          {item.price}
        </p>
      </div>
    </>
  );
};
