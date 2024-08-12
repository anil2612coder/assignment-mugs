import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-full mx-auto justify-center items-center mt-20"
    >
      <p className="font-serif text-center font-extrabold text-3xl mb-4">
        Tesimonials
      </p>
      <div className="text-center mb-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet
          obcaecati omnis nihil minus qui?
        </p>
        <p> dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
      </div>
      <div className="w-3/5 bg-gray-100 m-auto flex justify-center mt-20">
        <div className="pl-5 w-5/12 pt-3">
          <Image src="/Ellipse 10.png" width={200} height={200} alt="review" />
        </div>
        <div className="flex-1 p-6">
          <p>
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            tempore voluptates voluptas at vero soluta molestias necessitatibus
            molestiae,
          </p>
          <p className="text-lg font-semibold font-serif mt-6">Name</p>
          <p>Ceo</p>
        </div>
      </div>
      <div className="w-full flex mx-auto justify-center mt-10">
        <Image
          src="/Group 35.png"
          alt="alternate"
          width={100}
          height={20}
          className="text-center"
        />
      </div>
    </div>
  );
};

export default Testimonials;
