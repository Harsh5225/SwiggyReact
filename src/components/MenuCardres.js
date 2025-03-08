import React, { useState } from "react";
import DisplayCard from "./DisplayCard";

const MenuCardres = ({ MenuData, Foodselected }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);

  if (Foodselected === "Veg") {
    return (
      <>
        <div className="w-[60%] mx-auto p-5 bg-gray-50 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">
              {MenuData?.title}
            </h2>
            <button
              onClick={toggleOpen}
              className="bg-white hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
            >
              {isOpen ? "↑" : "."}
            </button>
          </div>

          {/* Conditional Rendering for Menu Items */}
          {isOpen && (
            <div className="mt-4">
              {MenuData?.categories
                ? MenuData.categories.map((category) =>
                    category.itemCards
                      .filter((food) => "isVeg" in food?.card?.info)
                      .map((ele) => (
                        <DisplayCard
                          key={ele?.card?.info?.id}
                          resData={ele?.card?.info}
                        />
                      ))
                  )
                : MenuData?.itemCards
                    ?.filter((food) => "isVeg" in food?.card?.info)
                    .map((items) => (
                      <DisplayCard
                        key={items?.card?.info?.id}
                        resData={items?.card?.info}
                      />
                    ))}
            </div>
          )}
        </div>
      </>
    );
  } else if (Foodselected === "Non-Veg") {
    return (
      <>
        <div className="w-[60%] mx-auto p-5 bg-gray-50 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">
              {MenuData?.title}
            </h2>
            <button
              onClick={toggleOpen}
              className="bg-white hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
            >
              {isOpen ? "↑" : "."}
            </button>
          </div>

          {/* Conditional Rendering for Menu Items */}
          {isOpen && (
            <div className="mt-4">
              {MenuData?.categories
                ? MenuData.categories.map((category) =>
                    category.itemCards
                      .filter((food) => !("isVeg" in food?.card?.info))
                      .map((ele) => (
                        <DisplayCard
                          key={ele?.card?.info?.id}
                          resData={ele?.card?.info}
                        />
                      ))
                  )
                : MenuData?.itemCards
                    ?.filter((food) => !("isVeg" in food?.card?.info))
                    .map((items) => (
                      <DisplayCard
                        key={items?.card?.info?.id}
                        resData={items?.card?.info}
                      />
                    ))}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="w-[60%] mx-auto p-5 bg-gray-50 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{MenuData?.title}</h2>
        <button
          onClick={toggleOpen}
          className="bg-white hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
        >
          {isOpen ? "↑" : "."}
        </button>
      </div>

      {/* Conditional Rendering for Menu Items */}
      {isOpen && (
        <div className="mt-4">
          {MenuData?.categories
            ? MenuData.categories.map((category) =>
                category.itemCards.map((ele) => (
                  <DisplayCard
                    key={ele?.card?.info?.id}
                    resData={ele?.card?.info}
                  />
                ))
              )
            : MenuData?.itemCards?.map((items) => (
                <DisplayCard
                  key={items?.card?.info?.id}
                  resData={items?.card?.info}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default MenuCardres;
