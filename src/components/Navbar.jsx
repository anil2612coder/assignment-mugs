import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between mx-auto mt-7 items-center">
      <div>
        <Logo />
      </div>
      <div className="flex justify-between w-2/3 mt-3 gap-5 font-sans font-medium">
        <Link href="/">Home</Link>
        <Link href="#about">About me</Link>
        <Link href="#service">Service</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link href="#contact">Contact</Link>

        <div className=" -mt-2 w-36 bg-[#FD6F00] rounded-md  text-white flex justify-center items-center h-10">
          <Button content={"Download CV"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
