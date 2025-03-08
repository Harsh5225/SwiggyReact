import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const ResHeader = () => {
  const counter = useSelector((state) => state.cartSlice.count);
  return (
    <div className="fixed top-0 left-0 w-full  z-50 bg-white shadow-md ">
      <div className="container mx-auto py-4 px-8 flex justify-between items-center">
        {/* Swiggy Logo */}
        <div>
          <Link to="/">
            <p className="bg-orange-600 text-white text-2xl font-bold px-4 py-2 rounded-lg shadow-md">
              Swiggy
            </p>
          </Link>
        </div>
        {/* Cart Section */}
        <Link to={"/Checkout"}>
          <p className="text-lg font-medium text-gray-700 bg-gray-200 px-4 py-2 rounded-lg">
            Cart {`(${counter})`}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ResHeader;





