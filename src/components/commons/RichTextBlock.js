import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React, { useState } from "react";

const RichTextBlock = ({ content, show }) => {
  // const [isExpanded, setIsExpanded] = useState(null);

  // const toggleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // };

  // const renderParagraph = (children) => {
  //   if (type === "productPage") {
  //     const paragraph = children.slice(0, limit).concat("...");
  //     return (
  //       <p className="text-base text-customTextBlack font-normal my-4">
  //         {isExpanded ? children : paragraph}
  //       </p>
  //     );
  //   } else {
  //     return (
  // <p className="text-base text-customTextBlack font-normal my-4">
  //   {children}
  // </p>
  //     );
  //   }
  // };

  return (
    <div>
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
            <p className="text-base text-customTextBlack font-normal my-4">
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
            console.log("eror", children);
            return (
              <ol className="list-disc ml-4 space-y-2">
                {children?.map((item, index) => (
                  <li
                    key={index}
                    className="text-base text-customTextBlack font-normal"
                  >
                    {item}
                  </li>
                ))}
              </ol>
            );
          },
          quote: ({ children }) => {
            return (
              <blockquote className="border-l-4 border-customTextBlack pl-4 italic my-4">
                <p className="text-base text-customTextBlack font-normal mb-2">
                  {children}
                </p>
              </blockquote>
            );
          },
        }}
        content={content}
      />
      {/* {show && (
        <button
          // onClick={toggleExpand}
          className="text-customBgWhite bg-customBtn px-2 p-1 rounded-md mx-auto mt-2"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )} */}
    </div>
  );
};

export default RichTextBlock;
