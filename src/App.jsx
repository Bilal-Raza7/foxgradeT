import React, { useState } from "react";
import Footer from "./components/layout/Footer";
import "./App.css";
import Slider from "./components/layout/Slider";
import FeaturedProducts from "./components/layout/FeaturedProducts";
import Testimonials from "./components/layout/Testimonials";
// import SidebarLogo from "../Website Elements/logo1.png";
import SidebarLogo from "../Website Elements/logo1.png";
import Logo from "../Website Elements/Logo Fox.png";
import {
  FaBookmark,
  FaComment,
  FaExpand,
  FaExpandAlt,
  FaInfoCircle,
  FaPhoneAlt,
  FaQuestionCircle,
  FaServicestack,
  FaUncharted,
} from "react-icons/fa";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const App = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <div className="navbar bg-neutral-800">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex">
        {!collapse ? (
          <div className="sidebar-controls">
            <div className="">
              <Sidebar
                collapsed={collapse}
                backgroundColor="rgb(38,38,38)"
                className="text-white fixed h-screen left-0"
              >
                <div className="logo-container-sidebar my-9">
                  <div
                    className={`grid ${
                      collapse
                        ? "place-items-start pl-7"
                        : "place-items-center px-9 "
                    }`}
                  >
                    <img
                      src={Logo}
                      alt="foxGrade"
                      className={`object-cover ${collapse ? "h-10" : "h-14"}`}
                    />
                  </div>
                  <div
                    className={`mb-6 py-1 px-3 text-center ${
                      collapse ? "invisible" : "visible"
                    }`}
                  >
                    <img src={SidebarLogo} alt="FoxGrade" className="px-5" />
                  </div>
                </div>
                <div className="item-container-sidebar my-9">
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaBookmark />
                    </span>
                    <span>Projects</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaComment />
                    </span>
                    <span>Testimonial</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaServicestack />
                    </span>
                    <span>Services</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaInfoCircle />
                    </span>
                    <span>About</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaPhoneAlt />
                    </span>
                    <span>Contact</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaQuestionCircle />
                    </span>
                    <span>Help</span>
                  </h2>
                </div>
                <button
                  className="btn bg-neutral-900 text-white hover:bg-neutral-950 m-3"
                  onClick={toggle}
                >
                  <FaExpandAlt />
                </button>
              </Sidebar>
            </div>
          </div>
        ) : (
          <div className="inc-sidebar-controls">
            <div className="">
              <Sidebar
                collapsed={collapse}
                backgroundColor="rgb(38,38,38)"
                className="text-white fixed h-screen left-0"
              >
                <div className="logo-container-sidebar mb-9 mt-2">
                  <div
                    className={`grid ${
                      collapse
                        ? "place-items-start pl-7"
                        : "place-items-center px-9 "
                    }`}
                  >
                    <img
                      src={Logo}
                      alt="foxGrade"
                      className={`object-cover ${collapse ? "h-10" : "h-14"}`}
                    />
                  </div>
                  <div
                    className={`mb-6 py-1 px-3 text-center ${
                      collapse ? "invisible" : "visible"
                    }`}
                  >
                    <img src={SidebarLogo} alt="FoxGrade" className="px-5" />
                  </div>
                </div>
                <div className="item-container-sidebar my-9">
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaBookmark />
                    </span>
                    <span>Projects</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaComment />
                    </span>
                    <span>Testimonial</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaServicestack />
                    </span>
                    <span>Services</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaInfoCircle />
                    </span>
                    <span>About</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaPhoneAlt />
                    </span>
                    <span>Contact</span>
                  </h2>
                  <h2 className="text-md text-gray-300 my-3 py-1 px-3 mx-3 text-center flex gap-9 items-center transition ease-in-out delay-150 hover:text-orange-500 duration-100 cursor-pointer">
                    <span className="mx-2 text-xl">
                      <FaQuestionCircle />
                    </span>
                    <span>Help</span>
                  </h2>
                </div>
                <button
                  className="btn bg-neutral-900 text-white hover:bg-neutral-950 m-3"
                  onClick={toggle}
                >
                  <FaExpandAlt />
                </button>
              </Sidebar>
            </div>
          </div>
        )}
        {!collapse ? (
          <div className="content-controls xl:pl-0 lg:pl-0 md:pl-12">
            <Slider />
            <FeaturedProducts className="m-6" />
            <Testimonials />
            <Footer />
          </div>
        ) : (
          <div className="inc-content-controls lg:pl-0 md-pl-0 pl-5 pr-0">
            <Slider />
            <FeaturedProducts />
            <Testimonials />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
