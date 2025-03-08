import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import ShimmerRestList from "./Shimmer";
const Restaurant = () => {
  const [restaurantData, setrestaurantData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // const proxyServer = "https://cors-anywhere.herokuapp.com/"; // need to check why its not working
      // i have to take some tokens / permission before using heroku 
      const swiggyApi =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const response = await fetch(swiggyApi);
      console.log(response)
      const data = await response.json();
      setrestaurantData(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    }
    fetchData();
  }, []);


  // shimmer Effect
  if (restaurantData.length == 0) {
    return (<ShimmerRestList></ShimmerRestList>)
  } else {
    console.log("hello", restaurantData);
    return (
      restaurantData.length > 0 && (
        <div className="flex flex-wrap w-[80%] conatiner mx-auto mt-20 gap-10">
          {restaurantData.map((resInfo) => (
            <RestCard key={resInfo.info.id} data={resInfo}></RestCard>
          ))}
        </div>
      )
    );
  }
};

export default Restaurant;
