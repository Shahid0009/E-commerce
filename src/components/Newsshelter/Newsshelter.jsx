import React from "react";

const Newsshelter = () => {
  return (
    <div className="newsShelter h-[40vh] bg-gradient-to-t  from-fuchsia-200 to-rose-300 mx-28 px-28 py-20 mb-32">
      <h1 className="text-5xl font-semibold pb-4 flex  justify-center">Get Exclusive Offers On Your Email</h1>
      <p className="flex justify-center pb-4 text-2xl">Subscribe to our newsletter and stay update</p>
      <div className="input flex items-center justify-center gap-8">
        <input className="py-4 rounded-3xl px-10 w-96" type="text" placeholder="Your Email id" />
        <button className=" bg-black rounded-full py-4 px-7 text-white">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsshelter;
