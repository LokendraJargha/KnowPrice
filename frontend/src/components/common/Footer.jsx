import React from "react";
import { footerList } from "@/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-customGrey max-w-screen-2xl mx-auto">
      <div className="flex sm:flex-row flex-col-reverse gap-3 items-center justify-between max-w-screen-xl mx-auto py-3 px-4 text-sm">
        <div>© 2024 KnoPrice | All Rights Reserved.</div>
        <div className="flex flex-wrap items-center justify-center space-x-5 text-sm">
          {footerList?.map((foterItem, index) => (
            <Link href={foterItem?.route} key={index}>
              <h1 className=" font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 py-2">
                {foterItem?.label}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
