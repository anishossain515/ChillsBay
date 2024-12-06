import React, { useEffect } from "react";
import { ClockIcon,MapPinIcon,TagIcon,CalendarIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
function SliderInfo({
  des,
  img,
  head,
  setCurrentIndex,
  totalUsers,
  currentIndx,
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index === totalUsers - 1 ? 0 : index + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [setCurrentIndex, totalUsers]);

  return (
    <div className="overflow-hidden flex flex-col  items-center justify-center space-y-10 ">
      <div className="flex lg:flex-row flex-col items-center gap-[30px] md:mt-10">

       <div className="flex flex-col lg:gap-8 gap-4">
        <h3 className="text-Dark_Indigo font-bold md:text-[32px] sm:text-3xl text-2xl max-w-[240px] sm:max-w-[471px] text-start">Upcoming events this weekend</h3>

       <div className="flex flex-col items-center gap-4">
       <img src={img} alt="SliderImg" />
         {/* Circle Slider */}
        <div className="space-x-6">
        {Array.from(Array(totalUsers).keys()).map((index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`size-[10px] rounded-full transition-all duration-300 ${
              index === currentIndx ? "bg-[#26395C]" : "bg-[#969DAA]"
            }`}
          />
        ))}
      </div>
       {/* Circle Slider */}
       </div>

       </div>

        <div className="flex flex-col items-start space-y-5">

          <h1 className="text-Dark_Indigo font-bold sm:text-[42px] leading-10 text-2xl max-w-[385px]">{head}</h1>

          <p className="text-Dark_Indigo sm:text-[20px]  max-w-[385px]">
            {des}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-0 lg:gap-4 max-w-[372px]">
            
            <div className="flex items-center gap-[10px]">
              <CalendarIcon className="size-6 text-[#0E8BFF]"/>
              <p className="text-Dark_Indigo font-bold text-[20px]">Dec 12 2022</p>
            </div>

            <div className="flex items-center sm:gap-[15px] gap-2 xl:pl-14 lg:pl-0 sm:pl-8">
              <MapPinIcon className="size-6 text-[#0E8BFF]"/>
              <p className="text-Dark_Indigo font-bold text-[20px]">TBS  Lagos</p>
            </div>

            <div className="flex items-center gap-[15px]">
              <ClockIcon className="size-6 text-[#0E8BFF]"/>
              <p className="text-Dark_Indigo font-bold text-[20px]">9:00 PM</p>
            </div>

            <div className="sm:flex items-center gap-[15px] xl:pl-28 lg:pl-10 sm:pl-20 hidden">
              <TagIcon className="size-6 text-[#0E8BFF]"/>
              <p className="text-Dark_Indigo font-bold text-[20px]">N20,000</p>
            </div>

          </div>
        {/* Tags */}

        {/* Button */}
        <div className="space-x-4 space-y-2 flex ">
           <Button color="primary" variant="bordered" className="sm:px-[38px] px-[28px] mt-2">Add to cart</Button> 
           <Button color="primary" className="px-[38px]">Book Now</Button>
        </div>
        {/* Button */}

        <div className="sm:flex items-center gap-3 hidden">
          <p className="text-Dark_Indigo text-[20px]">Connect with us on:</p>
         <div className="flex items-center gap-5">
           <img src="/Twitter.png" alt="Twitter" />
           <img src="/Instagram.png" alt="Instagram" />
         </div> 
        </div>

        </div>

      </div>
    
    </div>
  );
}

export default SliderInfo;
