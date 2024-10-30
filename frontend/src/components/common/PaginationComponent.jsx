"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationArrow = ({ direction, href, isDisabled }) => {
  const router = useRouter();
  const isLeft = direction === "left";
  const disabledClassName = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <Button
      onClick={() => router.push(href)}
      className={`bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-customRed ${disabledClassName}`}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {isLeft ? (
        <>
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </>
      ) : (
        <>
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </>
      )}
    </Button>
  );
};

export function PaginationComponent({ pageCount }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (pageCount <= maxPagesToShow) {
      for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={createPageURL(i)}
              isActive={i === currentPage}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      pageNumbers.push(
        <PaginationItem key={1}>
          <PaginationLink href={createPageURL(1)} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
      );

      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(pageCount - 1, currentPage + 2);

      if (startPage > 2) {
        pageNumbers.push(<PaginationEllipsis key="start-ellipsis" />);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={createPageURL(i)}
              isActive={i === currentPage}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (endPage < pageCount - 1) {
        pageNumbers.push(<PaginationEllipsis key="end-ellipsis" />);
      }

      if (pageCount > maxPagesToShow) {
        pageNumbers.push(
          <PaginationItem key={pageCount}>
            <PaginationLink
              href={createPageURL(pageCount)}
              isActive={currentPage === pageCount}
            >
              {pageCount}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <Pagination className={"py-5"}>
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow
            direction="left"
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationArrow
            direction="right"
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
