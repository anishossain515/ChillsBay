import React, { useEffect, useState } from "react";
import { ChillsBayData } from "./Utilities/Data";

function ChillsBay() {
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const { img, head, des } = ChillsBayData[CurrentIndex];

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((index)=>index === ChillsBayData.length - 1 ? 0 : index + 1)
    },3000)
    return ()=> clearInterval(interval)
},[setCurrentIndex])

  return (
    <section className="sm:bg-white bg-[#F5FAFF] py-[50px] lg:px-16 sm:px-10 px-5">
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-Dark_Indigo text-center font-bold md:text-[42px] sm:text-4xl text-3xl">
          Why Use Chillsbay?
        </h1>

        <div className="bg-[#F5FAFF] sm:flex hidden flex-wrap gap-20 px-10 py-14 mt-10 rounded-2xl shadow-lg justify-center">
          {ChillsBayData.map(({ img, head, des }, index) => (
            <div
              className="flex flex-col items-center max-w-[317.95px]"
              key={index}
            >
              <img
                src={img}
                alt="ChillsBayImg"
                className="bg-[#ecf6ff] rounded-xl sm:w-[100px] w-20"
              />
              <h3 className="font-bold text-black md:text-[32px] sm:text-4xl text-2xl max-w-[295px] pt-4 text-center">
                {head}
              </h3>
              <p className="sm:text-2xl text-base max-w-[300px] text-center pt-3">
                {des}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="max-w-[320px] mx-auto">
          <div className="flex flex-col items-center max-w-[317.95px] mt-10">
            <img
              src={img}
              alt="ChillsBayImg"
              className="bg-[#ecf6ff] rounded-xl sm:w-[100px] w-20"
            />
            <h3 className="font-bold text-black md:text-[32px] sm:text-4xl text-[22px] max-w-[295px] pt-4 text-center">
              {head}
            </h3>
            <p className="sm:text-2xl text-base max-w-[300px] text-center pt-3">
              {des}
            </p>

            {/* Circle Slider */}
            <div className="space-x-6">
              {Array.from(Array(3).keys()).map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`size-[10px] rounded-full transition-all duration-300 bg-[#26395C] mt-4
                      ${
                        index === CurrentIndex ? "bg-[#26395C]" : "bg-[#969DAA]"
                      }`}
                />
              ))}
            </div>
            {/* Circle Slider */}
          </div>
        </div>
        {/* Mobile View */}
      </div>
    </section>
  );
}

export default ChillsBay;
