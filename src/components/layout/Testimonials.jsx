import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../../Website Elements/Logo Fox.png";

const Testimonials = () => {
  return (
    <>
      <div className="m-9 xl:block lg:block md:block hidden">
        <div className="text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl text-orange-500 my-9 pb-9">
          TESTIMONIALS
        </div>
        <Marquee speed={60} pauseOnHover={true} className="fs-5 markP">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ml-9 gap-16">
            <div className="flex flex-col gap-4 xl:w-72 lg:w-60 w-60 p-3 border rounded-lg p-6 bg-gray-100 shadow-xl">
              <div className="flex justify-around py-6">
                <img src={img1} alt="" className="w-12" />
                <div>
                  <h3 className="font-bold text-xl pt-3">John Doe</h3>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
              <p className="pt-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                delectus aperiam aliquam incidunt provident, veniam placeat
                totam facere, velit officia minus maxime reiciendis.
              </p>
              <strong>Thank You</strong>
            </div>
            <div className="flex flex-col gap-4 xl:w-72 lg:w-60 w-60 p-3 border rounded-lg p-6 bg-gray-100 shadow-xl">
              <div className="flex justify-around py-6">
                <img src={img1} alt="" className="w-12" />
                <div>
                  <h3 className="font-bold text-xl pt-3">John Doe</h3>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
              <p className="pt-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                delectus aperiam aliquam incidunt provident, veniam placeat
                totam facere, velit officia minus maxime reiciendis.
              </p>
              <strong>Thank You</strong>
            </div>
            <div className="flex flex-col gap-4 xl:w-72 lg:w-60 w-60 p-3 border rounded-lg p-6 bg-gray-100 shadow-xl">
              <div className="flex justify-around py-6">
                <img src={img1} alt="" className="w-12" />
                <div>
                  <h3 className="font-bold text-xl pt-3">John Doe</h3>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
              <p className="pt-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                delectus aperiam aliquam incidunt provident, veniam placeat
                totam facere, velit officia minus maxime reiciendis.
              </p>
              <strong>Thank You</strong>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Testimonials;
