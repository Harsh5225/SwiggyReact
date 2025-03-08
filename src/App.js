import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";
import DineOption from "./components/DineOption";
import Swiggyimg from "./components/Swiggyimg";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import SearchFood from "./components/SearchFood";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./Stored/Stores";
import { Provider } from "react-redux";
import Checkout from "./components/Checkout";
function App() {
  console.log(SearchFood);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
              <Route
                path="/restaurant"
                element={<Restaurant></Restaurant>}
              ></Route>
              <Route
                path="/city/delhi/:id"
                element={<RestaurantMenu></RestaurantMenu>}
              ></Route>
              <Route
                path="/city/delhi/:id/search"
                element={<SearchFood></SearchFood>}
              ></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
