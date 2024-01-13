"use client";
import React, { useState, startTransition } from "react";
import Skill from "./Skill";
import skills from "./skills";
import TabButton from "../TabButton";

enum selectionOptions {
  PROGRAMING,
  WEB_AND_DATABASE,
  FRAMEWORKS_AND_LIBRARIES,
  TECH,
}

function SkillSection() {
  const [selected, setSelected] = useState<selectionOptions>(
    selectionOptions.PROGRAMING
  );

  const handleTabChange = (id: selectionOptions) => {
    startTransition(() => {
      setSelected(id);
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 text-white">
      <h1 className="font-[500] text-2xl">Skills</h1>
      <div className="flex gap-5">
        <TabButton
          selectTab={() => handleTabChange(selectionOptions.PROGRAMING)}
          active={selected === selectionOptions.PROGRAMING}
        >
          Programing
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange(selectionOptions.WEB_AND_DATABASE)}
          active={selected === selectionOptions.WEB_AND_DATABASE}
        >
          Web & Database
        </TabButton>
        <TabButton
          selectTab={() =>
            handleTabChange(selectionOptions.FRAMEWORKS_AND_LIBRARIES)
          }
          active={selected === selectionOptions.FRAMEWORKS_AND_LIBRARIES}
        >
          Frameworks & Libraries
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange(selectionOptions.TECH)}
          active={selected === selectionOptions.TECH}
        >
          Tech
        </TabButton>
      </div>
      {(selected === selectionOptions.PROGRAMING && (
        <div className="grid grid-cols-4 gap-3">
          {skills.programing.map((skill) => (
            <Skill name={skill.name} id={skill.id} />
          ))}
        </div>
      )) ||
        (selected === selectionOptions.WEB_AND_DATABASE && (
          <div className="grid grid-cols-4 gap-3">
            {skills.web_and_database.map((skill) => (
              <Skill name={skill.name} id={skill.id} />
            ))}
          </div>
        )) ||
        (selected === selectionOptions.FRAMEWORKS_AND_LIBRARIES && (
          <div className="grid grid-cols-7 gap-3">
            {skills.frameworks_and_libraries.map((skill) => (
              <Skill name={skill.name} id={skill.id} />
            ))}
          </div>
        )) ||
        (selected === selectionOptions.TECH && (
          <div className="grid grid-cols-8 gap-3">
            {skills.tech.map((skill) => (
              <Skill name={skill.name} id={skill.id} />
            ))}
          </div>
        ))}
    </div>
  );
}

export default SkillSection;
