import React from "react";
import { useContext } from "react";
import { ShopContext } from "./../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const Cartitem = () => {
  const { all_product, getTotalCartAmount, cartItem, removeFromCart } =
    useContext(ShopContext);
  return (
    <>
      <div className="cartitems mx-28 px-20 my-20">
        <div className="cartitems-format-main mb-5 grid grid-cols-6 font-semibold">
          <p className="">Product</p>
          <p className="">Title</p>
          <p className="ml-20">Price</p>
          <p className="ml-14">Quantity</p>
          <p className="ml-14">Total</p>
          <p>Remove</p>
        </div>
        <hr className="mt-5" />

        {all_product.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div className="cartitems-format grid grid-cols-6 items-center pb-10 mt-10 border-b-2">
                <img className="h-28" src={e.image} alt="" />
                <p className="">{e.name}</p>
                <p className="ml-24">{e.new_price}</p>
                <button className=" ml-20 bg-slate-300 h-10 w-10">
                  {cartItem[e.id]}
                </button>
                <p className="ml-20 mr-10">{e.new_price * cartItem[e.id]}</p>
                <img
                  className="ml-6"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
            );
          }
          return null;
        })}
        <div className="total mt-32 text-xl flex gap-16">
          <div className="total-right w-[52%]">
            <h1 className="pb-10 font-semibold text-4xl">Cart Totals</h1>
            <div className="totals flex pb-5">
              <p className="pr-[550px]">subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="totals flex pb-5">
              <p className="pr-[500px]">Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="totals font-semibold flex pb-5">
              <p className="pr-[580px]">Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <button className="bg-pink-600 mt-9 py-3 px-7 rounded-xl text-white">
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="offer-copoun mt-20">
            <p className="pb-2 text-xl">If you have promocode enter here</p>
            <div className="input flex items-center justify-center gap-8">
              <input
                className="py-4 rounded-3xl px-10 w-96 border-gray-800 border-2"
                type="text"
                placeholder="enter promocode"
              />
              <button className=" bg-black rounded-full py-4 px-7 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
