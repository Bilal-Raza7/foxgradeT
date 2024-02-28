import React from "react";
import dp from "../../../Website Elements/Fox BG Mini Circle Overlay.png";

const About = () => {
  return (
    <>
      <div className="container hidden md:block lg:block xl:block sm:block">
        <div className="grid m-6 pl-12">
          <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class=" xl:row-span-3 lg:row-span-3 md:row-span-3 row-span-1 bg-gray-100 rounded-lg">
              <img src={dp} alt="display image" className="w-20 m-auto pt-3" />
              <p className="text-lg text-gray-500 text-center py-3">I'M YXZ</p>
              <p className="text-sm text-gray-500 px-6">
                Greetings! I'm xyz, A Passionate Individual with A Diverse Skill
                Set in <strong>Graphics Designing, Video Editing</strong> and{" "}
                <strong>Digital Marketing </strong> at the Intersection of
                Creativity and Stratigy Me And My Team Thrive on Transforming
                Ideas into Visually Stunning and Impactful Digital Experiences.
              </p>
            </div>

            <div class="col-span-3 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500 p-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur, dolores est. In cum veritatis tempore voluptas optio
                unde et inventore adipisci, dolorum, ex nihil soluta quae illum,
                at magnam commodi.
              </p>
            </div>
            <div class="row-span-1 col-span-3 grid">
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-1">
                <div className="bg-gray-100 rounded-lg p-3 mr-1">
                  <p className="text-3xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-center">
                    50+
                  </p>
                  <p className="text-sm mt-5 text-center">Satisfied Clients</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 mr-1">
                  <p className="text-3xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-center">
                    100+
                  </p>
                  <p className="text-sm mt-5 text-center">Projects</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 mr-1">
                  <p className="text-3xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-center">
                    5+
                  </p>
                  <p className="text-sm mt-5 text-center">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
