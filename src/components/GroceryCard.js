import React from "react";

const GroceryCard = ({ value }) => {
  // console.log(finalUrl);
  //  Learning - encoding and decoding of url
  // properly encoding and decoding URLs ensures smooth data transfer and prevents errors when working with APIs, databases, and routing.

  
  const baseUrl = "https://www.swiggy.com/instamart/category-listing";
  const categoryName = value.action.text;
  const encodeCategory = encodeURIComponent(categoryName).replace(/%20/g, "+");
  const finalUrl = `${baseUrl}?categoryName=${encodeCategory}`;

  return (
    <div>
      <a href={finalUrl}>
        <img
          className="h-50 w-40"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            value?.imageId
          }
        ></img>
      </a>
      <h2>{value.description}</h2>
    </div>
  );
};

export default GroceryCard;
