"use client";
import React, { useEffect, useState } from "react";
import BlogsListCard from "../common/BlogsListCard";
import { PaginationComponent } from "../common/PaginationComponent";
import { useSearchParams } from "next/navigation";
import qs from "qs";
import fetchData from "@/service/fetchData";
import BlogsPostLoading from "../common/BlogsPostLoading";

const BlogsList = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [blogs, setBlogs] = useState(null);

  console.log("blog", blogs);

  const dataFetch = async (page = 1, pageSize = 6) => {
    const query = qs.stringify({
      populate: "*",
      pagination: {
        page,
        pageSize,
      },
    });

    try {
      const blogData = await fetchData("api/blogs", query);
      setBlogs(blogData);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  useEffect(() => {
    dataFetch(currentPage);
  }, [currentPage]);

  const pageCount = blogs?.meta?.pagination?.pageCount;

  return (
    <div className="w-full  lg:w-3/4 my-10">
      {blogs?.data?.length > 0 || <BlogsPostLoading />}
      <h1 className="px-5 py-3 sm:text-2xl text-xl font-semibold title-font">
        LATEST ARTICLES
      </h1>

      {blogs?.data?.map((item) => (
        <BlogsListCard key={item.id} blogs={item} />
      ))}

      {pageCount > 1 && <PaginationComponent pageCount={pageCount} />}
    </div>
  );
};

export default BlogsList;
