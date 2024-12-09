"use client";
import React, { useEffect, useState } from "react";
import { navList } from "@/constant";
// import logo from "@/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "../ui/sheet";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SearchComponent } from "./SearchComponent";

const NavBar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log("sha", shadow);
  return (
    <nav
      className={`${
        shadow ? "shadow-xl border" : ""
      }  sticky  top-0 z-50 bg-white`}
    >
      <div className="flex flex-wrap  mx-auto items-center max-w-screen-xl px-4">
        <div className="flex items-center justify-between w-full pt-4">
          <div className="flex">
            <Sheet>
              <SheetTrigger>
                <AlignJustify className="flex md:hidden mx-2" />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetDescription className="m-5">
                  {navList.map((navItem, index) => (
                    <Link href={navItem.route} key={index}>
                      <h1 className="m-4 transition ease-in-out delay-150 hover:translate-x-1 duration-300 hover:scale-110">
                        {navItem.label}
                      </h1>
                    </Link>
                  ))}
                </SheetDescription>
              </SheetContent>
            </Sheet>
            <Link href={"/"} className="text-2xl font-extrabold text-customRed">
              {/* <Image src={logo} className="h-8 w-32" alt="DocsSchedule" /> */}
              KnoPrice
            </Link>
          </div>
          <SearchComponent className={"w-1/2 md:flex hidden"} />
          <Link href={"/compare"} className="flex">
            <p className=" md:px-5 px-2 text-customBule transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Compare
            </p>
            <Scale className="text-gray-500 mx-2" />
          </Link>
        </div>
        <SearchComponent className={"w-full flex md:hidden"} />
        <div className="w-full md:flex hidden items-center justify-between text-lg py-5">
          <div className="flex items-center md:space-x-12">
            {navList.map((navItem, index) => (
              <Link href={navItem.route} key={index}>
                <h1 className=" font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                  {navItem.label}
                </h1>
              </Link>
            ))}
          </div>
          <div className="lg:flex hidden items-center gap-2">
            <h1>FollowUs:</h1>
            <div className="bg-customRed py-2 flex justify-center items-center rounded-2xl px-3 text-white divide-x-2">
              <FaFacebookF className="w-10" />
              <FaInstagram className="w-10" />
              <FaXTwitter className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
