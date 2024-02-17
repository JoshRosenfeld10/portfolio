"use client";
import Link from "next/link";
import { ProjectType } from "./projectData";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Props {
  data: ProjectType;
}

function ProjectCard({ data }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <div
        className="h-72 rounded-t-xl"
        style={{
          background: `url(${data.imagePath})`,
          backgroundSize: "cover",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <div className="flex rounded-t-xl justify-center items-center w-full h-full bg-[#181818] bg-opacity-75 transition-all duration-500 ">
            <Link
              href={data.githubLink}
              target="_blank"
              className="flex h-14 w-14 mr-2 border-2 items-center justify-center rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <GitHubIcon
                fontSize="large"
                className="text-[#ADB7BE] group-hover/link:text-white"
              />
            </Link>
            <Link
              href={data.previewLink}
              target="_blank"
              className="flex h-14 w-14 border-2 items-center justify-center rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <VisibilityIcon
                fontSize="large"
                className="text-[#ADB7BE] group-hover/link:text-white"
              />
            </Link>
          </div>
        )}
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{data.title}</h5>
        <p className="text-[#ADB7BE]">{data.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
