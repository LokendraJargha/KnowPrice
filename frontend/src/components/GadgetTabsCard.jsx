import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const GadgetTabsCard = ({ props }) => {
  const { Title, Thumbnail, Price, Slug } = props?.attributes;
  const price = Price?.[0]?.Price;
  const imageUrl = `${Thumbnail?.data?.attributes?.url}`;
  return (
    <section className={`text-gray-600 body-font w-full text-center`}>
      <div className="flex items-center justify-center w-full">
        <Link href={`/product/${Slug}`}>
          <div className="w-full px-2 sm:mb-0 mb-6">
            <div
              className={`rounded-lg sm:max-w-lg md:h-32 md:w-40 size-32  overflow-hidden`}
            >
              <img
                alt="content"
                className="object-contain object-center h-full w-full"
                src={`${imageUrl}`}
              />
            </div>
            <h2 className="text-lg h-11 font-medium title-font text-gray-900 mt-3">
              {Title}
            </h2>
            <p className="text-lg leading-relaxed mt-2">{price}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default GadgetTabsCard;
