"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavBarLink from "./NavBarLink";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useWindowSize from "@/app/hooks/useWindowSize";

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
  const [openNavBar, setOpenNavBar] = useState(false);
  const windowSize = useWindowSize();

  const handleClick = () => {
    openNavBar ? setOpenNavBar(false) : setOpenNavBar(true);
  };

  const closeNavBarConditions =
    (windowSize.width as number) > 768 && openNavBar;

  useEffect(() => {
    setOpenNavBar(false);
  }, [closeNavBarConditions]);

  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-50 text-white px-12 font-bold w-full py-4 z-30 border-b">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 text-4xl">
            JR
            <h1 className="absolute text-[#121212] top-0 pl-[0.2rem]">JR</h1>
            <h1 className="absolute text-white top-0 pl-[0.4rem]">JR</h1>
          </div>
        </Link>
        <button
          className="md:hidden border p-1 px-2 rounded hover:text-gray-300 hover:border-gray-300 transition ease-linear duration-100"
          onClick={handleClick}
        >
          {openNavBar ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className="hidden md:flex">
          {navOptions.map((link) => (
            <NavBarLink key={link.title} title={link.title} link={link.link} />
          ))}
        </div>
      </div>
      {openNavBar && (
        <div className="flex flex-col items-center gap-2 py-2">
          {navOptions.map((link) => (
            <NavBarLink key={link.title} title={link.title} link={link.link} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
