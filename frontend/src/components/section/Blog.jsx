"use client";
import React from "react";
import RichTextBlock from "../common/RichTextBlock";
import ShareSocial from "../common/ShareSocial";
import { Separator } from "../ui/separator";
import { dateFormat } from "@/lib/dataFormat";
import Link from "next/link";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";

const Blog = ({ blogs }) => {
  console.log("seo", blogs);
  // const currentPageUrl = window?.location?.href;
  const { Title, Content, FeaturedImage, createdBy, createdAt, seocontent } =
    blogs?.data?.[0]?.attributes;
  const imageUrl = `${FeaturedImage?.data?.attributes?.url}`;
  return (
    <div className="w-full lg:w-2/3 mx-2 my-12">
      <h1 className="md:text-4xl text-2xl w-full font-bold my-3">{Title}</h1>
      <div className="flex items-center justify-between gap-10">
        <span className="w-fit leading-relaxed text-base text-gray-600">
          <Link href={`/blog/author/${createdBy?.data?.attributes?.username}`}>
            {createdBy?.data?.attributes?.username || ""}
          </Link>
          <em className="text-sm py-2"> - {dateFormat(createdAt)}</em>
          {/* <ShareSocial /> */}
        </span>
      </div>
      <img src={`${imageUrl}`} alt="" className="w-full my-3" />
      <span className="py-10">
        <RichTextBlock content={Content} />
      </span>

      {/* <Markdown>## Heading level 2 </Markdown> 
      ---------------------------------------------
      <ReactMarkdown>{seocontent}</ReactMarkdown>
      --------------------------------------------- 
      <Markdown>{seocontent}</Markdown> */}
    </div>
  );
};

export default Blog;
