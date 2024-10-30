import qs from "qs";

export const blogQuery = qs.stringify({ populate: "*" });

export const productsQuery = qs.stringify(
  {
    populate: [
      "Price",
      "categories",
      "sub_categories",
      "Specification.SpecificationList",
      "KeySpecification.Displays.Icon",
      "KeySpecification.Cameras.Icon",
      "KeySpecification.Batteries.Icon",
      "KeySpecification.Storages.Icon",
      "ProductInfo",
      "MobileSpecification.BODY",
      "MobileSpecification.DISPLAY",
      "MobileSpecification.PERFORMANCE",
      "MobileSpecification.MEMORY",
      "MobileSpecification.CONNECTIVITY",
      "MobileSpecification.MEDIA",
      "MobileSpecification.SENSORS",
      "MobileSpecification.BATTERY",
      "MobileSpecification.FRONT_CAMERA",
      "MobileSpecification.MAIN_CAMERA",
      "ProductImage",
      "Thumbnail",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

export const productsTabsQuery = qs.stringify(
  {
    populate: [
      "Price",
      "categories",
      "sub_categories",
      "Specification.SpecificationList",
      "KeySpecification.Displays.Icon",
      "KeySpecification.Cameras.Icon",
      "KeySpecification.Batteries.Icon",
      "KeySpecification.Storages.Icon",
      "ProductInfo",
      "MobileSpecification.BODY",
      "MobileSpecification.DISPLAY",
      "MobileSpecification.PERFORMANCE",
      "MobileSpecification.MEMORY",
      "MobileSpecification.CONNECTIVITY",
      "MobileSpecification.MEDIA",
      "MobileSpecification.SENSORS",
      "MobileSpecification.BATTERY",
      "MobileSpecification.FRONT_CAMERA",
      "MobileSpecification.MAIN_CAMERA",
      "ProductImage",
      "Thumbnail",
    ],
    // pagination: {
    //   page: 1,
    //   pageSize: 5,
    // },
  },
  {
    encodeValuesOnly: true,
  }
);

export const heroProductQuery = qs.stringify(
  {
    populate: [
      "Price",
      "categories",
      "sub_categories",
      "Specification.SpecificationList",
      "KeySpecification.Displays.Icon",
      "KeySpecification.Cameras.Icon",
      "KeySpecification.Batteries.Icon",
      "KeySpecification.Storages.Icon",
      "ProductInfo",
      "Thumbnail",
    ],
    filters: {
      ProductInfo: {
        Hero: true,
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);

export const bestDealsQuery = qs.stringify(
  {
    populate: [
      "Price",
      "categories",
      "sub_categories",
      "Specification.SpecificationList",
      "KeySpecification.Displays.Icon",
      "KeySpecification.Cameras.Icon",
      "KeySpecification.Batteries.Icon",
      "KeySpecification.Storages.Icon",
      "ProductInfo",
      "Thumbnail",
    ],
    filters: {
      ProductInfo: {
        BestDeals: true,
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);
