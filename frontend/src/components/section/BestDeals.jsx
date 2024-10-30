"use client";
import React from "react";
import WidthWrapper from "../common/WidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import SecondaryProductCard from "../common/SecondaryProductCards";
import emblaCarouselAutoplay from "embla-carousel-autoplay";

const BestDeals = ({ bestDeals }) => {
  return (
    <WidthWrapper className={"py-7"}>
      <h1 className="px-5 py-2 sm:text-2xl text-xl font-semibold title-font">
        Best Deals
      </h1>
      <Carousel
        // plugins={[
        //   emblaCarouselAutoplay({
        //     delay: 5000,
        //   }),
        // ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {bestDeals?.data?.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/4  xl:basis-1/5"
            >
              <SecondaryProductCard props={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden xl:block" />
        <CarouselPrevious className="hidden xl:block" />
      </Carousel>
    </WidthWrapper>
  );
};

export default BestDeals;
