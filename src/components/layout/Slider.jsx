import React from "react";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";
import img1 from "../../../Website Elements/Step 1 Image.png";
import img2 from "../../../Website Elements/Step 2 Image.png";
import img3 from "../../../Website Elements/Step 3 Image.png";

const Slider = () => {
  return (
    <>
      <div className="grid xl:block lg:block md:block sm:block hidden">
        {/* <div className="hl"></div> */}
        <h3 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl text-center my-5 text-orange-500 px-3">
          ELEVATING BRANDS WITH TRENDS
        </h3>
        {/* <div className="carousel carousel-end">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Drink"
            />
          </div>
        </div> */}
        <Marquee
          speed={60}
          pauseOnHover={true}
          autoFill={true}
          className="fs-5 markP"
        >
          <div className="grid grid-cols-4 ml-9 gap-16">
            <div className="flex flex-col gap-4 w-72 p-3 border rounded-lg p-6 bg-gray-100 shadow-xl">
              <img src={img1} alt="" className="w-72" />
            </div>
            <div className="flex flex-col gap-4 w-72 p-3 border rounded-lg p-6 bg-gray-100 shadow-xl">
              <img src={img2} alt="" className="w-72" />
            </div>
            <div className="flex flex-col gap-4 w-72 p-3 border rounded-lg p-6 bg-gray-100 shadow-xl">
              <img src={img3} alt="" className="w-72" />
            </div>
            <div className="flex flex-col gap-4 w-72 p-3 border rounded-lg p-6 bg-gray-100 shadow-xl">
              <img src={img2} alt="" className="w-72" />
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Slider;
