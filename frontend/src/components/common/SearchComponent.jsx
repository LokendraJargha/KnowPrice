"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import qs from "qs";
import fetchData from "@/service/fetchData";
import Link from "next/link";
import useClickOutside from "@/customHook/useClickOutside";

export function SearchComponent({ className }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const elementsRef = useClickOutside(() => {
    setIsTyping(false);
  });

  useEffect(() => {
    if (!isTyping) return;

    const query = searchParams.get("query") || "";
    const productSearchQuery = qs.stringify({
      populate: ["Thumbnail", "Price"],
      _q: query,
    });

    const fetchProducts = async () => {
      try {
        const data = await fetchData("api/products", productSearchQuery);
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, [searchParams, isTyping]);

  const handleSearch = useDebouncedCallback((term) => {
    setIsTyping(term.length > 0);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
      setProducts([]);
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setIsTyping(false);
      setProducts([]);
    }
  }, [pathname]);

  const handleLinkClick = () => {
    setIsTyping(false);
  };

  return (
    <div
      ref={(el) => (elementsRef.current[0] = el)}
      className={cn(
        "bg-customGrey border shadow-sm flex justify-between items-center rounded-3xl py-2 px-3 md:mx-5 my-3 md:my-0 relative ",
        className
      )}
    >
      <input
        ref={(el) => {
          inputRef.current = el;
          elementsRef.current[1] = el;
        }}
        type="text"
        placeholder="Search Product/News Here"
        className="full bg-customGrey outline-none w-full px-3"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="flex gap-2">
        <div className="bg-[#928e8e] h-5 w-0.5 border border-gray-400"></div>
        <Search className="text-gray-500 size-5" />
      </div>
      {isTyping && (
        <div
          ref={(el) => (dropdownRef.current = el)}
          className="absolute top-full left-0 w-full bg-white border-[1px] rounded-lg mt-2 py-2 shadow-lg h-auto max-h-96 overflow-scroll no-scrollbar"
        >
          {products?.data?.length > 0 ? (
            <div className="space-y-2 divide-y-[0.5px] divide-gray-100 ">
              {products.data.map((item, index) => (
                <Link
                  key={index}
                  href={`/product/${item?.attributes?.Slug}`}
                  className="flex items-center py-3"
                  onClick={handleLinkClick}
                >
                  <div className="sm:size-20 size-14 mr-5 sm:mr-10 items-center justify-center  flex-shrink-0">
                    <img
                      src={item?.attributes?.Thumbnail?.data?.attributes?.url}
                      alt={item?.attributes?.Thumbnail?.data?.attributes?.name}
                      className="w-full h-11/12 object-contain rounded-lg mt-1"
                    />
                  </div>
                  <span className="flex flex-col">
                    <span className="w-full text-lg">
                      {item?.attributes?.Title}
                    </span>
                    <span className="w-full text-sm py-2">
                      {item?.attributes?.Price?.[0]?.Price}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="px-3">No products found</p>
          )}
        </div>
      )}
    </div>
  );
}
