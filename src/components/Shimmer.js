const ShimmerRestCard = () => {
  return (
    <div className="shadow-md p-4 rounded-2xl animate-pulse bg-white w-80">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300 rounded-2xl"></div>

      {/* Title Placeholder */}
      <div className="w-[90%] h-6 bg-gray-300 mt-4 mx-auto rounded-md"></div>

      {/* Rating & Delivery Time Placeholder */}
      <div className="flex items-center mt-3 gap-3">
        <span className="h-5 w-12 bg-gray-300 rounded-md"></span>
        <span className="h-5 w-24 bg-gray-300 rounded-md"></span>
      </div>

      {/* Cuisine Placeholder */}
      <div className="w-[80%] h-4 bg-gray-300 mt-3 mx-auto rounded"></div>
    </div>
  );
};

// Shimmer Layout that Mimics the Restaurant Card Grid
const ShimmerRestList = () => {
  return (
    <div className="flex flex-wrap w-[80%] container mx-auto mt-20 gap-10">
      {Array(10) // Generates 10 shimmer cards
        .fill("")
        .map((_, index) => (
          <ShimmerRestCard key={index} />
        ))}
      {/* _ is a valid variable name in JavaScript.
It is commonly used to ignore unused function parameters.
 */}
    </div>
  );
};

export default ShimmerRestList;
