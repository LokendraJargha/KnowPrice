import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";

const RichTextBlock = ({ content }) => {
  return (
    <div className="text-gray-900">
      <BlocksRenderer
        blocks={{
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return <h1 className="text-5xl font-black pb-4">{children}</h1>;
              case 2:
                return <h2 className="text-4xl font-black pb-4">{children}</h2>;
              case 3:
                return <h3 className="text-3xl font-black pb-4">{children}</h3>;
              case 4:
                return <h4 className="text-3xl font-black pb-4">{children}</h4>;
              case 5:
                return <h5 className="text-2xl font-black pb-4">{children}</h5>;
              case 6:
                return <h6 className="text-lg font-black pb-4">{children}</h6>;
              default:
                return <h7 className="text-lg font-black pb-4">{children}</h7>;
            }
          },
          paragraph: ({ children }) => (
            <p className="text-base text-customTextBlack font-base mb-4 text-gray-800">
              {children}
            </p>
          ),

          image: ({ image }) => {
            return (
              <img
                className="pb-4"
                src={image.url}
                width={900}
                height={100}
                alt={image.alternativeText || ""}
              />
            );
          },
          list: ({ children }) => {
            if (!Array.isArray(children)) return null;
            return (
              <ul className="list-disc ml-4 space-y-2 text-gray-800 mb-4">
                {children?.map((item, index) => (
                  <li
                    key={index}
                    className="text-base text-customTextBlack font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          },
          quote: ({ children }) => {
            return (
              <blockquote className="border-l-4 border-customTextBlack pl-4 italic my-4 text-gray-800 mb-4">
                <p className="text-base text-customTextBlack font-bold mb-2">
                  {children}
                </p>
              </blockquote>
            );
          },
        }}
        content={content}
      />
    </div>
  );
};

export default RichTextBlock;
