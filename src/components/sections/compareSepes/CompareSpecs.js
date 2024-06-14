import React from "react";
import Container from "../../commons/Container";

import { IoIosSearch } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

const CompareSpecs = () => {
  const data = [
    {
      products: [
        {
          img: "https://www.minnstarbank.com/assets/uploads/2021/10/Android-Mobile-Download-Free-PNG-e1635540728658.png",
          name: "Samsung A54 Ultra 5G AI Smartphone",
          price: "9,990",
        },
        {
          img: "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png",
          name: "Samsung A54 Ultra 5G AI Smartphone",
          price: "10,990",
        },
      ],
    },
  ];
  return (
    <div>
      <Container>
        <div className="space-y-3">
          <h1>Samsung Galaxy S21 vs Iphone 13 Pro Max</h1>
          <div className="">
            <GadgetData data={data} />
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default CompareSpecs;

const GadgetData = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between gap-10">
          <div className="flex flex-col w-3/12 items-center justify-center space-y-2">
            <div className="space-y-2">
              <img
                className="bg-customBgImg rounded-md w-60 h-48 object-contain"
                src={item.products[index]?.img}
              />
              <h1 className="text-base font-normal text-customTextBlack ">
                {item.products[index].name}
              </h1>
              <h1 className="md:text-lg text-sm font-normal text-customTextBlack ">
                Rs {item.products[index].price}
              </h1>
            </div>
            <button className="bg-customBtn w-full text-customTextWhite py-2 rounded-md ">
              Find Available Store
            </button>
          </div>
          <div className="flex text-xs items-center mt-16 justify-center  bg-customGreen rounded-full">
            <p className="text-white p-3">VS</p>
          </div>
          <div className="flex flex-col  w-3/12 items-center justify-center space-y-2">
            <div className="space-y-2">
              <img
                className="bg-customBgImg rounded-md w-60 h-48 object-contain"
                src={item.products[index]?.img}
              />
              <h1 className="text-base font-normal text-customTextBlack ">
                {item.products[index].name}
              </h1>
              <h1 className="md:text-lg text-sm font-normal text-customTextBlack ">
                Rs {item.products[index].price}
              </h1>
            </div>
            <button className="bg-customBtn w-full text-customTextWhite py-2 rounded-md ">
              Find Available Store
            </button>
          </div>
          <div className="flex text-xs items-center mt-16 justify-center bg-customGreen rounded-full">
            <p className="text-white p-3">VS</p>
          </div>
          <div className="flex items-center border bg-customWhite justify-between p-2 rounded-md w-full lg:w-2/5 h-[40px]">
            <IoMdAdd className="size-[20px] text-customGray-200" />
            <input
              className="text-sm outline-none w-5/6 h-11/12"
              placeholder="Search Product Name Here...."
              type="text"
            />
            <IoIosSearch className="size-[20px] text-customGray-200" />
          </div>
        </div>
      ))}
    </>
  );
};

const SpecsTable = () => {
  return (
    <>
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-700 sm:col-span-2">Mr</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Occupation</dt>
            <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Salary</dt>
            <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Bio</dt>
            <dd className="text-gray-700 sm:col-span-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              facilis debitis explicabo doloremque impedit nesciunt dolorem
              facere, dolor quasi veritatis quia fugit aperiam aspernatur neque
              molestiae labore aliquam soluta architecto?
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};
