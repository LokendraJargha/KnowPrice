import { dateFormat } from "@/lib/dataFormat";
import { truncateText } from "@/lib/truncateText";
import Link from "next/link";
import React from "react";

const SecondaryBlogCard = ({ blogs }) => {
  const { Title, Slug, FeaturedImage, createdAt, createdBy } =
    blogs?.attributes;
  const imageUrl = `${FeaturedImage?.data?.attributes?.url}`;

  return (
    <section className="text-gray-600 body-font w-full">
      <div className="flex items-center justify-center w-full">
        <Link href={`/blog/${Slug}`}>
          <div className="p-4  sm:mb-0 mb-6">
            <div className="rounded-lg sm:max-w-lg md:h-44 md:w-72 h-36  overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={`${imageUrl}`}
              />
            </div>
            <div className="flex flex-col py-3">
              <span className="w-fit rounded-sm text-sm font-bold">
                {/* Mobile */}
              </span>
              <h2 className="text-gray-900 h-24 md:h-16 text-base sm:text-lg title-font font-medium mb-1">
                {truncateText(Title, 49)}
              </h2>
              <span className="w-fit leading-relaxed text-sm font-black text-gray-900 mr-1">
                <Link
                  href={`/blog/author/${createdBy?.data?.attributes?.username}`}
                >
                  {createdBy?.data?.attributes?.username || "KnoPrice"},
                </Link>
              </span>
              <em className="text-xs py-1">Posted {dateFormat(createdAt)}</em>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SecondaryBlogCard;
