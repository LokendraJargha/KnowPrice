import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetchHeroProducts from "../../../service/fetchHeroProduct";
import fetchBestDeals from "../../../service/fetchBestDeals";
import LimitContent from "../../commons/LimitContent";
import RichTextBlock from "../../commons/RichTextBlock";
import { useNavigate } from "react-router-dom";

const FeatureProduct = () => {
  const { HeroInfo, fetchHeroProductsInfo } = fetchHeroProducts();
  const { BestDealsInfo, fetchBestDealsInfo } = fetchBestDeals();
  const navigate = useNavigate();

  useEffect(() => {
    fetchHeroProductsInfo();
    fetchBestDealsInfo();
  }, []);

  const data = [
    {
      heading: "Dell laptop price in Nepal 2024",
      dep: "    Lorem ipsum dolor sit amet , consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://www.transparentpng.com/download/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png",
    },
    {
      heading: "Samsung A54 Ultra 5G AI Smartphone",
      dep: "    Lorem ipsum dolor sit amet , consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://www.samsungmobilepress.com/file/A20AFBC5AD503566965D392E91618742CB5DA27E14BFBBBADB87121B0A7ADA2078CC174B3F38A9FF96D50E1755011F979945C4E8CC725F605687D548951D40042242598D49AD0FD2FE86B85085CC6B6B90A646A444171535D60D76DF97C05E7A48C83E1E1A8078C5409B9376961B65778895555E5F9B8419B4A818F4E3E68C78B656E8256E34DA4C010E876A0E95755657DB1692B07772FA731AD9A0A333FB1F",
    },
    {
      heading: "Sony Mirrorless Camera A7S  U03b17",
      dep: "    Lorem ipsum dolor sit amet , consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://www.pngall.com/wp-content/uploads/4/DSLR-Camera.png",
    },
    {
      heading: "BenQ LED monitor ZOWIE RL-55 1231",
      dep: " Lorem ipsum dolor sit amet , consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://storage.aoc.com/assets/8714/AOC_U28G2XU_PV_-FRONT-large.png",
    },
    {
      heading: "Samsung A54 Ultra 5G AI Smartphone",
      dep: " Lorem ipsum dolor sit amet , consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://pngfre.com/wp-content/uploads/laptop-png-from-pngfre-22.png",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 100000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dots: true,
  };

  return (
    <div className="w-full  overflow-hidden py-5 ">
      <Slider {...settings}>
        {HeroInfo &&
          HeroInfo?.data?.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between md:items-start sm:items-start items-center ">
                <div className=" lg:w-11/12 w-full bg-customGray h-full">
                  <h1 className="md:text-4xl  sm:text-xl w-full text-base my-5 mt-2  font-semibold text-customTextBlack">
                    {item?.attributes?.title}
                  </h1>
                  <p className="md:text-md text-sm font-light mt-9 lg:mt-2 md:py-2 sm:block hidden text-customTextBlack">
                    <LimitContent
                      content={item?.attributes?.product_description}
                      limit={150}
                      // ProductsInfo?.data?.[0]?.attributes?.description
                    />
                    {/* <RichTextBlock
                      content={item?.attributes?.description}
                      show={50}
                    /> */}
                  </p>
                  <button
                    onClick={() =>
                      navigate(`gadgets/${item?.attributes?.slug}`)
                    }
                    className="lg:my-9 my-4 px-3 md:px-4 sm:text-[10px] text-[8px] md:text-base bg-customBtn h-8 lg:h-12 rounded-md  text-customTextWhite"
                  >
                    LEARN MORE
                  </button>
                </div>
                <div className="  md:mx-2 w-[510px] h-[150px] sm:w-[720px] sm:h-[320px] bg-customGray m-2 bg-none">
                  <img
                    className="sm:w-[700px] sm:h-[300px] w-[510px] h-[150px] mx-auto my-auto object-fillmx-auto object-contain mix-blend-multiply"
                    src={`${process.env.REACT_APP_URL}${item?.attributes?.product_png_image?.data[0]?.attributes?.url}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default FeatureProduct;
