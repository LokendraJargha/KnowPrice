import React from "react";
import Container from "../../commons/Container";

const PopularComparisons = () => {
  const data = [
    {
      products: [
        {
          img: "https://www.minnstarbank.com/assets/uploads/2021/10/Android-Mobile-Download-Free-PNG-e1635540728658.png",
          name: "Samsung A54 Ultra 5G AI Smartphone",
        },
        {
          img: "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png",
          name: "Samsung A54 Ultra 5G AI Smartphone",
        },
      ],
    },
    {
      products: [
        {
          img: "https://www.minnstarbank.com/assets/uploads/2021/10/Android-Mobile-Download-Free-PNG-e1635540728658.png",
          name: "Samsung A54 Ultra 5G AI Smartphone",
        },
        {
          img: "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png",
          name: "Samsung A54 Ultra 5G AI Smartphone",
        },
      ],
    },
    {
      products: [
        {
          img: "https://www.minnstarbank.com/assets/uploads/2021/10/Android-Mobile-Download-Free-PNG-e1635540728658.png",
          name: "Samsung A54 Ultra 5G AI Smartphone",
        },
        {
          img: "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png",
          name: "Samsung A54 Ultra 5G AI Smartphone",
        },
      ],
    },
  ];

  return (
    <div className="py-5 my-3">
      <Container>
        <h1 className="text-2xl text-customTextBlack mb-3">
          Popular Comprasion
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 ">
              <div className="flex w-full gap-2 items-start ">
                <div className="flex md:w-40 w-full items-center justify-center space-y-5">
                  <div className="space-y-2">
                    <img
                      className="bg-customBgImg w-32 h-32 sm:min-w-52 sm:min-h-52 md:min-w-40 md:min-h-40 object-contain"
                      src={item.products[0]?.img}
                    />
                    <p className="text-sm text-center">
                      {item.products[0]?.name}
                    </p>
                  </div>
                </div>
                <div className="flex text-xs items-center mt-16 justify-center bg-customGreen rounded-full">
                  <p className="text-white text-center p-2">VS</p>
                </div>
                <div className="flex md:w-40 w-full items-center justify-center space-y-5">
                  <div className="space-y-2 items-center">
                    <img
                      className="bg-customBgImg text-center w-32 h-32 sm:min-w-52 sm:min-h-52 md:min-w-40 md:min-h-40 object-contain"
                      src={item.products[1]?.img}
                    />
                    <p className="text-sm text-center">
                      {item.products[1]?.name}
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-customBtn w-full text-customTextWhite px-3 py-2 rounded-md ">
                Compare
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularComparisons;
