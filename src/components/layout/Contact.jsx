import React from "react";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <p className="text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl text-orange-500 my-9 pb-9">
          Contact Us
        </p>
        <p className="lg:text-2xl md:text-xl sm:text-md xl:text-3xl my-9 pb-9">
          WANT TO WORK WITH ME?
          <br />
          I'D LOVE TO HEAR FROM YOU
        </p>
      </div>
      <div className="form rounded-lg shadow-md bg-gray-300 p-9">
        <div className="grid grid-cols-2">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text p-3">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered lg:input-md md:input-md sm:input-sm sx:input-xs max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text p-3">What is your Email?</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered lg:input-md md:input-md sm:input-sm sx:input-xs max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Select Your Budget</span>
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
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Select Service</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Graphics Design
              </option>
              <option></option>
              <option>Custom</option>
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
              <option>Custom</option>
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
              <option>Custom</option>
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
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs m-9"
        ></textarea>
      </div>
    </>
  );
};

export default Contact;
