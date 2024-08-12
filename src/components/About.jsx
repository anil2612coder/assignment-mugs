import Image from "next/image";
import React from "react";
import AboutRange from "./AboutRange";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="flex mt-12 mx-auto w-full justify-between gap-10"
    >
      <div className="w-1/3">
        <Image src="/Group 7.png" width={320} height={320} alt="About pic" />
      </div>
      <div className="flex-1">
        <p className="text-2xl font-bold">About Me</p>
        <p className="mt-4 font-serif ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          cupiditate, asperiores culpa vel quasi corporis alias atque possimus
          voluptates, sunt, sequi distinctio impedit rem mollitia temporibus
        </p>
        <div>
          <AboutRange content={"UX"} range={85} />
          <AboutRange content={"Website Design"} range={70} />
          <AboutRange content={"App Design"} range={90} />
          <AboutRange content={"Graphic Design"} range={80} />
        </div>
      </div>
    </div>
  );
};

export default About;
