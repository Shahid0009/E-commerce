import React from "react";
import instagram_icon from "../Assets/instagram_icon.png"
const Footer = () => {
  return (
    <>
      <div className="Footer h-[40vh] mx-28 px-28">
        <h1 className="text-5xl pb-7 flex justify-center font-bold">WeShop</h1>
        <div className="flex justify-center pb-7">
        <ul className="flex items-center gap-5">
          <li>Company</li>
          <li>Products</li>
          <li>Office</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
        <div className="social gap-8 pb-8 flex items-center justify-center">
            <div className="instagram">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="instagram">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="instagram">
                <img src={instagram_icon} alt="" />
            </div>
        </div>
        <div className="w-full h-2 mb-2 bg-slate-700 rounded-3xl">

        </div>
      <p className="flex justify-center">Copyright2023 - All Rights Reserved</p>
      </div>
    </>
  );
};
export default Footer;
