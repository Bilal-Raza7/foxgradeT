import React from "react";
import img1 from "../../../FOXGRADE/service1.png";
import img2 from "../../../FOXGRADE/service2.png";
import img3 from "../../../FOXGRADE/service3.png";
import img4 from "../../../FOXGRADE/service4.png";
import img5 from "../../../FOXGRADE/service5.png";
import img6 from "../../../FOXGRADE/service6.png";

const FeaturedProducts = () => {
  return (
    <>
      <div className="grid">
        <h2 className="text-center text-orange-500 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl my-5">
          FEATURED PRODUCTS
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 pl-14 pr-6 float-center">
          <div className="card lg:w-80 md:w-72 sm:w-64 my-3 bg-white shadow-xl transition-all duration-300  hover:-translate-y-3">
            <figure>
              <img src={img1} alt="Shoes" className="object-contain h-44" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card lg:w-80 md:w-72 sm:w-64 my-3 bg-white shadow-xl transition-all duration-300  hover:-translate-y-3">
            <figure>
              <img src={img2} alt="Shoes" className="object-contain h-44" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card lg:w-80 md:w-72 sm:w-64 my-3 bg-white shadow-xl transition-all duration-300  hover:-translate-y-3">
            <figure>
              <img src={img3} alt="Shoes" className="object-contain h-44" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card lg:w-80 md:w-72 sm:w-64 my-3 bg-white shadow-xl transition-all duration-300  hover:-translate-y-3">
            <figure>
              <img src={img4} alt="Shoes" className="object-contain h-44" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card lg:w-80 md:w-72 sm:w-64 my-3 bg-white shadow-xl transition-all duration-300  hover:-translate-y-3">
            <figure>
              <img src={img5} alt="Shoes" className="object-contain h-44" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card lg:w-80 md:w-72 sm:w-64 my-3 bg-white shadow-xl transition-all duration-300  hover:-translate-y-3">
            <figure>
              <img src={img6} alt="Shoes" className="object-contain h-44" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
