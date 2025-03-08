import React from "react";

const FoodCard = ({ value }) => {
  return (
    <div >
      {/* <img className="h-44 w-32" src={`https://media-assets.swiggy.com/${value.imageId}`}></img> */}
      <a href={value?.action?.link}>
        <img
          className="h-50 w-40"
          src={"https://media-assets.swiggy.com/" + value?.imageId}
        ></img>
      </a>
    </div>
  );
};

export default FoodCard;
