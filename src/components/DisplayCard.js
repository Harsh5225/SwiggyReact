import React, { useState } from "react";
import { addItem, incrementItem, decrementItem } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";
const DisplayCard = ({ resData }) => {
  // console.log(resData);
  let price = resData?.defaultPrice || resData?.price;

  /*
  Various ways to check if it exists .
Using hasOwnProperty() – Checks if the property exists directly on the object (not inherited).

Using the in operator – Checks if the property exists in the object, including inherited properties.

Using typeof – Checks if the property is defined to avoid errors if it doesn’t exist.

Using Optional Chaining (?.) – Safely checks for nested properties without causing errors.
  */

  // console.log(price);

  /// add function
  // const [count, Setcount] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartSlice.items);

  const element = items.find((item) => item.id === resData.id);
  const count = element ? element.quantity : 0;

  function Addhandleitems() {
    dispatch(addItem(resData));
  }
  function IncrementitemHandle() {
    dispatch(incrementItem(resData));
  }
  function DecrementitemHandle() {
    dispatch(decrementItem(resData));
  }

  return (
    <>
      <div className="flex container mx-auto  p-10 justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-300  rounded-2xl border border-gray-200 mb-4">
        <div className="w-[70%] flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-800">
            {resData?.name}
          </h2>

          <p className="text-lg font-medium text-green-600">
            {"₹" + price / 100}
          </p>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
              {resData?.ratings?.aggregatedRating?.rating}
            </span>
            <span>({resData?.ratings?.aggregatedRating?.ratingCountV2})</span>
          </div>

          <p className="text-gray-500 text-sm line-clamp-2">
            {resData?.description}
          </p>
          <div className="border-t border-gray-600 mt-3"></div>
        </div>

        {/* Image & Button */}
        <div className="w-[25%] relative flex flex-col items-center">
          <img
            className="w-full h-40  object-cover rounded-lg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              resData?.imageId
            }
            alt={resData?.name}
          />
          {count === 0 ? (
            <button
              className="absolute bottom-[-10px] left-0 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5  w-[100px] py-2 rounded-xl shadow-md transition-all duration-300"
              onClick={() => Addhandleitems()}
            >
              Add
            </button>
          ) : (
            <div className="absolute bottom-[-10px] left-0 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5  w-[100px] py-2 rounded-xl shadow-md transition-all duration-300 flex gap-3 items-center">
              <button
                onClick={() => DecrementitemHandle()}
                className="text-2xl text-white"
              >
                −
              </button>
              <span className="text-xl">{count}</span>
              <button
                onClick={() => IncrementitemHandle()}
                className="text-2xl text-white"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <div className="bg-gray-700 h-0.5 w-full mb-2"></div> */}
    </>
  );
};

export default DisplayCard;
