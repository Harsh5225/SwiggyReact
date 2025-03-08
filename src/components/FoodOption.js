import { imageGridCards } from "../utils/Food";
import FoodCard from "./FoodCard";
const FoodOption = () => {
  return (
    <div className="max-w-[80%] flex flex-wrap mt-30  container mx-auto gap-7 ">
      {imageGridCards.map((element) => (
        <FoodCard key={element.id} value={element}></FoodCard>
      ))}
    </div>
  );
};

export default FoodOption;
