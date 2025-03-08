import React from "react";
import { Link } from "react-router";

const CheckoutHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto py-3 px-6 flex justify-between items-center">
        
        {/* Swiggy Logo */}
        <Link to="/">
          <p className="bg-orange-600 text-white text-2xl font-bold px-5 py-2 rounded-lg shadow-md transition duration-200 hover:bg-orange-700">
            Swiggy
          </p>
        </Link>

        {/* Help Section */}
        <p className="text-lg font-medium text-gray-700 bg-gray-200 px-4 py-2 rounded-lg transition duration-200 hover:bg-gray-300 cursor-pointer">
          Help
        </p>

      </div>
    </div>
  );
};

export default CheckoutHeader;
