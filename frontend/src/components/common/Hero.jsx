"use client";
import React from "react";
import WidthWrapper from "./WidthWrapper";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { truncateText } from "@/lib/truncateText";
import Link from "next/link";

const Hero = ({ heroProducts }) => {
  return (
    <section className="text-gray-600 body-font w-full lg:w-11/12">
      <Carousel
        // plugins={[
        //   Autoplay({
        //     delay: 5000,
        //   }),
        // ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {heroProducts?.data?.map((item, index) => {
            const {
              Title,
              Description,
              Slug,
              Thumbnail: {
                data: {
                  attributes: { url },
                },
              },
            } = item?.attributes || {};
            return (
              <CarouselItem key={index}>
                <div className="container mx-auto flex px-5 py-12  sm:items-center justify-between">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-3 md:pr-5 flex flex-col items-start justify-center pr-2 md:text-left md:mb-0 ">
                    <h1 className="title-font text-wrap sm:text-4xl text-xl font-semibold mb-4 md:font-medium text-gray-900">
                      {Title}
                    </h1>
                    <p className="mb-8 leading-relaxed hidden md:block">
                      {truncateText(Description, 120)}
                    </p>

                    <Link href={`/product/${Slug}`}>
                      <Button className=" bg-customRed border-0 py-2 px-3 sm:px-6 focus:outline-none text-sm sm:text-lg">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:max-w-sm lg:w-full w-1/2 max-w-md">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={`${url}`}
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
