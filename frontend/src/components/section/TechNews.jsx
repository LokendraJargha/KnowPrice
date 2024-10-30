"use client";
import React, { useState } from "react";
import PrimaryBlogsCard from "../common/PrimaryBlogsCard";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const TechNews = ({ blogs }) => {
  const [visible, setVisible] = useState(4);

  return (
    <div className={`flex flex-col lg:w-1/2`}>
      <div className="flex justify-between items-center">
        <h1 className="px-5 py-3 sm:text-2xl text-xl font-semibold title-font">
          Tech News
        </h1>
        <Link
          href={`/blog`}
          className="mt-3 text-sm px-2 inline-flex items-center"
        >
          See All
          <IoIosArrowRoundForward size={25} />
        </Link>
      </div>
      <div>
        {blogs?.data?.slice(0, visible)?.map((item, index) => (
          <PrimaryBlogsCard key={index} blogs={item} />
        ))}
      </div>
      <div>
        {blogs?.data?.length > visible && (
          <div
            onClick={() => {
              setVisible(visible + 3);
            }}
            className="lg:hidden block my-3 py-2 mx-5 border "
          >
            <h1 className="flex items-center justify-center text-xs sm:text-base">
              LOAD MORE..
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechNews;
