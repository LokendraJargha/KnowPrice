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
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import SecondaryProductCard from "../common/SecondaryProductCards";

const RelatedProduct = ({ product, allProducts }) => {
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const filterRelatedProducts = () => {
      const { categories, sub_categories, Price } =
        product?.data[0]?.attributes;
      const productPrice = Price?.[0]?.Price;

      const parsePrice = (priceString) => {
        const numericPrice = Number(priceString.replace(/[^0-9.-]+/g, ""));
        return isNaN(numericPrice) ? 0 : numericPrice;
      };

      const productPriceValue = parsePrice(productPrice);
      const priceTolerance = 20000;
      const isPriceInRange = (itemPrice) => {
        const itemPriceValue = parsePrice(itemPrice);
        return (
          itemPriceValue >= productPriceValue - priceTolerance &&
          itemPriceValue <= productPriceValue + priceTolerance
        );
      };

      const filteredProducts = allProducts?.data?.filter(({ attributes }) => {
        const {
          categories: itemCategories,
          sub_categories: itemSubCategories,
          Price: itemPriceArray,
        } = attributes;

        const itemPrice = itemPriceArray?.[0]?.Price;

        return (
          itemCategories?.data[0]?.attributes?.Title ===
            categories?.data[0]?.attributes?.Title ||
          (itemSubCategories?.data[0]?.attributes?.Title ===
            sub_categories?.data[0]?.attributes?.Title &&
            isPriceInRange(itemPrice))
        );
      });

      setFilterProducts(filteredProducts?.slice(0, 10));
    };

    filterRelatedProducts();
  }, [product, allProducts]);

  return (
    <WidthWrapper className="py-8">
      <h1 className="px-5 py-2 sm:text-2xl text-xl font-semibold title-font">
        Related Products
      </h1>
      <Carousel
        // plugins={[emblaCarouselAutoplay({ delay: 3300 })]}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {filterProducts?.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
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

export default RelatedProduct;
