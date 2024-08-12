import React from "react";
import Button from "./Button";
import Project from "./Project";

const MyProjects = () => {
  return (
    <div
      id="projects"
      className="w-full mx-auto justify-center items-center mt-20"
    >
      <p className="font-serif text-center font-extrabold text-3xl mb-4">
        My Projects
      </p>
      <div className="text-center mb-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet
          obcaecati omnis nihil minus qui?
        </p>
        <p> dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
      </div>
      <div className="flex w-2/3 justify-center m-auto gap-4">
        <div className="border border-gray-400 rounded-md bg-gray-200 p-2">
          <Button content={"All"} />
        </div>
        <div className="border border-gray-400 rounded-md bg-gray-200 p-2">
          <Button content={"UI/UX"} />
        </div>
        <div className="border border-gray-400  rounded-md bg-[#FD6F00] text-white p-2">
          <Button content={"Web Design"} />
        </div>
        <div className="border border-gray-400 rounded-md bg-gray-200 p-2">
          <Button content={"App design"} />
        </div>
        <div className="border border-gray-400 rounded-md bg-gray-200 p-2">
          <Button content={"Graphic Design"} />
        </div>
      </div>
      <div className="flex justify-between gap-5 mt-10">
        <Project project="/Group 25.png" />
        <Project project="/Group 26.png" />
        <Project project="/Group 27.png" />
      </div>
    </div>
  );
};

export default MyProjects;
