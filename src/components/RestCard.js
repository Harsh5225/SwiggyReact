import { Link } from "react-router";
const RestCard = ({ data }) => {
  console.log(data.info.id);
  return (
    <Link to={"/city/delhi/" + data.info.id}>
      <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 rounded-2xl">
        <img
          className="w-80 h-48 object-cover rounded-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            data.info.cloudinaryImageId
          }
        ></img>
        <div className="w-[95%] mx-auto mt-3">
          <div className="font-bold text-xl ">{data?.info?.name}</div>

          <span className="bg-green-600 text-white px-2 mt-2 text-sm font-semibold rounded-md shadow-md">
            {data?.info?.avgRating}⭐
          </span>
          <span className="mx-2 font-semibold">
            {data?.info?.sla?.slaString}
          </span>
        </div>
        <div className="px-2.5 text-gray-400 break-words">
          {console.log(data.info.cuisines)}
          {data?.info?.cuisines?.slice(0, 2).join(" ")}
        </div>
      </div>
    </Link>
  );
};

export default RestCard;
