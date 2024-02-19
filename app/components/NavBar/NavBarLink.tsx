import { Link } from "react-scroll";
import React from "react";

interface Props {
  title: string;
  link: string;
  scrollOffset: number;
}

function NavBarLink({ title, link, scrollOffset }: Props) {
  return (
    <Link
      to={`${link}`}
      spy={true}
      smooth={true}
      offset={scrollOffset}
      duration={1500}
      className="mx-3 font-[500] relative hover:text-gray-300 transition-all ease-linear duration-100 cursor-pointer"
    >
      {title}
    </Link>
  );
}

export default NavBarLink;
