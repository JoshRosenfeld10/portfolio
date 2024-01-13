import Image from "next/image";
import React from "react";
import SkillSection from "./Skills/SkillSection";

function AboutSection() {
  return (
    <div
      id="about"
      className="text-white flex flex-col justify-center items-center gap-10 py-6"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div id="image-side" className="flex md:justify-end justify-center">
          <div
            id="image"
            className="w-[350px] h-[350px] bg-black rounded-3xl flex justify-center items-center text-9xl"
          >
            🧑🏼‍💻
          </div>
        </div>

        <div
          id="text-side"
          className="flex md:justify-start justify-center text-center md:text-left"
        >
          <div className="flex flex-col  gap-5 w-[450px] ">
            <h1 className="font-bold text-2xl md:text-base text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              ABOUT ME
            </h1>
            <p className="text-sm text-[#ADB7BE]">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
            <div>
              <h1 className="font-[500] mb-5 md:mb-0 text-lg">Education</h1>
              <ul className="text-sm list-inside list-disc text-[#ADB7BE]">
                <li>Queen's University</li>
                <li>Bachelor of Computing (Honours)</li>
                <li>Biomedical Computing Specialization</li>
                <li className="font-[500]">GPA: 4.22/4.30</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SkillSection />
    </div>
  );
}

export default AboutSection;
