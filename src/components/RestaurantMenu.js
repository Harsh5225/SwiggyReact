import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCardres from "./MenuCardres";
import { Link } from "react-router";
const RestaurantMenu = () => {
  let { id } = useParams();
  // console.log(id);
  const [ResDat, Setresdata] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const swiggyApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
      const response = await fetch(swiggyApi);
      const data = await response.json();
      // console.log(data);
      const tempData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      // console.log( tempData);
      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );

      // console.log("hello==>",filterData);
      Setresdata(filterData);
    }
    fetchData();
  }, []);
  // console.log(ResDat);
  return (
    <div>
      <div className="w-[60%] mx-auto mt-30 mb-10">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full bg-gray-200 p-4 rounded-2xl shadow-xl text-center ">
            Search for dishes..
          </p>
        </Link>
      </div>

      <div className="w-[60%] mx-auto mt-20 mb-10">
        <button
          className={`drop-shadow-md border-2 rounded-lg px-2 mr-4 ${
            selected === "Veg" ? "bg-green-600" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "Veg" ? null : "Veg")}
        >
          Veg
        </button>
        <button
          className={`drop-shadow-md border-2 rounded-lg px-2  mr-4 ${
            selected === "Non-Veg" ? "bg-red-600" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "Non-Veg" ? null : "Non-Veg")}
        >
          Non-Veg
        </button>
      </div>
      <div className="w-max-[80%] mx-auto">
        {ResDat.map((menuObject) => {
          // console.log(menuObject?.card?.card)
          return (
            <MenuCardres
              key={menuObject?.card?.card?.title}
              MenuData={menuObject?.card?.card}
              Foodselected={selected}
            ></MenuCardres>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
