import Link from "next/link";
import React from "react";
import NavBarLink from "./NavBarLink";

const navOptions = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Connect",
    link: "#connect",
  },
];

function NavBar() {
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-35 text-white px-16 font-bold w-full py-4 z-30 flex justify-between items-center border-b">
      <Link href={"/"}>
        <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 text-4xl">
          JR
          <h1 className="absolute text-[#121212] top-0 pl-[0.2rem]">JR</h1>
          <h1 className="absolute text-white top-0 pl-[0.4rem]">JR</h1>
        </div>
      </Link>
      <div className="flex">
        {navOptions.map((link) => (
          <NavBarLink title={link.title} link={link.link} />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
