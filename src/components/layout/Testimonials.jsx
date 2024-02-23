import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="grid m-9">
        <div className="text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl text-orange-500 my-9 pb-9">
          TESTIMONIALS
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ml-9">
          <div className="flex flex-col gap-4 xl:w-56 lg:w-52 w-52 p-3">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 xl:w-56 lg:w-52 w-52 p-3">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 xl:w-56 lg:w-52 w-52 p-3">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
