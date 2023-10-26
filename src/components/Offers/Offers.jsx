import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers h-[80vh] mx-28 px-28 mb-20 pt-20 flex bg-gradient-to-t  from-fuchsia-200 to-rose-200">
      <div className="offers-let w-[60%] pt-28 text-7xl">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p className="text-2xl">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="text-2xl bg-red-500 py-3 text-white px-12 rounded-3xl">Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
