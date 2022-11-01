import React from "react";
import zuriLogo from "../../assets/images/zuriLogo.png";
import ingressiveLogo from "../../assets/images/ingressiveLogo.png";

export const Footer = () => {
  return (
    <div className="my-8">
      <hr className="border-t-2 border-primary md:w-10/12 md:mx-auto" />
      <div className="md:flex md:w-10/12 md:justify-between md:mx-auto md:py-8">
        <img src={zuriLogo} alt="" className="mt-3" />
        <p className="text-start text-secondary text-sm font-normal mt-3">
          HNG Internship 9 Frontend Task
        </p>
        <img src={ingressiveLogo} alt="" className="mt-3" />
      </div>
    </div>
  );
};
