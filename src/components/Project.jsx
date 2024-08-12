import Image from "next/image";
import React from "react";

const Project = ({ project }) => {
  return (
    <div>
      <Image src={project} width={300} height={500} alt="project" />
    </div>
  );
};

export default Project;
