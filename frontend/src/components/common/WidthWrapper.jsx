import { cn } from "@/lib/utils";
import React from "react";

const WidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-10 relative",
        className
      )}
    >
      {children}
    </div>
  );
};

export default WidthWrapper;
