import React from "react";

function Chilling() {
  return (
    <section className="shadow-inner_shadow border border-[#9A9FBF1A]">
      <div className="py-[56px] lg:px-[100px] sm:px-10 max-w-[1600px] mx-auto">
        <h1 className="font-bold sm:text-2xl text-xl text-Dark_Indigo text-start  px-6 sm:px-0">
          See How people are chilling on{" "}
          <span className="text-Dodger_Blue">Chillsbay</span>
        </h1>

        <div className="flex flex-wrap items-center md:justify-start justify-center pt-8 sm:max-w-[1300px] max-w-full">
          <div className="w-[150px] sm:w-[200px]">
            <img
              src="/chilling1.png"
              alt="ChillingImg"
              className="w-full object-cover sm:h-[200px] h-[145.63px]"
            />
          </div>
          <div className="w-[150px] sm:size-[200px]">
            <img
              src="/chilling2.png"
              alt="ChillingImg"
              className="w-full object-cover sm:h-[200px] h-[145.63px]"
            />
          </div>
          <div className="w-[150px] sm:size-[200px]">
            <img
              src="/chilling3.png"
              alt="ChillingImg"
              className="w-full object-cover sm:h-[200px] h-[145.63px]"
            />
          </div>
          <div className="w-[150px] sm:size-[200px]">
            <img
              src="/chilling4.png"
              alt="ChillingImg"
              className="w-full object-cover sm:h-[200px] h-[145.63px]"
            />
          </div>
          <div className="w-[150px] sm:size-[200px]">
            <img
              src="/chilling5.png"
              alt="ChillingImg"
              className="w-full object-cover sm:h-[200px] h-[145.63px]"
            />
          </div>
          <div className="w-[150px] sm:size-[200px]">
            <img
              src="/chilling6.png"
              alt="ChillingImg"
              className="w-full object-cover sm:h-[200px] h-[145.63px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chilling;
