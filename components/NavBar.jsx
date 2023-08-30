"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Logo from "../public/assets/hermeticaLogo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const router = useRouter();

  return (
    <div className="backdrop-blur-lg fixed w-full h-32 pt-6 z-50 to-transparent">
      <div className="flex justify-center cursor-pointer w-full h-full px-6 2xl:px-16 md:filter-none">
        <div className="flex justify-between items-center h-full w-full">
          {/* <img src={"/public/static/images/hermeticaLogo.png"} alt="" /> */}
          <Image src={Logo} alt="" width={200} height={100}></Image>
          <div onClick={handleNav} className="md:hidden flex justify-end pl-6">
            <BiMenuAltRight size={40} />
          </div>
          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 hover:border-b">Vault</li>
              </Link>
              <Link href="/analytics">
                <li className="ml-10 hover:border-b">Analytics</li>
              </Link>
              <Link href="/">
                <li className="ml-10 hover:border-b">Portfolio</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="btn-group absolute right-5">
          <button className="btn border p-3 px-16 hover:bg-white hover:text-black rounded-full hidden md:flex bg-[#02071d]">
            Connect Wallet
          </button>
        </div>
        {/*  */}
        {/* // Mobile NavBar */}
        {/*  */}
        <div
          className={
            nav
              ? "md:hidden fixed left-[0] top-[0] h-screen w-full backdrop-blur-lg ease-in duration-300 z-10"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed top-0 right-0 w-[50%] sm:w-[35%] md:w-[50%] h-screen bg-[#060C2C] p-2 ease-in duration-300 z-11"
                : "fixed top-0 right-[-100%] p-2 ease-in duration-500 z-11"
            }
          >
            <div
              onClick={handleNav}
              className="md:hidden flex justify-end pb-6 p-4"
            >
              <AiOutlineClose size={30} />
            </div>
            <div className="">
              <Image src={Logo} width={250} height={150} alt="" />
            </div>
            <div className="py-8">
              <ul>
                <Link href="/">
                  <li className="text-white py-4 text-center text-sm">Vault</li>
                </Link>
                <Link href="/analytics">
                  <li className="text-white py-4 text-center text-sm">
                    Analytics
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-white py-4 text-center text-sm">
                    Portfolio
                  </li>
                </Link>
              </ul>
              <div className="btn-group flex justify-center pt-36">
                <button className="btn btn-wallet text-sm p-3 px-7 hover:bg-white hover:text-black rounded-full md:flex">
                  Connect Wallet
                </button>
              </div>
              <div className="flex justify-evenly pt-60">
                <SiDiscord size={28} />
                <BsTwitter size={28} />
              </div>
              <div>
                <ul className="flex justify-evenly">
                  <Link href="/">
                    <li className="text-white py-4 text-center text-xs underline">
                      How it Works
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="text-white py-4 text-center text-xs underline">
                      Terms of Use
                    </li>
                  </Link>
                </ul>
                <Link href="/">
                  <li className="text-white py-4 text-center text-xs list-none">
                    @ 2023 Hermetica
                  </li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
