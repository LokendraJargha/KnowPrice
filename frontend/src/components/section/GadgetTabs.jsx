"use client";
import { Tabs } from "@radix-ui/react-tabs";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import GadgetTabsCard from "../GadgetTabsCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { PaginationComponent } from "../common/PaginationComponent";
import qs from "qs";
import fetchData from "@/service/fetchData";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Spinner from "../common/Spinner";

const GadgetTabs = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories?.data[0]?.attributes?.Title
  );
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async (category) => {
    setIsLoading(true);
    try {
      const categoryQuery = qs.stringify(
        {
          populate: ["products.Price", "products.Thumbnail"],
          filters: {
            Title: {
              $eq: category,
            },
          },
        },
        {
          encodeValuesOnly: true,
        }
      );
      const response = await fetchData(
        `api/categories?${categoryQuery}`,
        categoryQuery
      );
      setProduct(response);
    } catch (err) {
      console.log("error", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  const isMobile = useMediaQuery({ maxWidth: 766 });
  const isMediumScreen = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className="relative md:flex md:flex-col md:justify-between w-full lg:w-8/12 px-5  md:border p-2 md:shadow-lg md:h-[650px] md:rounded-md">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <Spinner />
        </div>
      )}
      <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="gap-4">
          {!isMediumScreen ? (
            <>
              {categories?.data?.map((item, index) => (
                <TabsTrigger key={index} value={item?.attributes?.Title}>
                  {item?.attributes?.Title}
                </TabsTrigger>
              ))}
            </>
          ) : (
            <>
              <Carousel className="w-full">
                <CarouselContent>
                  {categories?.data?.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/3 md:basis-1/5"
                    >
                      <TabsTrigger value={item?.attributes?.Title}>
                        {item?.attributes?.Title}
                      </TabsTrigger>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
        </TabsList>
        <div
          className={`transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex justify-between items-center">
            <h1 className="px-5 py-5 sm:text-xl text-base font-semibold title-font">
              Popular {selectedCategory}
            </h1>

            <Link
              className="mt-3 text-sm px-2 inline-flex items-center"
              href={`/category/${product?.data?.[0]?.attributes?.Slug}`}
            >
              See All
              <IoIosArrowRoundForward size={25} />
            </Link>
          </div>
          {isMobile ? (
            <>
              <Carousel>
                <CarouselContent>
                  {product?.data?.[0]?.attributes?.products?.data?.map(
                    (item, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-1/2 sm:basis-1/3"
                      >
                        <TabsContent value={selectedCategory}>
                          <GadgetTabsCard props={item} />
                        </TabsContent>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
              </Carousel>
            </>
          ) : (
            <>
              <div className="w-full grid grid-cols-4 gap-7 px-3 ">
                {product?.data?.[0]?.attributes?.products?.data
                  ?.slice(0, 8)
                  ?.map((item, index) => (
                    <TabsContent key={index} value={selectedCategory}>
                      <GadgetTabsCard props={item} />
                    </TabsContent>
                  ))}
              </div>
            </>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default GadgetTabs;
