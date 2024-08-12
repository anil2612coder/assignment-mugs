import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div
      id="service"
      className="w-full mx-auto justify-center items-center mt-20"
    >
      <p className="font-serif text-center font-extrabold text-3xl mb-4">
        Services
      </p>
      <div className="text-center mb-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet
          obcaecati omnis nihil minus qui?
        </p>
        <p> dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
      </div>
      <div>
        <Image src="/Group 21.png" height={300} width={1100} alt="service" />
      </div>
    </div>
  );
};

export default Services;
