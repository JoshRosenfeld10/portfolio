import React from "react";

function Footer() {
  return (
    <div className="border-t justify-center flex bg-black bg-opacity-60 cursor-default">
      <div className="container flex justify-between items-center z-20 px-10 py-5 text-center">
        <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 text-4xl font-bold">
          JR
          <h1 className="absolute text-[#121212] top-0 pl-[0.2rem]">JR</h1>
          <h1 className="absolute text-white top-0 pl-[0.4rem]">JR</h1>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
