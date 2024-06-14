import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import fetchAllBlogs from "../../../service/fetchAllBlogs";
import fetchBlog from "../../../service/fetchBlogs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import fetchGadgetsBlogs from "../../../service/fetchGadgetsBlogs";
import { DateFormate } from "../../../custom/DateFormate";

const TechNews = () => {
  const navigate = useNavigate();
  const { gadgetBlogsInfo, fetchGadgetsBlogsInfo } = fetchGadgetsBlogs();
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    fetchGadgetsBlogsInfo();
  }, []);

  const loadMore = () => {
    setVisible(visible + 3);
  };

  if (gadgetBlogsInfo?.length === 0)
    return (
      <div className="lg:w-[75%] sm:[90%] w-full lg:mr-5 mr-0">loading...</div>
    );

  return (
    <div className="lg:w-[75%] sm:[90%] w-full lg:mr-5 mr-0 ">
      <div className="flex w-full items-center justify-between my-6 ">
        <h1 className="text-2xl text-customTextBlack ">Tech News</h1>
        <div className="flex items-center gap-3">
          <h1 className="font-light text-[10px] md:text-xs text-customTextBlack ">
            SEE ALL
          </h1>
          <FaArrowRightLong className="text-customBtn" />
        </div>
      </div>
      <div className="flex flex-col gap-6 mx-auto my-3">
        {gadgetBlogsInfo?.data?.slice(0, visible)?.map((item, index) => (
          <div key={index} className="flex items-center gap-3 ">
            <div
              onClick={() => navigate(`blog/${item?.attributes?.slug}`)}
              class="block shrink-0"
            >
              <img
                alt=""
                src={`${process.env.REACT_APP_URL}${item?.attributes?.coverImg?.data?.attributes?.url}`}
                class="lg:w-36 lg:h-24 w-24 h-16 rounded-md my-auto object-cover cursor-pointer"
              />
            </div>
            <div
              onClick={() => navigate(`blog/${item?.attributes?.slug}`)}
              className="w-11/12 cursor-pointer"
            >
              <p className="md:text-base text-xs font-normal text-customTextBlack ">
                {item?.attributes?.title}
              </p>
              <div className="flex justify-between mt-3 items-end">
                <span className="rounded-sm bg-customCategory py-[2px] sm:px-2 px-1 sm:text-xs text-[8px] text-customTextWhite">
                  {item?.attributes?.categories?.data[0]?.attributes?.title}
                </span>

                <em className="sm:text-xs text-[8px] ">
                  {DateFormate(item?.attributes?.createdAt)}
                </em>
              </div>
            </div>
          </div>
        ))}
      </div>
      {gadgetBlogsInfo?.data?.length > visible && (
        <div
          onClick={loadMore}
          className="lg:hidden block my-3 py-2 border w-full"
        >
          <h1 className="flex items-center justify-center text-xs sm:text-base">
            LOAD MORE..
          </h1>
        </div>
      )}
    </div>
  );
};

export default TechNews;
