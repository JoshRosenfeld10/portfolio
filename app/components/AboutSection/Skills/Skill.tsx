"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  name: string;
  id: string;
}

function Skill({ name, id }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col justify-center items-center text-white w-[60px] h-[60px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
        <Image
          src={`https://skillicons.dev/icons?i=${id}`}
          alt={id}
          width={50}
          height={50}
          className={
            hovered
              ? "-translate-y-2 transition ease-out duration-500"
              : "translate-y-0 transition ease-out duration-500"
          }
        />
      </div>
      <h1
        className={
          hovered
            ? "text-xs -translate-y-2 transition ease-out duration-500"
            : "text-xs -translate-y-4 opacity-0 transition ease-out duration-500"
        }
      >
        {name}
      </h1>
    </div>
  );
}

export default Skill;
