import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[var(--primary)] rounded-lg px-6 md:px-20">
      {/* --- Left Side --- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight">
          Book Appointments <br /> with Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="doctor pictures"
          />
          <p>
            Browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white py-3 px-8 rounded-full text-gray-600 md:m-0 text-sm m-auto hover:scale-105 transition-all duration-300"
          href="#speciality"
          aria-label="book appointment"
        >
          Book appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* --- Right Side --- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute h-auto rounded-lg bottom-0"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
