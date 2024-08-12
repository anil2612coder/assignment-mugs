import React from "react";
import Button from "./Button";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex w-full m-auto mt-16 gap-16 ">
      <div className="w-1/2">
        <p className="font-medium font-sans ">Hi I am</p>
        <p className="font-semibold font-sans text-xl text-[#FD6F00]">
          Muhammad Umair
        </p>
        <p className="font-extrabold text-7xl">UI & UX</p>
        <p className="text-end font-extrabold text-7xl">Disigner</p>
        <p className="font-serif mt-4 font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          voluptates soluta architecto modi molestiae ab inventore, illum esse
          sed, obcaecati pariatur
        </p>
        <p className="bg-[#FD6F00] w-28 rounded-md mt-4  text-white flex justify-center items-center h-8">
          <Button content={"Hire Me"} />
        </p>
      </div>
      <div className="w-1/2 pl-28 -mt-5 flex flex-col gap-5">
        <div>
          <Image src="/Group 2.png" width={320} height={320} alt="hero pic" />
        </div>
        <div className="w-1/2  ml-12 flex justify-center items-start gap-3">
          <FaFacebook className="text-xl" />
          <FaTwitter className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaLinkedin className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
