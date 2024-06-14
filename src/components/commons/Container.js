import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-5 sm:px-14 md:px-24 lg:px-28 xl:px-36 2xl:px-96">
      {children}
    </div>
  );
};

export default Container;
