import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
      </div>
      <div className="md:flex justify-center md:justify-between text-center px-40">
        <p className="font-playfair font-semibold text-2xl text-yellow">
          ANTHONY ARINZE
        </p>
        <p className="font-playfair text-md text-yellow">
          ©2023 ARINZE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
