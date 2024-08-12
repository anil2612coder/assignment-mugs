"use client";
import React, { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center items-center text-center w-full ">
      <div className=" p-2 rounded-lg shadow-sm">
        <input
          type="text"
          value={value}
          placeholder="Enter Your Email"
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 border-none outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 rounded-lg"
        />
      </div>

      <div className="  w-36 bg-[#FD6F00] rounded-md  text-white flex justify-center items-center h-10">
        <Button content={"Contact Me"} />
      </div>
    </div>
  );
};

export default ContactForm;
