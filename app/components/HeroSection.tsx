"use client";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <div className=" lg:py-32 sm:py-44 py-12" id="hero">
      <div className="sm:grid flex flex-col gap-10 sm:gap-0 sm:grid-cols-12">
        <div
          id="first-divider"
          className=" col-span-7 place-self-center flex flex-col lg:gap-10 gap-5 text-center sm:text-left "
        >
          <h1 className="text-4xl sm:text-5xl lg:text-8xl text-white font-extrabold flex-col flex lg:gap-10 ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Hello, I'm{" "}
            </span>
            <TypeAnimation
              sequence={["Josh", 5000, "Front End", 1000, "Back End", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            A passionate full stack developer based in Toronto, Canada. 📍
          </p>
          <div id="btns" className=" ">
            <Link
              to="connect"
              spy={true}
              smooth={true}
              offset={0}
              duration={3000}
            >
              <button className="px-6 py-3 my-2 mr-5 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white md:text-base text-sm hover:brightness-[1.15] transition ease-linear duration-100">
                Connect With Me
              </button>
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white md:text-base text-sm">
              <div className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-slate-700 transition-colors ease-linear duration-100">
                Resume
                <DownloadIcon className=" -mr-2 -my-2" />
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center ">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-[#181818] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
