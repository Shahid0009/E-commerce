import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
    const product = props;
  return (
    <div className="breadcrums flex mx-28 pb-10">
      HHOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {props.category} <img src={arrow_icon} alt="" /> {props.name}
    </div>
  );
};

export default Breadcrum;
