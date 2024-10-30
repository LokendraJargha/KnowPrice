import { dateFormat } from "@/lib/dataFormat";
import Link from "next/link";
import React from "react";

const PrimaryBlogsCard = ({ blogs }) => {
  const { Title, Slug, FeaturedImage, createdAt, createdBy } =
    blogs?.attributes;
  const imageUrl = `${FeaturedImage?.data?.attributes?.url}`;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 sm:mx-auto w-full">
        <Link href={`/blog/${Slug}`}>
          <div className="flex flex-col sm:flex-row sm:items-center lg:w-full py-2 border-gray-200">
            <div className="w-full sm:w-44 sm:h-28 mb-3 sm:mr-5 inline-flex items-center justify-center bg-indigo-100  flex-shrink-0">
              <img
                className="object-cover w-full h-full rounded"
                alt="Image"
                src={`${imageUrl}`}
              />
            </div>
            <div className="flex-grow text-left ">
              <h2 className="text-gray-900 md:text-lg text-base title-font font-medium">
                {Title}
              </h2>
              <div className="flex items-center justify-between md:py-2">
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

export default PrimaryBlogsCard;
