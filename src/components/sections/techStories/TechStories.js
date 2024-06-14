import React, { useEffect } from "react";
import Container from "../../commons/Container";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import fetchAllBlogs from "../../../service/fetchAllBlogs";
import { DateFormate } from "../../../custom/DateFormate";

const TechStories = () => {
  const navigate = useNavigate();
  const { allBlogsInfo, fetchAllBlogsInfo } = fetchAllBlogs();

  useEffect(() => {
    fetchAllBlogsInfo();
  }, []);

  const data = [
    {
      title: "Samsung A54 Ultra 5G AI Launch Smartphone..",
      category: "Artificial Intelligence",
      image:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      date: "21, July, 2024",
    },
    {
      title: "Samsung A54 Ultra 5G AI Smartphone..",
      category: "Internet",
      image:
        "https://cyber.olympiadsuccess.com/assets/images/cyber_square/cyber_topic_15.jpg",
      date: "21, July, 2024",
    },
    {
      title: "The world's leading AI companies pledge...",
      category: "Internet",
      image:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7CSYWBFPXNMV5MOYSEW6ULXWNU.jpg",
    },
    {
      title: "Elon Musk says it's his turn to have the...",
      category: "Internet",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/musk-was-scheduled-to-visit-india-during-april-21-and-22--and-was-expected-to-meet-prime-minister-na-2029102-16x9_0.jpg?VersionId=yOv33lBgQasEYAEwB1a7ke2BSiILiZ8Z&size=690:388",
    },
    {
      title: "Samsung A54 Ultra 5G AI Smartphone launch..",
      category: "Internet",
      image:
        "https://cyber.olympiadsuccess.com/assets/images/cyber_square/cyber_topic_15.jpg",
      date: "21, July, 2024",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
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

  if (allBlogsInfo?.length === 0) {
    return <div className=" py-5 pb-52 overflow-hidden">Loading...</div>;
  }

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length) + "...";
    }
    return text;
  };

  return (
    <div className=" py-5 pb-52 overflow-hidden">
      <Container>
        <h1 className="text-2xl text-customTextBlack mb-5">Tech Stories</h1>
        <Slider {...settings}>
          {allBlogsInfo?.data?.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`blog/${item?.attributes?.slug}`)}
            >
              <img
                alt=""
                src={`${process.env.REACT_APP_URL}${item?.attributes?.coverImg?.data?.attributes?.url}`}
                class="lg:w-52 lg:h-44 w-44 h-36 rounded-md my-auto object-cover cursor-pointer"
              />
              <div className="lg:w-52 w-44 flex flex-col py-3">
                <span className="w-fit rounded-sm bg-customCategory py-[2px] sm:px-2 px-1 sm:text-xs text-[8px] text-customTextWhite cursor-pointer">
                  {item?.attributes?.categories?.data[0]?.attributes?.title}
                </span>
                <p className="lgw:-52 w-44 md:text-base text-xs font-normal text-customTextBlack cursor-pointer">
                  {truncateText(item?.attributes?.title, 38)}
                </p>
                <em className="sm:text-xs py-1 text-[8px] cursor-pointer">
                  Posted {DateFormate(item?.attributes?.createdAt)}
                </em>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default TechStories;
