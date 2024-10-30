export const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const navList = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Mobile",
    route: "/category/mobile",
  },
  {
    label: "Laptops",
    route: "/category/laptop",
  },
  {
    label: "Blogs",
    route: "/blog",
  },
  {
    label: "Compare",
    route: "/compare",
  },
  {
    label: "Contact",
    route: "/contact",
  },
  {
    label: "Deals",
    route: "/deals",
  },
];

export const footerList = [
  {
    label: "About us",
    route: "/aboutus",
  },
  {
    label: "Contact",
    route: "/contact",
  },
  {
    label: "Careers",
    route: "/careers",
  },
  {
    label: "Privacy Policy",
    route: "/privacy",
  },
  {
    label: "Advertise with us",
    route: "/advertise",
  },
];

export const specItems = [
  {
    key: "Displays",
    iconKey: "Icon",
    primaryKey: "Primary",
    secondaryKey: "Secondary",
  },
  {
    key: "Cameras",
    iconKey: "Icon",
    primaryKey: "Primary",
    secondaryKey: "Secondary",
  },
  {
    key: "Storages",
    iconKey: "Icon",
    primaryKey: "Primary",
    secondaryKey: "Secondary",
  },
  {
    key: "Batteries",
    iconKey: "Icon",
    primaryKey: "Primary",
    secondaryKey: "Secondary",
  },
];
