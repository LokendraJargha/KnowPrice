import React from "react";
import Container from "../commons/Container";

import mail_logo from "../../Images/newsletter 1.png";

const SubscribeForm = () => {
  return (
    <div className=" absolute z-50 inset-x-0 bottom-1/2 md:bottom-1/3">
      <Container>
        <div className="flex bg-customBgWhite rounded-lg drop-shadow-[2px_2px_4px_rgba(0.1,0,0,0.1)]">
          <div className="md:w-1/2 md:block hidden">
            <img src={mail_logo} alt="" className="size-full" />
          </div>
          <div className="md:w-1/2 w-full bg-customWhite ">
            <div className="flex flex-col  space-y-2 p-5 md:p-10">
              <h1 className="text-2xl text-center md:text-left text-customTextBlack mb-3">
                SUBSCRIBE NOW
              </h1>
              <p className="md:text-md text-sm text-center md:text-left font-light mt-9 lg:mt-2 md:py-2 text-customTextBlack">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Aliquam
                eget pellentes speru lotsh hilan .
              </p>
              <div className="flex flex-col space-y-4">
                <input
                  className="text-sm outline-none h-10 p-2 rounded-md border border-gray-300"
                  type="email"
                  placeholder="Email"
                />
                <button className="bg-customBtn text-xl text-customTextWhite px-4 py-2 rounded-md ">
                  SUBSCRIBE
                </button>
              </div>
              <p className="md:text-md text-xs text-center font-light mt-9 lg:mt-2 md:py-2 text-customTextBlack">
                By clicking subscribe button you are agreeing to our terms &
                condition
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubscribeForm;
