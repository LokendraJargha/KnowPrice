"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React, { useState } from "react";

const RichTextProducts = ({ content = [], initialDisplayParagraphs = 2 }) => {
  const [showContent, setShowContent] = useState(false);

  const handleShow = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="relative text-gray-900">
      {!showContent && content?.length > initialDisplayParagraphs && (
        <div>
          <div className="flex justify-center absolute bottom-0 left-[50%] w-full -translate-x-1/2 z-20">
            <button
              className="bg-customRed text-white px-4 py-2 rounded-md mt-7  "
              onClick={handleShow}
            >
              Read More
            </button>
          </div>
          <div className="bg-gradient-to-t from-white to-transparent absolute w-full bottom-0 h-20"></div>
        </div>
      )}
      <BlocksRenderer
        blocks={{
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return <h1 className="text-3xl font-semibold">{children}</h1>;
              case 2:
                return <h2 className="text-2xl font-semibold">{children}</h2>;
              case 3:
                return <h3 className="text-xl font-semibold">{children}</h3>;
              case 4:
                return <h4 className="text-lg font-semibold">{children}</h4>;
              case 5:
                return <h5 className="text-base font-semibold">{children}</h5>;
              case 6:
                return <h6 className="text-sm font-semibold">{children}</h6>;
              default:
                return <h7 className="text-sm font-semibold">{children}</h7>;
            }
          },
          paragraph: ({ children }) => (
            <p className="text-base text-customTextBlack font-normal my-4 text-gray-700">
              {children}
            </p>
          ),

          image: ({ image }) => {
            return (
              <img
                src={image.url}
                width={900}
                height={600}
                alt={image.alternativeText || ""}
              />
            );
          },
          list: ({ children }) => {
            if (!Array.isArray(children)) return null;
            return (
              <ul className="list-disc ml-4 space-y-2 text-gray-700">
                {children?.map((item, index) => (
                  <li
                    key={index}
                    className="text-base text-customTextBlack font-normal "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          },
          quote: ({ children }) => {
            return (
              <blockquote className="border-l-4 border-customTextBlack pl-4 italic my-4 text-gray-700">
                <p className="text-base text-customTextBlack font-normal mb-2">
                  {children}
                </p>
              </blockquote>
            );
          },
        }}
        content={
          showContent ? content : content.slice(0, initialDisplayParagraphs)
        }
      />
      {showContent && (
        <div className="flex justify-center my-5">
          <button
            className="bg-customRed text-white px-4 py-2 rounded-md"
            onClick={handleShow}
          >
            Read Less
          </button>
        </div>
      )}
    </div>
  );
};

export default RichTextProducts;
