import React from "react";
import arrow_icon from "../Assets/arrow.png";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";
const hero = () => {
  return (
    <div className="hero flex h-[100vh] py-5 px-28 bg-gradient-to-t  from-fuchsia-200 to-rose-300">
      <div className="hero-left w-[60%] font-semibold  mt-40 font-sans text-8xl flex-row">
        <h2 className="text-xl font-semibold">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="handicon flex">
            <p className="text-5=7xl ">new</p>
            <img
              className="w-20 cursor-pointer hover:translate-x-2"
              src={hand_icon}
              alt=""
            />
          </div>
          <p>collection</p>
          <p className="pb-12">for everyone</p>
        </div>
        <div className="hero-latest-btn cursor-pointer w-60 rounded-xl border-[2px solid black] flex gap-2 border-2 border-black bg-pink-600">
          <div className="text-xl py-4 pl-6">Latest Collection</div>
          <img
            className="py-6 pr-6 hover:translate-x-1"
            src={arrow_icon}
            alt=""
          />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default hero;
