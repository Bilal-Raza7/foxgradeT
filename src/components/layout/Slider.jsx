import React from "react";
import Navbar from "./Navbar";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";
import img1 from "../../../Website Elements/Step 1 Image.png";
import img2 from "../../../Website Elements/Step 2 Image.png";
import img3 from "../../../Website Elements/Step 3 Image.png";

const Slider = () => {
  return (
    <>
      <div className="grid xl:block lg:block md:block sm:block hidden">
        <h3 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl text-center my-5 text-orange-500 px-3">
          ELEVATING BRANDS WITH TRENDS
        </h3>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-96 mr-0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              className="w-96"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
