import { groceryCard } from "../utils/Grocery"
import GroceryCard from "./GroceryCard"
const GroceryOption = () => {
  return (
    <div className="max-w-[80%] pt-30 container mx-auto">
      <h1 className="text-2xl text-black font-bold ">Shop groceries on Instamart</h1>
      <div className="w-full overflow-x-auto whitespace-nowrap flex gap-5 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500  mt-15">
        {groceryCard.map((groceryData) => (
          <div key={groceryData.id} className="flex-shrink-0">
            <GroceryCard value={groceryData} />
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default GroceryOption;