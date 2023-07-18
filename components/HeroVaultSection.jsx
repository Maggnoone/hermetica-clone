"use client";
import React from "react";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleRight,
  FaRegClock,
  FaBitcoin,
} from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

const HeroVaultSection = () => {
  return (
    <div className="px-4">
      <div className="absolute px-24 max-md:px-2">
        <ul className="flex pt-[9.5rem]">
          <li className="px-1">
            <FaRegArrowAltCircleDown size={27} />
          </li>
          <li className="">Deposit</li>
          <li className="pl-10">
            <FaRegArrowAltCircleUp size={27} />
          </li>
          <li className="px-1">Withdraw</li>
        </ul>
      </div>
      <div className="pt-48">
        <div className="flex justify-center">
          <div className="flex max-md:block">
            <div className="border2 rounded-[30px] p-12 bg-gradient-to-r from-[#0d1328] to-[#1e2438]">
              <div className="grid grid-cols-1 items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="flex">
                    <div className="flex flex-col md:pr-20 md:text-xl">
                      <h3 className="text-2xl">Deposit</h3>
                      <p>Balance: 0 BTC</p>
                    </div>
                    <div className="flex flex-col pl-20 text-[#535458]">
                      <p>auto-compound in</p>
                      <p className="flex justify-around">
                        <FaRegClock size={23} />
                        dasdasdasd
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-16">
                    <form className="border rounded-[10px] flex justify-center items-center p-4 bg-[#0b1234]">
                      <input
                        type="text"
                        placeholder="Enter amount"
                        className="h-10 w-[10rem] bg-[#0b1234] outline-none"
                      />
                      <label>BTC</label>
                    </form>
                    <div className="pl-4">
                      <button className="btn border rounded-[10px] p-6 px-8 bg-[#0b1234] hover:bg-[#16183f] hover:text-white hidden md:flex">
                        Max
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>Queued deposit: 0 BTC</p>
                  </div>
                  <div className="btn-group flex">
                    <button className="btn border p-3 px-16 hover:bg-white hover:text-black rounded-full hidden md:flex">
                      Deposit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            parte dos
             */}
            <div className="flex items-center justify-center px-2">
              <FaRegArrowAltCircleRight size={35} />
            </div>
            {/* 
            parte tres
             */}
            <div className="border rounded-[30px] p-12 shadow-xl bg-[#0b1234]">
              <div className="grid grid-cols-1 items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="flex">
                    <div className="flex-col text-xl pr-22 md:pr-60">
                      <h3 className="text-2xl flex justify-around">
                        <FaBitcoin size={35} />
                        BTC Covered Call
                      </h3>
                      <p>Your deposits: 0 BTC</p>
                    </div>
                  </div>
                  <div className="flex items-center p-16">
                    <div className="flex-col text-xl">
                      <h1 className="text-5xl flex justify-around">8%</h1>
                      <p>Target APY</p>
                    </div>
                  </div>
                  <div className="w-full pt-10">
                    <ProgressBar
                      completed={4}
                      customLabel=" "
                      height="10px"
                      bgColor="#f7931a"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="flex pr-[10rem] md:pr-[20rem] md:justify-center">
                      Total: 0.0459 of 1 BTC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVaultSection;
