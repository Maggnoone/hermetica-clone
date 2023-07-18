"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaRegClock } from "react-icons/fa";

const DesplegableBars = () => {
  const [isOpenVault, setIsOpenVault] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-full mt-12">
      <button
        onClick={() => setIsOpenVault((prev) => !prev)}
        className={
          !isOpenVault
            ? "bg-[#1f2539] p-10 px-12 w-[90%] flex items-center justify-between font-medium text-2xl rounded-[30px] tracking-wider"
            : "bg-[#1f2539] p-10 px-12 w-[90%] flex items-center justify-between font-medium rounded-[30px] rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none tracking-wider text-2xl"
        }
      >
        Vault Details
        {!isOpenVault ? (
          <IoIosArrowDown className="h-8" size={40} />
        ) : (
          <IoIosArrowUp className="h-8" size={40} />
        )}
      </button>
      {isOpenVault && (
        <div className="bg-[#1f2539] relative md:flex block justify-between p-6 w-[90%] rounded-tl-none rounded-tr-none rounded-br-[25px] rounded-bl-[25px]  ease-in duration-500">
          <div className="border rounded-[30px] p-12 shadow-xl bg-[#0b1234]">
            <div className="grid grid-cols-1 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex">
                  <div className="flex-col md:text-lg md:pr-60 pr-22">
                    <h3 className="text-lg flex justify-around">
                      BTC Covered Call
                    </h3>
                    <p>Your deposits: 0 BTC</p>
                  </div>
                </div>
                <div className="flex items-center md:p-16 p-8">
                  <div className="flex-col text-xl">
                    <h1 className="md:text-5xl text-3xl flex justify-around">
                      8%
                    </h1>
                    <p className="text-xl">Target APY</p>
                  </div>
                </div>
                <div className="w-full pt-10"></div>
                <div className="flex justify-between">
                  <p className="flex md:pr-[20rem] pr-[1rem]">
                    Total: 0.0459 of 1 BTC
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] w-[100%] mt-4 text-xs">
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Underlying Asset</h3>
              <h3>xBTC</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Price</h3>
              <h3>$30,212</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Last Traded Option</h3>
              <h3>$35,000 CALL Jul 21</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Last Traded Size</h3>
              <h3>0.053 BTC</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Breakeven Price</h3>
              <h3>$35,053 (16.0%)</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Epoch Length</h3>
              <h3>1 Week</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Option Style</h3>
              <h3>European</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Auto-Compounding In</h3>
              <h3>6d 19h 16m 56s</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-2 py-2">
              <h3>Fees</h3>
              <h3>10% / 1%</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[95%] mt-2" />
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={
          !isOpen
            ? "bg-[#1f2539] p-10 w-[90%] flex items-center justify-between font-medium px-12 mt-12 text-2xl rounded-[30px] tracking-wider"
            : "bg-[#1f2539] p-10 w-[90%] flex items-center justify-between font-medium px-12 mt-12 rounded-[30px] rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none tracking-wider text-2xl"
        }
      >
        About strategy
        {!isOpen ? (
          <IoIosArrowDown className="h-8" size={40} />
        ) : (
          <IoIosArrowUp className="h-8" size={40} />
        )}
      </button>
      {isOpen && (
        <div className="bg-[#1f2539] relative flex justify-between p-6 w-[90%] rounded-tl-none rounded-tr-none rounded-br-[25px] rounded-bl-[25px]  ease-in duration-500">
          <div className="flex">
            <div className="flex px-6">
              <p>
                <h6>
                  Performance: <p>sadasdsadas</p>
                </h6>
                asdasd
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#3b4158] p-10 w-[90%] flex flex-col font-medium px-12 mt-12 text-2xl rounded-[30px] tracking-wider">
        <div className="flex justify-start">
          <div className="text-xl">
            <h3 className="text-2xl">The Epoch</h3>
            <p>Current stage: Intra epoch</p>
          </div>
        </div>
        <div className="flex md:justify-end justify-start py-4">
          <div className="text-xs">
            <p className="flex justify-center">
              <FaRegClock size={23} />
              <div className="flex">
                <h6 className="px-2">6d 2h 50m 59s </h6> before the epoch ends
              </div>
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[10%] pt-10 pr-2">
            <ProgressBar
              completed={100}
              customLabel=" "
              height="30px"
              bgColor="#c7d8e1"
              baseBgColor="#676b79"
            />
          </div>
          <div className="w-[25%] pt-10 pr-2">
            <ProgressBar
              completed={100}
              customLabel=" "
              height="30px"
              bgColor="#c7d8e1"
              baseBgColor="#676b79"
            />
          </div>
          <div className="w-[65%] pt-10 pr-2">
            <ProgressBar
              completed={10}
              customLabel=" "
              height="30px"
              bgColor="#c7d8e1"
              baseBgColor="#676b79"
            />
          </div>
        </div>
        <div className="flex justify-between pt-8 text-sm">
          <p>Friday 14th 12:00 PM</p>
          <p>Friday 21st 12:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default DesplegableBars;
