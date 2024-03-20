import React from "react";
import img1 from "../../../Website Elements/Digital Marketing.gif";
import img2 from "../../../Website Elements/Graphic Design.gif";
import img3 from "../../../Website Elements/Video Production.gif";

const Services = () => {
  return (
    <>
      <div className="container" id="services">
        <div className="grid">
          <div className="grid  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 px-9">
            <p className="text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-orange-500 my-9 pb-9">
              SERVICES
            </p>
            <p className="place-self-center lg:text-2xl md:text-xl sm:text-md xl:text-3xl xl:block lg:block md:block sm:block hidden my-9 pb-9 text-gray-500">
              THINGS I CAN HELP YOU WITH:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 pl-14 float-center">
            <div className="card lg:w-72 md:w-64 sm:w-48 my-3 bg-gray-100 shadow-xl transition-all duration-300  hover:-translate-y-3 effect grayscale hover:grayscale-0">
              <div className="flex justify-center pt-6">
                <div className="text-orange-500 text-6xl pl-6 pr-4">01</div>
                <img src={img1} alt="digital marketing" className="w-36 " />
              </div>
              <div className="card-body px-6 py-3">
                <h2 className="card-title self-start text-gray-600">
                  DIGITAL MARKETING
                </h2>
              </div>
            </div>
            <div className="card lg:w-72 md:w-64 sm:w-48 my-3 bg-gray-100 shadow-xl transition-all duration-300  hover:-translate-y-3 effect grayscale hover:grayscale-0">
              <div className="flex justify-center pt-6">
                <div className="text-orange-500 text-6xl pl-6 pr-4">02</div>
                <img src={img2} alt="digital marketing" className="w-36 " />
              </div>
              <div className="card-body px-6 py-3">
                <h2 className="card-title self-start text-gray-600">
                  GRAPHIC DESIGNING
                </h2>
              </div>
            </div>
            <div className="card lg:w-72 md:w-64 sm:w-48 my-3 bg-gray-100 shadow-xl transition-all duration-300  hover:-translate-y-3 effect grayscale hover:grayscale-0">
              <div className="flex justify-center pt-6">
                <div className="text-orange-500 text-6xl pl-6 pr-4">03</div>
                <img src={img3} alt="digital marketing" className="w-36 " />
              </div>
              <div className="card-body px-6 py-3">
                <h2 className="card-title self-start text-gray-600">
                  VIDEO EDITING
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
