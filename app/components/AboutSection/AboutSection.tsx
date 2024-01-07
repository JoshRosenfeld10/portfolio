import Image from "next/image";
import React from "react";
import Skill from "./Skill";
import skills from "./skills";

function AboutSection() {
  return (
    <div
      id="about"
      className="bg-white flex flex-col justify-center items-center py-64 gap-10"
    >
      <div className="bg-white grid grid-cols-2 gap-10">
        <div id="image-side" className="flex justify-end">
          <div
            id="image"
            className="w-[350px] h-[350px] bg-black rounded-3xl flex justify-center items-center text-9xl"
          >
            🧑🏼‍💻
          </div>
        </div>

        <div id="text-side" className="flex justify-start">
          <div className="flex flex-col  gap-5 w-[450px] ">
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              ABOUT ME
            </h1>
            <p className="text-sm">
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
              <h1 className="font-[500]">Education</h1>
              <ul className="text-sm list-inside list-disc">
                <li>Queen's University</li>
                <li>Bachelor of Computing (Honours)</li>
                <li>Biomedical Computing Specialization</li>
                <li className="font-[500]">GPA: 4.22/4.30</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="bg-blue-500 w-full flex flex-col justify-center items-center gap-5"
      >
        <h1 className="font-[500] text-2xl">Skills</h1>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-10 h-fit max-w-[1000px] items-center">
            <h1 className=" col-span-3">Programing</h1>
            {skills.programing.map((skill) => (
              <Skill name={skill.name} id={skill.id} />
            ))}
          </div>
          <div className="grid grid-cols-10 h-fit max-w-[1000px] items-center">
            <h1 className="col-span-3">Web & Database</h1>
            {skills.web_and_database.map((skill) => (
              <Skill name={skill.name} id={skill.id} />
            ))}
          </div>
          <div className="grid grid-cols-10 h-fit max-w-[1000px] items-center">
            <h1 className="col-span-3 mr-10">Frameworks & Libraries</h1>
            {skills.frameworks_and_libraries.map((skill) => (
              <Skill name={skill.name} id={skill.id} />
            ))}
          </div>
          <div className="grid grid-cols-10  h-fit max-w-[1000px] items-center">
            <h1 className="col-span-3">Tech</h1>
            {skills.tech.map((skill) => (
              <Skill name={skill.name} id={skill.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
