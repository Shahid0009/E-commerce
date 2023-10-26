import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "./../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItem } = useContext(ShopContext);
  return (
    <div className="navbar flex items-center justify-between bg-white py-5 px-28">
      <div className="nav-logo">
        <h1 className="logo">weShop</h1>
      </div>
      <div className="nav-menu">
        <ul className=" flex items-center gap-12">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/mens">mens</Link>
          </li>
          <li>
            <Link to="/womens">womens</Link>
          </li>
          <li>
            <Link to="/kids">kids</Link>
          </li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <ul className=" flex items-center">
          <li>
            <Link
              className="py-4 mr-3 px-8 border-cyan-600 rounded-[30px] bg-slate-400 "
              path="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link to="/cart">
              {" "}
              <img src={cart_icon} alt="" />
            </Link>
          </li>
          <li className="flex ">
            <span className="flex items-center justify-center mb-7 bg-red-600 font-semibold text-white rounded-full w-5 h-5">
              {getTotalCartItem()}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
