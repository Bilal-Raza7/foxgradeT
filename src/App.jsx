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
        <div style={{ width: "18vw", position: "fixed " }}>
          <Navbar />
        </div>
        <div style={{ width: "82vw", marginLeft: "18vw" }}>
          <Slider />
          <FeaturedProducts />
          <Testimonials />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
