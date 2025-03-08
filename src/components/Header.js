// 1div swiggy ka logo + button
// tailwind  w-1  4pixel
// container mx-auto // automatically center + margin+responsive le lega better approach

import { Link } from "react-router";

const Header = () => {
  return (


    
    <div className="bg-[#ff5200]  font-serif ">
      <div className="flex justify-between items-center container mx-auto py-8">
        <img
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          className="w-40 h-12"
        ></img>
        <div className=" text-white text-base flex gap-8 items-center ">
          <a href="https://www.swiggy.com/corporate/" className="">
            Swiggy Corporate
          </a>
          <a href="https://partner.swiggy.com/login#/swiggy" className="">
            Partner with Us
          </a>
          <a
            href="#"
            className="border-1 border-solid border-[#fff] rounded-[12px] py-3 px-4 animate-pulse"
          >
            Get The App
          </a>
          <a href="#" className="px-4 py-3 rounded-[16px] bg-[#000] ">
            Sign in
          </a>
        </div>
      </div>

      {/* 2nd div */}
      <div className="pt-16 pb-8 relative ">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          className="h-auto w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 absolute top-0 left-0"
        />

        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          className="h-auto w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 absolute top-0 right-0"
        ></img>
        <div className="max-w-[60%] container mx-auto text-center text-5xl text-white  font-bold animate-none">
          Order food. Discover best restaurants. Swiggy it!
        </div>
        <div className="max-w-[60%] container mx-auto flex gap-5 mt-5">
          <input
            className="bg-white w-[40%] text-base px-3 py-3 rounded-2xl outline-0"
            placeholder="Enter your delivery location"
          ></input>
          <input
            className="bg-white w-[55%] px-3 py-3 rounded-2xl outline-0"
            placeholder="Search for restaurant,item or more"
          ></input>
        </div>
      </div>

      <div className="max-w-[80%] flex items-center  justify-center container mx-auto ">
        
        <Link to={"/restaurant"}>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
        </Link>

        <a href="https://www.swiggy.com/dineout">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
        </a>
        <a href="https://www.swiggy.com/genie">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/30/1ba3942e-67ff-4100-8f2e-7bcd92a0cc94_Genie3BU.png"></img>
        </a>
      </div>
    </div>
  );
};

export default Header;

// server side rendering
