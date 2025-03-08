import React from "react";

const Footer = () => {
  return (
    <footer className= " w-[100%] bg-[#f0f0f5] text-black py-10 px-4 md:px-20 mt-30 ">
      <div className="max-w-[80%] container mx-auto">
        {/* Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <img
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="Swiggy Logo"
            className="h-10"
          />
          <div className="text-black mt-4 md:mt-0">© 2025 Swiggy Limited</div>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-black mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://www.swiggy.com/about" className="hover:text-gray-700">About Us</a></li>
              <li><a href="https://www.swiggy.com/corporate/" className="hover:text-gray-700">Swiggy Corporate</a></li>
              <li><a href="https://www.swiggy.com/careers" className="hover:text-gray-700">Careers</a></li>
              <li><a href="https://www.swiggy.com/team" className="hover:text-gray-700">Team</a></li>
              <li><a href="https://www.swiggy.com/swiggy-super" className="hover:text-gray-700">Swiggy One</a></li>
              <li><a href="https://www.swiggy.com/instamart" className="hover:text-gray-700">Swiggy Instamart</a></li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="https://www.swiggy.com/support" className="hover:text-gray-700">Help & Support</a></li>
              <li><a href="https://partner-with-us.swiggy.com/onboard#/swiggy" className="hover:text-gray-700">Partner with us</a></li>
              <li><a href="https://ride.swiggy.com" className="hover:text-gray-700">Ride with us</a></li>
            </ul>
            <h3 className="text-lg font-semibold text-black mt-6 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="https://www.swiggy.com/terms-and-conditions" className="hover:text-gray-700">Terms & Conditions</a></li>
              <li><a href="https://www.swiggy.com/cookie-policy" className="hover:text-gray-700">Cookie Policy</a></li>
              <li><a href="https://www.swiggy.com/privacy-policy" className="hover:text-gray-700">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Available Cities */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">Available in:</h3>
            <ul className="space-y-2">
              <li><a href="/city/bangalore" className="hover:text-gray-700">Bangalore</a></li>
              <li><a href="/city/gurgaon" className="hover:text-gray-700">Gurgaon</a></li>
              <li><a href="/city/hyderabad" className="hover:text-gray-700">Hyderabad</a></li>
              <li><a href="/city/delhi" className="hover:text-gray-700">Delhi</a></li>
              <li><a href="/city/mumbai" className="hover:text-gray-700">Mumbai</a></li>
              <li><a href="/city/pune" className="hover:text-gray-700">Pune</a></li>
            </ul>
            <button className="mt-4 flex items-center text-black hover:text-gray-700">
              <span>685 cities</span>
              <svg aria-hidden="true" height="12" width="12" className="ml-1">
                <use xlinkHref="/core/sprite-mpK4HJSO.svg#chevronDown12"></use>
              </svg>
            </button>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-8 border-t border-gray-400 pt-6">
          <h3 className="text-lg font-semibold text-black mb-3">Life at Swiggy</h3>
          <ul className="space-y-2 text-black">
            <li><a href="https://blog.swiggy.com/" className="hover:text-gray-700">Explore with Swiggy</a></li>
            <li><a href="https://blog.swiggy.com/category/swiggy-restaurant-awards/" className="hover:text-gray-700">Swiggy News</a></li>
            <li><a href="https://blog.swiggy.com/category/snackables/campaigns/" className="hover:text-gray-700">Snackables</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;