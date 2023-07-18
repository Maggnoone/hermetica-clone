"use client";
import React from "react";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleRight,
  FaRegClock,
  FaBitcoin,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";

const HeroVaultSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-36">
        <div className="relative md:flex block justify-between p-6 w-[90%] rounded-tl-none rounded-tr-none rounded-br-[25px] rounded-bl-[25px]  ease-in duration-500">
          <div className="border rounded-[30px] p-12 shadow-xl bg-[#0b1234]">
            <div className="grid grid-cols-1 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex">
                  <div className="flex-col text-xl md:pr-48 pr-3">
                    <h3 className="md:text-2xl text-lg flex">
                      <FaBitcoin className="mr-2" size={45} />
                      BTC Covered Call
                    </h3>
                    <h3 className="md:text-2xl text-lg flex justify-center">
                      29,857 USD
                    </h3>
                  </div>
                </div>
                <div className="flex items-center p-16">
                  <div className="flex-col text-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] w-[100%] mt-6 md:text-lg text-xs">
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>Extrapolated APY (pre-fees)</h3>
              <h3>16.1%</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[100%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>Extrapolated APY (post-fees)</h3>
              <h3>14.4%</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[100%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>Latest 7 Days Growth</h3>
              <h3>0.17%</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[100%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>Latest Epoch Annualized</h3>
              <h3>9.04%</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[100%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>30 Days Growth</h3>
              <h3>0%</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[100%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>30 Days Growth Annualized</h3>
              <h3>0%</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[100%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>Growth Since Inception</h3>
              <h3>0.73% (17 Days)</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[100%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>Growth Since Inception Annualized</h3>
              <h3>13.4%</h3>
            </div>
            <div className="flex justify-center">
              <hr className="border md:w-[83%] w-[100%] mt-2" />
            </div>
            <div className="flex justify-between md:px-12 px-1 py-2">
              <h3>Total Premium Generated</h3>
              <h3>$3.89</h3>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </div>
        {/* barr */}
        <div className="flex flex-col md:w-[85%] w-[90%] md:py-20 py-8 md:text-xl text-xs">
          <div className="flex justify-between md:px-28 py-2 w-full">
            <h3>Product</h3>
            <h3>Deposited</h3>
            <h3 className="md:flex hidden">Premium</h3>
            <h3>Return</h3>
            <h3 className="md:flex hidden">Tx</h3>
          </div>
          <div className="flex justify-center">
            <hr className="border w-[100%] mt-2" />
          </div>
          <div className="flex justify-between py-2">
            <div className="flex items-center text-lg">
              <FaBitcoin className="mr-2" size={35} />
              <div>
                <h6 className="md:text-xl text-xs flex">BTC 35,000 CALL</h6>
                <p className="md:text-lg text-xs">Jul 21, 2023</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">0.05308004 BTC</div>
            <div className="md:flex flex-col justify-center items-center hidden">
              <div>0.0000795</div>
              <div>BTC</div>
              <div>0.150%</div>
            </div>
            <div className="flex flex-col justify-center">In Progress</div>
            <div className="md:flex justify-center items-center hidden">
              <BsThreeDotsVertical size={35} />
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="border w-[100%] mt-2" />
          </div>
          <div className="flex justify-between py-2">
            <div className="flex items-center text-lg">
              <FaBitcoin className="mr-2" size={35} />
              <div>
                <h6 className="md:text-xl text-xs flex">BTC 34,000 CALL</h6>
                <p className="md:text-lg text-xs">Jul 14, 2023</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">0.05308004 BTC</div>
            <div className="md:flex flex-col justify-center items-center hidden">
              <div>0.0000795 BTC</div>
              <div>0.150%</div>
            </div>
            <div className="flex flex-col justify-center">In Progress</div>
            <div className="md:flex justify-center items-center hidden">
              <BsThreeDotsVertical size={35} />
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="border w-[100%] mt-2" />
          </div>
          <div className="flex justify-between py-2">
            <div className="flex items-center text-lg">
              <FaBitcoin className="mr-2" size={35} />
              <div>
                <h6 className="md:text-xl text-xs flex">BTC 33,000 CALL</h6>
                <p className="md:text-lg text-xs">Jul 7, 2023</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">0.05308004 BTC</div>
            <div className="md:flex flex-col justify-center items-center hidden">
              <p>0.0000795 BTC</p>
              <p>0.150%</p>
            </div>
            <p className="flex flex-col justify-center">In Progress</p>
            <div className="md:flex justify-center items-center hidden">
              <BsThreeDotsVertical size={35} />
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="border w-[100%] mt-2" />
          </div>
        </div>
        {/* Epoch */}
        <div className="bg-[#3b4158] p-10 w-[90%] flex flex-col font-medium px-12 mt-12 text-2xl rounded-[30px] tracking-wider">
          <div className="flex justify-start">
            <div className="text-xl">
              <h3 className="text-2xl">The Epoch</h3>
              <p>Current stage: Intra epoch</p>
            </div>
          </div>
          <div className="flex justify-end">
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
    </div>
  );
};

export default HeroVaultSection;
