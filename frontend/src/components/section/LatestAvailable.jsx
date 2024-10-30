"use client";
import React from "react";
import PrimaryProductCard from "../common/PrimaryProductCard";
import { useMediaQuery } from "react-responsive";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const LatestAvailable = ({ products }) => {
  const isMobile = useMediaQuery({ maxWidth: 1020 });

  return (
    <div className={`flex flex-col lg:w-1/2`}>
      <h1 className="px-5 py-3 sm:text-2xl text-xl font-semibold title-font">
        Latest Available
      </h1>
      <div>
        {!isMobile ? (
          <>
            {products?.data?.slice(0, 2).map((item, index) => (
              <PrimaryProductCard key={index} props={item} />
            ))}
          </>
        ) : (
          <>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2200,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {products?.data?.slice(0, 5)?.map((item, index) => (
                  <CarouselItem key={index} className="basis-1/2">
                    <PrimaryProductCard props={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </>
        )}
      </div>
    </div>
  );
};

export default LatestAvailable;
