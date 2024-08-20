import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap gap-5 md:gap-0">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a
                href="https://github.com/zinxon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a
                href="https://linkedin.com/in/shingson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">shingsonz@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-5">
          &copy; James Dev 2024 All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
