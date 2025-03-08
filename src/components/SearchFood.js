import { useState, useEffect } from "react";
import { useParams } from "react-router";
import dotenv from "dotenv";
dotenv.config()
const SearchFood = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);
  const OPENAI_API_KEY =process.env.key;

  // Function to fetch AI-enhanced suggestions
  async function fetchOpenAISuggestions(input) {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "user",
                content: `Suggest food items related to ${input}`,
              },
            ],
            max_tokens: 100,
          }),
        }
      );
      const data = await response.json();
      const aiSuggestions = data.choices[0].message.content;
      fetchSwiggyData(aiSuggestions); // Fetch Swiggy data based on AI results
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
    } finally {
      setLoading(false);
    }
  }

  // Function to fetch data from Swiggy API
  async function fetchSwiggyData(searchQuery) {
    try {
      // const swiggyApi = `https://www.swiggy.com/dapi/menu/pl/search?lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&isMenuUx4=true&query=${searchQuery}&submitAction=ENTER`;
      const response = await fetch(swiggyApi);
      const data = await response.json();
      setFoodData(data?.data?.cards || []);
    } catch (error) {
      console.error("Error fetching Swiggy data:", error);
    }
  }

  // Handle user input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      fetchOpenAISuggestions(value);
    }
  };

  return (
    <div className="w-[60%]  mx-auto mt-30 shadow-lg rounded-2xl p-4">
      <input
        className="outline-none w-full p-4 border border-red-400 rounded-2xl"
        placeholder="Search for food..."
        onChange={handleInputChange}
        value={query}
      />
      {loading && (
        <p className="text-center text-gray-500">Fetching AI suggestions...</p>
      )}

      <div className="mt-5">
        {foodData.length > 0 ? (
          foodData.map((item, index) => (
            <div key={index} className="p-2 border-b">
              <h3 className="text-lg font-bold">
                {item.card?.info?.name || "Unknown Dish"}
              </h3>
              <p className="text-gray-600">
                {item.card?.info?.description || "No description available."}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchFood;
