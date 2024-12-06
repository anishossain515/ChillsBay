import React from "react";
import { MoodData } from "./Utilities/Data";

function Mood() {
  return (
    <section className="py-[50px]">
      <h1 className="text-Dark_Indigo font-bold md:text-[42px] sm:text-4xl text-2xl text-center px-2">
        What are you in the mood for?
      </h1>

      <div className="container mx-auto flex flex-wrap justify-center py-7 px-3 sm:px-5 md:px-10 ">
        {MoodData.map(({ img, title }, index) => (
          <div className="py-2" key={index}>
            <div className="overflow-hidden">
              <img src={img} alt={title} className="w-full h-[500px] object-cover"/>
            </div>
            <h2 className="text-Dark_Indigo font-bold text-center text-[32px] pt-3">
              {title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mood;
