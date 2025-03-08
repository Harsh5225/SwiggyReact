import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../Stored/CartSlicer";
import CheckoutHeader from "./CheckoutHeader";

const Checkout = () => {
  const items = useSelector((state) => state.cartSlice.items);
  const [couponCode, setCouponCode] = useState("");
  const dispatch = useDispatch();

  // Memoizing Calculations
  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) =>
        total +
        ((item.price || item.defaultPrice || 0) / 100) * (item.quantity || 1),
      0
    );
  }, [items]);

  const deliveryFee = 49;
  const tax = useMemo(() => subtotal * 0.05, [subtotal]); // 5% tax
  const total = useMemo(() => subtotal + deliveryFee + tax, [subtotal, tax]);

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <CheckoutHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <svg className="h-5 w-5 text-orange-500" /* Icon props */ />
              Your Order{" "}
              <span className="text-gray-500 ml-2">({items.length} items)</span>
            </h2>

            {items.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="mt-4 text-lg text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex gap-4"
                  >
                    <img
                      className="h-40 w-40 object-cover"
                      src={"https://media-assets.swiggy.com/" + item.imageId}
                      alt={item.name}
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <h3 className="font-medium text-lg">{item.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {item.description || "Delicious food item"}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">
                          ₹
                          {((item.price || item.defaultPrice) / 100).toFixed(2)}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => dispatch(decrementItem(item))}
                            className="h-8 w-8 border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => dispatch(incrementItem(item))}
                            className="h-8 w-8 border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 my-3 pt-3"></div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Coupon Code Input */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                Apply
              </button>
            </div>

            {/* Proceed to Payment Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center mt-4">
              Proceed to Payment
              <svg className="ml-2 h-4 w-4" /* Icon props */ />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
