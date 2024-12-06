import React, { useState } from "react";
import { SliderData } from "../../Utilities/Data";
import SliderInfo from "./SliderInfo";

function Slider() {
  const [currentIndx, setCurrentIndex] = useState(0);

  const preIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1
    );
  };

  const nextIndex = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === SliderData.length - 1 ? 0 : nextIndex + 1
    );
  };

  const { img,head,des } = SliderData[currentIndx];

  return (
    <section className="mt-10">
      <div className="space-y-10">

        <h1 className="text-Dark_Indigo font-bold lg:text-[42px] md:text-4xl text-3xl text-center px-2">See How People are Chilling On Chillsbay</h1>
        
        <div className="flex items-center lg:px-[100px] md:px-20 sm:px-10 px-4">
        <button
          onClick={preIndex}
          className="xl:block hidden transition-all duration-300 translate hover:scale-105"
        >
          <img src="/Vector1.png" alt="Previous" className="w-full h-full object-cover"/>
        </button>

        <div className="max-w-[1100px] mx-auto">
          <SliderInfo 
            des={des}
            img={img}
            head={head}
            currentIndx={currentIndx}
            setCurrentIndex={setCurrentIndex}
            totalUsers={SliderData.length}
          />
        </div>

        <button
          onClick={nextIndex}
          className="xl:block hidden transition-all duration-300 translate hover:scale-105"
        >
          <img src="/Vector2.png" alt="Next" />
        </button>
        </div>

      </div>
    </section>
  );
}

export default Slider;