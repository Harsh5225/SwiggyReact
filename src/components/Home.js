import React from "react";
import Header from "./Header";
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import DineOption from "./DineOption";
import Swiggyimg from "./Swiggyimg";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Header />
      <FoodOption />
      <GroceryOption />
      <DineOption />
      <Swiggyimg />
      <Footer />
    </>
  );
};

export default Home;
