import { DineOut } from "../utils/Dineout"
import DineCard from "./DineCard"
const DineOption = () => {
  return (
    <div className='max-w-[80%] flex flex-wrap mt-30 mb-2  container mx-auto gap-7'>
      <h1 className='text-2xl text-black font-bold' >Discover best restaurants on Dineout</h1>
      <div className="w-full overflow-x-auto whitespace-nowrap flex gap-10 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500  mt-10">
      {
        DineOut.map((element)=>(<DineCard key={element?.info?.id} resData={element}></DineCard>))
      }
      </div>
    </div>
  )
}

export default DineOption