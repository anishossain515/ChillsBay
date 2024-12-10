import React, { useState } from "react";
import SliderInfo from "../../Common/SliderInfo";

const SliderData = [
  {
    img:'/slider2.png',
    head:'GTCO Food and Drink Festival 2022: Africa\'s Biggest Food and Drink Festival',
    des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    img:'/slider1.png',
    head:'GTCO Food and Drink Festival 2022: Africa\'s Biggest Food and Drink Festival',
    des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    img:'/slider3.png',
    head:'GTCO Food and Drink Festival 2022: Africa\'s Biggest Food and Drink Festival',
    des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  }
]

function EatSlider() {
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
      <div className="flex items-center lg:px-[100px] md:px-20 sm:px-10 px-4">
        <button
          onClick={preIndex}
          className="xl:block hidden transition-all duration-300 translate hover:scale-105"
        >
          <img src="/Vector1.png" alt="Previous" className="w-full h-full object-cover"/>
        </button>

        <div className="max-w-[1100px] mx-auto">
          <SliderInfo
          img={img}
          des={des}
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

export default EatSlider;