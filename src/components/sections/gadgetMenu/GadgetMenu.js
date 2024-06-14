import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

//icon
import { BiMobile } from "react-icons/bi";
import { CiLaptop } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiSpeaker } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { BsMouse2 } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import Container from "../../commons/Container";

const GadgetMenu = () => {
  const menu = [
    {
      name: "SmartPhone",
      icon: <BiMobile size={27} />,
      link: "",
    },
    {
      name: "Laptop",
      icon: <CiLaptop size={27} />,
      link: "",
    },
    {
      name: "Smart Watch",
      icon: <BsSmartwatch size={27} />,
      link: "",
    },
    {
      name: "Camera",
      icon: <IoCameraOutline size={27} />,
      link: "",
    },
    {
      name: "Speaker",
      icon: <CiSpeaker size={27} />,
      link: "",
    },
    {
      name: "Headphones",
      icon: <LuHeadphones size={27} />,
      link: "",
    },
    {
      name: "Mouse",
      icon: <BsMouse2 size={27} />,
      link: "",
    },
    {
      name: "Microphone",
      icon: <TbMicrophone2 size={27} />,
      link: "",
    },
    {
      name: "Game Console",
      icon: <IoGameControllerOutline size={27} />,
      link: "",
    },
  ];

  const settings = {
    dots: false,
    speed: 500,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="w-full ">
        <Slider {...settings}>
          {menu.map((item, index) => (
            <div key={index} className="py-3">
              <div className="flex items-center justify-center">
                {/* <img src={item.icon} alt="" /> */}
                {item.icon}
              </div>
              <h1 className="lg:text-xs text-[10px] font-normal text-customTextBlack py-1 flex items-center justify-center">
                {item.name}
              </h1>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default GadgetMenu;

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(e);
  };
  return (
    <div onClick={handleClick}>
      <GrPrevious
        className="text-customGray-200 z-40"
        style={{
          ...style,
          cursor: "pointer",
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(e);
  };
  return (
    <div onClick={handleClick}>
      <GrNext
        className="text-customGray-200"
        style={{
          ...style,
          cursor: "pointer",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};
