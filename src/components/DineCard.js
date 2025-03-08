const DineCard = ({ resData }) => {
  // console.log(resData.info.mediaFiles[0].url)
  // earlier-> https://media-assets.swiggy.com/" +resData?.info?.mediaFiles.url  wrong
  // corrected url  console.log(resData.info.mediaFiles[0].url)
  // console.log("https://media-assets.swiggy.com/"+resData?.info?.mediaFiles[0].url)
  return (
    <div className=" rounded-2xl shadow-lg bg-white min-w-88">
      {/* Image Section */}
      <a  href={resData.cta.link} target="_blank">
      <div className="relative">
        <img
          className="w-full h-48 rounded-2xl object-cover"
          src={`https://media-assets.swiggy.com/${resData?.info?.mediaFiles[0]?.url}`}
          alt={resData?.info?.name}
        />
        {/* Restaurant Name */}
        <p className="absolute left-3 bottom-3 text-white font-extrabold text-lg bg-opacity-100 px-2 py-1 rounded-md z-50 ">
          {resData?.info?.name?.split(" ").slice(0, 2).join(" ")}
        </p>
        {/* Rating */}
        {resData?.info?.rating?.value && (
          <p className="absolute right-3 top-[75%] bg-green-600 text-white px-2 py-1 text-sm font-semibold rounded-md shadow-md">
            {resData.info.rating.value} ⭐
          </p>
        )}
      </div>

      {/* Details Section */}
      <div className="pt-3">
        {/* Cuisines & Price */}
        <div className="flex justify-between text-[13px]  text-gray-500 font-medium">
          <div className="pl-2">Continental • North Indian</div>
          <div className="font-bold pr-2">₹2000 for two</div>
        </div>

        {/* Location & Distance */}
        <div className="flex justify-between text-[13px]  text-gray-500 mt-1">
          <div className="pl-2">Punjabi Bagh, Delhi</div>
          <div className="pr-2">7.7 km</div>
        </div>

        {/* Offer Highlights */}
        {resData?.info?.vendorOffer?.offerHighlights?.length > 0 && (
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium mt-2.5">
            {resData.info.vendorOffer.offerHighlights[1]?.logoCtx?.text ||
              resData.info.vendorOffer.offerHighlights[0]?.logoCtx?.text}
          </div>
        )}

        {/* Discounts & More Offers */}
        <div className="flex  justify-between items-center bg-green-500 text-white font-bold text-center py-2 rounded-lg mt-2.5 px-2">
          <div className="text-[14px]">Flat 30% off on pre-booking</div>
          <div className="text-white cursor-pointer hover:underline text-[13px]">
            + 2 more
          </div>
        </div>

        {/* Bank Offers */}
        <div className="bg-green-200 text-green-800 text-center text-sm font-semibold py-2 rounded-lg mt-2.5">
          Up to 10% off with bank offers
        </div>
      </div>
      </a>
    </div>
  );
};

export default DineCard;
