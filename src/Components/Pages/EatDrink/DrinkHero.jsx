import { Button } from "@nextui-org/react";
import React from "react";

function DrinkHero() {
  return (
    <section className="bg-[url('/drinkHero.png')] bg-no-repeat  bg-center bg-cover w-full h-[555px] ">
     <div className="sm:py-[100px] py-24 sm:px-[100px] px-5">

     <div className="bg-[#FBFCFF] md:w-[600px] shadow-heroBox sm:px-8 px-6 py-7 rounded-[8px] bg-opacity-90">
         <h1 className="text-Dark_Indigo font-bold md:text-[42px] text-3xl">Our top pick for the week!</h1>

         <div className="flex flex-col text-Dark_Indigo pt-6">
            <h2 className="font-bold md:text-3xl text-xl">Nok by Alara</h2>
            <p className="text-[18px] max-w-[361px] pt-1 ">Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor .</p>
         </div>

        <div className="flex justify-end items-center">
         <Button color="primary" className="mt-5">Reserve Now</Button>
        </div>

      </div>

     </div>
    </section>
  );
}

export default DrinkHero;
