import React from "react";
import cl1 from "../../../Website Elements/cl1.jpg";
import cl2 from "../../../Website Elements/cl2.jpg";
import cl3 from "../../../Website Elements/cl3.jpg";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-9">
        <p className="text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl text-orange-500 my-9 pb-9">
          Contact Us
        </p>
        <p className="lg:text-2xl md:text-xl sm:text-md xl:text-3xl my-9 pb-9">
          WANT TO WORK WITH ME?
          <br />
          I'D LOVE TO HEAR FROM YOU
        </p>
      </div>
      <div className="form rounded-lg shadow-md bg-gray-300 p-12">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <label className="form-control w-full max-w-full justify-self-start">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered lg:input-md md:input-md sm:input-sm sx:input-xs max-w-full"
            />
          </label>
          <label className="form-control w-full max-w-full justify-self-end">
            <div className="label">
              <span className="label-text">What is your Email?</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered lg:input-md md:input-md sm:input-sm sx:input-xs max-w-full"
            />
          </label>
          <label className="form-control w-full max-w-full justify-self-start">
            <div className="label">
              <span className="label-text">Select Budget</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>500-1000</option>
              <option>1000-1500</option>
              <option>1500-2000</option>
              <option>2000-2500</option>
            </select>
          </label>
          <label className="form-control w-full max-w-full justify-self-end">
            <div className="label">
              <span className="label-text">Select Service</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Graphics Design
              </option>
              <option></option>
              {/* <option>Custom</option> */}
              <option>Logo Design</option>
              <option>Brand Identity Design</option>
              <option>Print Design</option>
              <option>Web Design</option>
              <option>Packaging Design</option>
              <option>Illustrations</option>
              <option>Infographics</option>
              <option>UI Design</option>
              <option>Social Media Graphics</option>
              <option></option>
              <option disabled selected>
                Graphics Design
              </option>
              <option></option>
              {/* <option>Custom</option> */}
              <option>Logo Design</option>
              <option>Brand Identity Design</option>
              <option>Print Design</option>
              <option>Web Design</option>
              <option>Packaging Design</option>
              <option>Illustrations</option>
              <option>Infographics</option>
              <option>UI Design</option>
              <option>Social Media Graphics</option>
              <option></option>
              <option disabled selected>
                Graphics Design
              </option>
              <option></option>
              {/* <option>Custom</option> */}
              <option>Logo Design</option>
              <option>Brand Identity Design</option>
              <option>Print Design</option>
              <option>Web Design</option>
              <option>Packaging Design</option>
              <option>Illustrations</option>
              <option>Infographics</option>
              <option>UI Design</option>
              <option>Social Media Graphics</option>
            </select>
          </label>
        </div>

        <label className="form-control w-full max-w-full justify-self-end">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            placeholder="Hello there..."
            className="textarea textarea-bordered w-full max-w-full px-5"
          ></textarea>
        </label>
        <div className=" py-6 flex gap-3">
          <input type="checkbox" defaultChecked className="checkbox " />
          <p>
            By submitting this form, you agree to the{" "}
            <strong>PRIVACY POLICY</strong>
          </p>
        </div>
        <button className="btn bg-orange-500 text-white hover:bg-orange-600 scale-2">
          submit <span className="hover:rotate-[-45deg]">&#x2192;</span>
        </button>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-7 justify-center py-3 px-9">
        <div className="self-center grayscale hover:grayscale-0">
          <img src={cl1} alt="company1" />
        </div>
        <div className="self-center grayscale hover:grayscale-0">
          <img src={cl2} alt="company1" />
        </div>
        <div className="self-center grayscale hover:grayscale-0">
          <img src={cl3} alt="company1" />
        </div>
        <div className="self-center grayscale hover:grayscale-0">
          <img src={cl1} alt="company1" />
        </div>
        <div className="self-center grayscale hover:grayscale-0">
          <img src={cl2} alt="company1" />
        </div>
        <div className="self-center grayscale hover:grayscale-0">
          <img src={cl3} alt="company1" />
        </div>
        <div className="self-center grayscale hover:grayscale-0">
          <img src={cl1} alt="company1" />
        </div>
      </div>
    </>
  );
};

export default Contact;
