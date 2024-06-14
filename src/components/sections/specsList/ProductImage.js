import React from "react";

const ProductImage = ({ imageUrl, setCurrentImage, currentImage }) => {
  return (
    <>
      {" "}
      <div className="flex flex-row w-full lg:w-1/2 my-2 gap-2">
        <div className="w-28 h-96 md:h-[440px] hidden sm:block overflow-scroll overscroll-x-auto gap-2 ">
          {imageUrl?.map((image, index) => (
            <img
              key={index}
              src={`${process.env.REACT_APP_URL}${image}`}
              alt=""
              className="object-cover p-1 "
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
        <div className="w-full h-96 md:h-[440px] bg-customWhite rounded-md drop-shadow-[3px_5px_4px_rgba(0.4,0,0.2,0.1)]">
          {imageUrl?.length > 0 && (
            <img
              className="object-cover w-full h-96 md:h-[440px]"
              src={`${process.env.REACT_APP_URL}${imageUrl[currentImage]}`}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="w-wull h-20 flex sm:hidden overflow-scroll gap-2 ">
        {imageUrl?.map((image, index) => (
          <img
            key={index}
            src={`${process.env.REACT_APP_URL}${image}`}
            alt=""
            className="object-cover p-1 "
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductImage;
