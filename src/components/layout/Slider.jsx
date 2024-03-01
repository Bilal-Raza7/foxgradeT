import React from "react";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.jpg";
import img4 from "../../../img/4.jpg";
import img5 from "../../../img/5.jpg";
import img6 from "../../../img/6.jpg";
import img7 from "../../../img/7.jpg";
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
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
