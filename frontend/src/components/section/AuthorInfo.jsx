import React from "react";
import WidthWrapper from "../common/WidthWrapper";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Separator } from "../ui/separator";

const AuthorInfo = ({ info }) => {
  const author = info?.data?.[0]?.attributes?.author_infos?.data?.attributes;
  return (
    <div className="my-8 px-5 text-gray-600 gap-4 bg-gray-100 p-3 rounded-md">
      <span className="flex md:flex-row flex-col gap-5">
        <span className="size-28">
          <img
            src="https://dummyimage.com/100x100"
            className="rounded-full w-full h-full"
            alt=""
          />
        </span>
        <span>
          <h3 className=" py-3 sm:text-2xl text-xl font-semibold title-font">
            {author?.UserName}
          </h3>

          <span className="flex flex-wrap items-center gap-2">
            Follow {author?.UserName} on:
            <span className="flex gap-3 cursor-pointer">
              {author?.Facebook && (
                <Link href={`${author?.Facebook}`} target="_blank">
                  <FaFacebookF className="size-5 hover:text-[#0765FF]" />
                </Link>
              )}
              {author?.Instragram && (
                <Link href={`${author.Instragram}`} target="_blank">
                  <FaInstagram className="size-5 hover:text-[#F7008E]" />
                </Link>
              )}
              {author?.LinkedIn && (
                <Link href={`${author.LinkedIn}`} target="_blank">
                  <FaLinkedinIn className="size-5 border bg-[#4B5563] hover:bg-[#0C65C2] text-white rounded-sm p-1" />
                </Link>
              )}
              {author?.Twitter && (
                <Link href={`${author.Twitter}`} target="_blank">
                  <FaXTwitter className="size-5 text-gray-600 hover:text-[#000000]" />
                </Link>
              )}
            </span>
          </span>
        </span>
      </span>
      <Separator className="my-6 w-11/12" />
      <p className=" text-base font-bold pb-5">{author?.Description}</p>
    </div>
  );
};

export default AuthorInfo;
