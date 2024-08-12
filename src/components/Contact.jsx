import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full mx-auto justify-center items-center mt-20"
    >
      <p className="font-serif text-center font-extrabold text-3xl mb-4">
        Contact Me
      </p>
      <div className="text-center mb-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet
          obcaecati omnis nihil minus qui?
        </p>
        <p> dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
