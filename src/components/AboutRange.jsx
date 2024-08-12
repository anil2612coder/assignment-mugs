"use client";
import React, { useState } from "react";

const AboutRange = ({ content, range }) => {
  const [valueChange, setValueChange] = useState("");
  return (
    <div>
      <p className="font-semibold mt-3 mb-2">{content}</p>
      <div className="flex items-center">
        <input
          type="range"
          min="0"
          max="100"
          value={range}
          onChange={(e) => setValueChange(e.target.value)}
          className="w-full h-2 bg-red-500 rounded-full outline-none"
        />
      </div>
    </div>
  );
};

export default AboutRange;
