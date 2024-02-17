"use client";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";
import { motion, useInView } from "framer-motion";

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div id="projects" className="flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold text-white mb-5">
        My Projects
      </h1>
      <ul ref={ref} className="flex flex-col gap-8 md:w-[60%]">
        {projectData.map((item, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard data={item} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectSection;
