import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareSocial = ({ currentPageUrl }) => {
  // const currentPageUrl = window?.location?.href;
  return (
    <span className="flex text-gray-600 items-center py-2 gap-2">
      <span className="my-auto ">Share this on:</span>
      <FacebookShareButton url={currentPageUrl}>
        <FaFacebookF className="size-5 hover:text-[#0765FF]" />
      </FacebookShareButton>
      <TwitterShareButton url={currentPageUrl}>
        <FaXTwitter className="size-5 text-gray-600 hover:text-[#000000]" />
      </TwitterShareButton>
      <WhatsappShareButton url={currentPageUrl}>
        <FaWhatsapp className="size-5 hover:text-[#31D14F]" />
      </WhatsappShareButton>
      <LinkedinShareButton url={currentPageUrl}>
        <FaLinkedinIn className="size-5 border bg-[#4B5563] hover:bg-[#0C65C2] text-white rounded-sm p-1" />
      </LinkedinShareButton>
    </span>
  );
};

export default ShareSocial;
