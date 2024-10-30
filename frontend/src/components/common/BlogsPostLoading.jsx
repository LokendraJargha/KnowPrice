import React from "react";
import Spinner from "./Spinner";

const BlogsPostLoading = () => {
  return (
    <div className="h-screen px-5 py-10">
      <div className="text-center space-x-4 py-20 bg-customBg bg-white bg-opacity-50 h-screen">
        <h1 className="text-2xl font-extrabold text-customPurple py-8">
          <Spinner />
          Our blog is brewing!
        </h1>
        <p className="text-sm font-light">
          We're loading up our blog with exciting content. If you're still
          waiting, why not explore our other offerings?
        </p>
      </div>
    </div>
  );
};

export default BlogsPostLoading;
