import React from "react";
import Container from "../../commons/Container";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularBrands = () => {
  const data = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/2560px-Samsung_wordmark.svg.png",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Canon_logo.svg/2560px-Canon_logo.svg.png",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Vivo_logo_2019.svg/1200px-Vivo_logo_2019.svg.png",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/2560px-Acer_2011.svg.png",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 5,
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
    ],
  };

  return (
    <div className=" py-5 overflow-hidden">
      <Container>
        <h1 className="text-2xl text-customTextBlack mb-4">Popular Brands</h1>
        <div className="py-3 grayscale">
          {" "}
          <Slider {...settings}>
            {data?.map((items, index) => (
              <div key={index} className="my-auto mx-auto">
                <img
                  src={items.logo}
                  alt=""
                  className="p-3 h-28 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default PopularBrands;
