"use client";
import React, { useEffect, useState } from "react";
import WidthWrapper from "../common/WidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import SecondaryBlogCard from "../common/SecondaryBlogCard";
import { blogQuery } from "@/lib/apiQuery";
import fetchData from "@/service/fetchData";

const TechStories = () => {
  const [blog, setBlog] = useState();

  const dataFetch = async () => {
    try {
      const blogs = await fetchData("api/blogs", blogQuery);

      setBlog(blogs);
    } catch (error) {
      return { error: error.message };
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <WidthWrapper className={"py-6"}>
      <h1 className="px-5 py-6 sm:text-2xl text-xl font-semibold title-font">
        Tech Stories
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {blog?.data?.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 lg:basis-1/3  xl:basis-1/4"
            >
              <SecondaryBlogCard blogs={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden xl:block" />
        <CarouselPrevious className="hidden xl:block" />
      </Carousel>
    </WidthWrapper>
  );
};

export default TechStories;
