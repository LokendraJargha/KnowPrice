"use client";
import { dateFormat } from "@/lib/dataFormat";
import Link from "next/link";
import React from "react";

const BlogsListCard = ({ blogs }) => {
  const { Title, Slug, FeaturedImage, createdAt, createdBy } =
    blogs?.attributes;
  const imageUrl = `${FeaturedImage?.data?.attributes?.url}`;
  // console.log("write", blogs);

  return (
    <section className="text-gray-600 body-font py-4">
      <div className="container px-5 mx-auto w-full">
        <Link href={`/blog/${Slug}`}>
          <div className="flex items-center lg:w-full py-2 border-gray-200">
            <div className="sm:w-72 h-36 size-32 mr-5 sm:mr-10 inline-flex items-center justify-center bg-indigo-100  flex-shrink-0">
              <img
                className="object-cover w-full h-full rounded"
                alt="Image"
                src={`${imageUrl}`}
              />
            </div>
            <div className="flex-grow text-left ">
              <h2 className="text-gray-900 md:text-xl text-base title-font font-medium hover:text-customRed">
                {Title}
              </h2>
              <p>{}</p>
              <div className="flex items-center md:py-3 ">
                <span className="w-fit leading-relaxed text-sm font-black text-gray-900 mr-1">
                  <Link
                    href={`/blog/author/${createdBy?.data?.attributes?.username}`}
                  >
                    {createdBy?.data?.attributes?.username || "KnoPrice"},
                  </Link>
                </span>
                <em className="sm:text-xs text-[9px] py-1">
                  Posted {dateFormat(createdAt)}
                </em>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BlogsListCard;
