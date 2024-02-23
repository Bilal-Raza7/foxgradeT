import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./App.css";
import Slider from "./components/layout/Slider";
import FeaturedProducts from "./components/layout/FeaturedProducts";
import Testimonials from "./components/layout/Testimonials";

const App = () => {
  return (
    <>
      <div className="flex">
        <div style={{ width: "18vw", position: "fixed", zIndex: "11" }}>
          <Navbar />
        </div>
        <div style={{ width: "82vw", marginLeft: "20vw" }}>
          <Slider />
          <FeaturedProducts />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
