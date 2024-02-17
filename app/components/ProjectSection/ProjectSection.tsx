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
    <div id="projects">
      <h1 className="text-center text-4xl font-bold text-white">My Projects</h1>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
