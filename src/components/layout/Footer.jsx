import React from "react";
import SidebarLogo from "../../../Website Elements/Website FG Logo.png";

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-gray-200">
        <footer className="footer pl-6 py-4 border-t  text-gray-800 border-base-300 overflow-hidden">
          <aside className="items-center grid-flow-col">
            <img src={SidebarLogo} alt="foxGrade" className="w-40 mr-3 " />
            <span className="opacity-90">Digital Marketing</span>
            <div className="vl"></div>
            <span className="opacity-90">Graphic Design</span>
            <div className="vl"></div>
            <span className="opacity-90">Video Editing</span>
            <div className="vl"></div>
            <span className="opacity-90">Blog Websites</span>
          </aside>
          <p className="text-orange-500 place-self-center justify-self-end mr-3 font-bold lg:block md:block xl:block hidden">
            Growth Doesn't Need Creatives, it Needs Creative Minds
          </p>
        </footer>
        <footer className="footer pl-12 py-9 text-gray-800">
          <nav>
            <h6 className="footer-title opacity-100">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title opacity-100">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title opacity-100">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="md:place-self-start md:justify-self-start sm:place-self-start sm:justify-self-start">
            <p className="font-bold my-3">Want To Work Togather?</p>
            <div className="btn bg-orange-500 text-white rounded-md pb-1 text-3xl font-bold my-1 hover:bg-orange-600">
              Join Us
            </div>
            <p className="font-bold my-3">Follow Us</p>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
        <div className=" pb-6 overflow-hidden px-5">
          <p className="text-center">
            &copy; {footerYear} FoxGrade Agency. Made With ❤️ in India
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
