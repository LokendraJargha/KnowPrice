"use client";
import React, { useEffect, useState } from "react";
import qs from "qs";
import fetchData from "@/service/fetchData";
import WidthWrapper from "@/components/common/WidthWrapper";
import BlogsListCard from "@/components/common/BlogsListCard";
import { useSearchParams } from "next/navigation";
import { PaginationComponent } from "@/components/common/PaginationComponent";
import { Separator } from "@/components/ui/separator";
import AuthorInfo from "@/components/section/AuthorInfo";
import BlogsPostLoading from "@/components/common/BlogsPostLoading";

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [blogs, setBlogs] = useState({
    data: [],
    meta: { pagination: { pageCount: 1 } },
  });

  const cleanUrl = (url) => {
    return decodeURIComponent(url).replace(/%20/g, " ");
  };
  const username = cleanUrl(params.writtenby);

  const dataFetch = async (username, page = 1, pageSize = 3) => {
    const blogQuery = qs.stringify({
      populate: "*",
      filters: {
        createdBy: {
          username: {
            $eq: username,
          },
        },
      },
      pagination: {
        page,
        pageSize,
      },
    });

    try {
      const blog = await fetchData(`api/blogs`, blogQuery);
      setBlogs(blog);
    } catch (error) {
      console.error("Failed to fetch data:", error.message);
    }
  };

  useEffect(() => {
    dataFetch(username, currentPage);
  }, [username, params.writtenby, currentPage]);

  const pageCount = blogs.meta.pagination.pageCount;
  console.log("a", blogs);
  return (
    <WidthWrapper className={""}>
      {blogs.data.length > 0 || <BlogsPostLoading />}
      <div className="w-full  lg:w-3/4 my-10">
        <AuthorInfo info={blogs} />
        <Separator />
        <h1 className="px-5 py-3 sm:text-2xl text-xl font-semibold title-font">
          Articles By {username}
        </h1>

        {blogs.data.map((item) => (
          <BlogsListCard key={item.id} blogs={item} />
        ))}
        {pageCount > 1 && <PaginationComponent pageCount={pageCount} />}
      </div>
    </WidthWrapper>
  );
};

export default Page;
