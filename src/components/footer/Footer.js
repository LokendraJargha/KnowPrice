import React, { useEffect } from "react";
import Container from "../commons/Container";
import facebook from "../../Images/Facebook.png";
import instagram from "../../Images/Instagram.png";
import twitter from "../../Images/Twitter.png";
import telephone from "../../Images/Telephone.png";
import mailicon from "../../Images/Mail.png";
import SubscribeForm from "../subscribeForm/SubscribeForm";
import TechStories from "../sections/techStories/TechStories";
import useCopyRightTextStore from "../../store/useCopyRightTextStore";
import useContactInfoStore from "../../store/useContactInfoStore";
import useSocialMediaStore from "../../store/ useSocialMediaStore";
import { Link } from "react-router-dom";
import useMenuStore from "../../store/useMenuStore";

const Footer = () => {
  const { copyRightInfo, fetchCopyRightInfo } = useCopyRightTextStore();
  const { contactInfo, fetchContactInfo } = useContactInfoStore();
  const { socialMediaData, fetchSocialMediaData } = useSocialMediaStore();
  const { menus, fetchMenus } = useMenuStore();

  useEffect(() => {
    fetchCopyRightInfo();
    fetchContactInfo();
    fetchSocialMediaData();
    fetchMenus();
  }, []);

  return (
    <div className="bg-customBalck text-customTextWhite sm:pt-60 pt-44 pb-1">
      <Container>
        <div className="flex md:flex-row flex-col md:justify-between w-full">
          <div className="md:w-1/3 py-3">
            <div className="md:block hidden">
              <h1 className="py-3 text-xl font-medium ">KNOPRICE</h1>
              <p className="text-sm font-light">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Aliquam
                eget pellentes quam. Aliquam sit amet eleifend metus.
              </p>
            </div>
            <div className="flex md:flex-col my-4 gap-2 md:items-start justify-center items-center">
              <h1 className="text-lg my-auto  md:text-base font-normal">
                {socialMediaData?.data?.attributes?.FollowUs}
              </h1>
              <div className="flex py-1 my-auto gap-5">
                {Array.isArray(socialMediaData?.data?.attributes?.icon) &&
                  socialMediaData?.data?.attributes?.icon?.map(
                    (item, index) => (
                      <Link
                        key={index}
                        to={item.slug}
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src={`${process.env.REACT_APP_URL}${item?.iconLogo?.data?.attributes?.url}`}
                          className=" h-5"
                        />
                        <img alt="" />
                      </Link>
                    )
                  )}
              </div>
            </div>
          </div>
          <div className="flex justify-between lg:mx-20 md:w-1/3 py-3">
            {Array.isArray(menus?.data?.attributes?.MenuList) &&
              menus?.data?.attributes?.MenuList?.map((item, index) => (
                <div key={index} className="px-3">
                  <h2 className="py-3 text-xl font-normal">{item?.titile}</h2>
                  <ul className="text-sm font-light space-y-1">
                    {Array.isArray(item?.list) &&
                      item?.list?.map((listItem, index) => (
                        <Link
                          to={listItem?.slug}
                          key={index}
                          rel="noopener"
                          target="_blank"
                        >
                          <li key={index}>{listItem?.menuName}</li>
                        </Link>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
          <div className="md:w-1/3 w-full md:items-start items-center md:text-start flex flex-col py-3">
            <h1 className="py-3 text-xl font-normal">
              {contactInfo?.data?.attributes?.title}
            </h1>
            {Array.isArray(contactInfo?.data?.attributes?.ContactList) &&
              contactInfo?.data?.attributes?.ContactList.map((item, index) => (
                <div key={index} className="flex p-1 gap-2">
                  <img
                    src={`${process.env.REACT_APP_URL}${item?.icon?.data?.attributes?.url}`}
                    className="w-4 h-4"
                  />
                  <p className="text-sm">{item.contact_info}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="text-sm  text-center">
          <p className="mt-16 pb-4">
            {copyRightInfo?.data?.attributes?.copyrightText}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
