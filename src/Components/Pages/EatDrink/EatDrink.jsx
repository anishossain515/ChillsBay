import React from "react";
import DrinkHero from "./DrinkHero";
import FindPlace from "./FindPlace";
import EatCard from "./EatCard";
import EatSlider from "./EatSlider";
import Restaurants from "./Restaurants";

function EarDrink() {
  return (
    <>
      <DrinkHero />
      <FindPlace/>
      <EatCard/>
      <EatSlider/>
      <Restaurants/>
    </>
  );
}

export default EarDrink;
