import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-80 bg-slate-100 hover:scale-110 transition-all">
      <Link to={`/product/${props.id}`}>
        {" "}
        <img
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className=""
          src={props.image}
          alt=""
        />{" "}
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new ">{props.new_price}</div>
        <div className="items-price-old line-through">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
