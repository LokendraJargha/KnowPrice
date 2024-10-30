import { truncateText } from "@/lib/truncateText";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const SecondaryProductCard = ({ props }) => {
  const { Title, Thumbnail, Price, Slug } = props?.attributes;
  const price = Price?.[0]?.Price;
  const imageUrl = `${Thumbnail?.data?.attributes?.url}`;

  return (
    <section className={`text-gray-600 body-font w-full text-center`}>
      <div className="flex items-center justify-center w-full">
        <Link href={`/product/${Slug}`}>
          <div className="px-4 py-2 sm:mb-0 mb-6">
            <div
              className={`rounded-lg sm:max-w-lg md:size-56 size-36  overflow-hidden`}
            >
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={`${imageUrl}`}
              />
            </div>
            <h2 className="md:text-xl text-lg h-11 font-medium title-font text-gray-900 mt-3">
              {truncateText(Title, 20)}
            </h2>
            <p className="text-lg leading-relaxed mt-2">{price}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SecondaryProductCard;
