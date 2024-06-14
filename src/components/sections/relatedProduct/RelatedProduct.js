import React, { useEffect, useState } from "react";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetchAllProducts from "../../../service/fetchAllProducts";
import { useNavigate } from "react-router-dom";

const RelatedProduct = ({ categories, cpu }) => {
  const naviigate = useNavigate();
  const { fetchAllProductsInfo, allProductsInfo } = fetchAllProducts();
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    fetchAllProductsInfo();
  }, []);

  const handleNavigation = (slug) => {
    naviigate(`/gadgets/${slug}`);
  };

  useEffect(() => {
    const filtered = allProductsInfo?.data?.filter((product) => {
      return (
        product?.attributes?.categories?.data[0]?.attributes?.title ===
          categories || product?.attributes?.Key_Specs?.[0]?.CPU?.key === cpu
      );
    });
    setFilterProducts(filtered);
  }, [categories, cpu, allProductsInfo]);

  console.log("related", allProductsInfo);
  console.log("filter", filterProducts);

  const setting = {
    dots: false,
    speed: 500,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <div className="py-3">
      <div>
        <h1 className="text-2xl text-customTextBlack my-4"> Related Product</h1>
      </div>
      <div>
        <Slider {...setting}>
          {filterProducts?.map((item, index) => (
            <div key={index} item={item}>
              <div className="rounded-md px-2 drop-shadow-[2px_2px_2px_2px_rgba(0.1,0,0,0.1)]">
                <div
                  onClick={() => handleNavigation(item?.attributes?.slug)}
                  className="flex items-center justify-center"
                >
                  <img
                    src={`${process.env.REACT_APP_URL}${item?.attributes?.product_png_image?.data?.[0]?.attributes?.url}`}
                    className="sm:size-36 size-28 mx-auto object-cover mix-blend-multiply"
                    alt=""
                  />
                </div>
                <h1 className="md:text-base text-xs text-center font-normal text-customTextBlack ">
                  {item?.attributes?.title}
                </h1>
                <p className="text-base font-medium text-center py-2 text-customTextBlack ">
                  {item?.attributes?.price?.[0]?.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProduct;

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
          right: "200%",
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
          left: "100%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};
