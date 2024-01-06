import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link: string;
}

function NavBarLink({ title, link }: Props) {
  return (
    <Link
      href={`/${link}`}
      className="mx-3 font-[500] relative hover:text-gray-300 transition-all ease-linear duration-100 "
    >
      {title}
    </Link>
  );
}

export default NavBarLink;
