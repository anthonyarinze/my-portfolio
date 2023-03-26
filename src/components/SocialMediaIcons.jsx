import React from "react";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import GitHub from "../assets/GitHub.png";
import Hashnode from "../assets/hashnode.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/anthony-arinze-a5544321b/"
        target="_blank"
        rel="nonreferrer"
      >
        <img alt="linkedin-link" src={LinkedIn} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/_SaintAnthony_"
        target="_blank"
        rel="nonreferrer"
      >
        <img alt="twitter-link" src={Twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/anthonyarinze"
        target="_blank"
        rel="nonreferrer"
      >
        <img alt="github-link" src={GitHub} className="rounded" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://saintanthony.hashnode.dev"
        target="_blank"
        rel="nonreferrer"
      >
        <img alt="hashnode-link" src={Hashnode} className="rounded" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
