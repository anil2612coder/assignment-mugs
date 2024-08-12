import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-between mx-auto mt-24 items-center">
      <div>
        <Logo />
      </div>
      <div className="flex justify-between w-2/3 mt-10 gap-3 font-sans font-medium">
        <p>Home</p>
        <p>About me</p>
        <p>Service</p>
        <p>Projects</p>
        <p>Testimonials</p>
        <p>Contact</p>
      </div>
      <div className="flex w-1/4 pl-12 mt-10 gap-3  font-sans font-medium">
        <FaFacebook className="text-xl" />
        <FaTwitter className="text-xl" />
        <FaInstagram className="text-xl" />
        <FaLinkedin className="text-xl" />
      </div>
    </div>
  );
};

export default Footer;
