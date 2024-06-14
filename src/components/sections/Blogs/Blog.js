import React, { useEffect } from "react";
import fetchAllBlogs from "../../../service/fetchAllBlogs";
import fetchBlog from "../../../service/fetchBlogs";
import { useLocation } from "react-router-dom";
import Container from "../../commons/Container";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import DOMPurify from "dompurify";
import RichTextBlock from "../../commons/RichTextBlock";

const Blog = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/")[2];
  const { fetchAllBlogsInfo, allBlogsInfo } = fetchAllBlogs();
  const { BlogInfo, fetchBlogInfo } = fetchBlog();

  console.log("BlogInfo", BlogInfo);

  useEffect(() => {
    fetchBlogInfo(slug);
    fetchAllBlogsInfo();
  }, [slug]);

  const content = BlogInfo?.data?.[0]?.attributes?.Content || [];

  console.log("con", content);

  if (BlogInfo?.length === 0)
    return (
      <div className="lg:w-[75%] sm:[90%] w-full lg:mr-5 mr-0">loading...</div>
    );
  return (
    <Container>
      <div className="my-5 w-full lg:w-3/4 ">
        <h1 className="text-3xl font-medium my-3">
          {BlogInfo?.data?.[0]?.attributes?.title}
        </h1>
        <img
          src={`${process.env.REACT_APP_URL}${BlogInfo?.data?.[0]?.attributes?.coverImg?.data?.attributes?.url}`}
          alt=""
        />
        <RichTextBlock content={content} show={false} />
      </div>
    </Container>
  );
};

export default Blog;
