import { truncateText } from "@/lib/truncateText";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const PrimaryProductCard = ({ props }) => {
  const { Title, Thumbnail, Price, Slug } = props?.attributes;
  const price = Price?.[0]?.Price;
  const imageUrl = `${Thumbnail?.data?.attributes?.url}`;
  return (
    <section className="text-gray-600 body-font w-full">
      <div className=" w-full">
        <Link href={`/product/${Slug}`}>
          <div className="flex items-center lg:w-full py-5 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-28 w-28 sm:mr-7 inline-flex items-center justify-center flex-shrink-0">
              <img
                className="object-cover object-center rounded w-full h-full"
                alt="Product"
                src={`${imageUrl}`}
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="md:text-xl text-lg h-11 font-medium title-font text-gray-900 mt-3">
                {truncateText(Title, 20)}
              </h2>
              <p className="leading-relaxed text-lg py-1">{price}</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PrimaryProductCard;
