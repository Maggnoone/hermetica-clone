import React from "react";
import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:flex block justify-around pt-12">
      <div className="flex justify-around">
        <div className="md:pr-6">
          <SiDiscord size={28} />
        </div>
        <div className="md:pl-6">
          <BsTwitter size={28} />
        </div>
      </div>
      <div>
        <ul className="flex justify-around">
          <Link href="/">
            <li className="text-white py-4 text-center text-xs underline md:pr-6">
              How it Works
            </li>
          </Link>
          <Link href="/">
            <li className="text-white py-4 text-center text-xs underline md:pr-6">
              Terms of Use
            </li>
          </Link>
        </ul>
        <Link href="/">
          <li className="text-white py-4 text-center text-xs list-none md:pr-6">
            @ 2023 Hermetica
          </li>
        </Link>
      </div>
      <div className="">
        <button className="btn border p-1 hover:bg-white hover:text-black rounded-full hidden md:flex">
          Light Mode
        </button>
      </div>
    </div>
  );
};

export default Footer;
