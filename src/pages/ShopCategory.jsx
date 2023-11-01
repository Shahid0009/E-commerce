import React, { useContext, useState } from "react";
import Item from "./../components/Item/Item";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import { ShopContext } from "./../Context/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // const [all_product, setAll_product] = useState([]);
  const [visible, setVisible] = useState(8);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue +8);
  }
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="category-index flex justify-between mx-28 py-10">
        <p>
          <span>Showing 1-12</span>
          out of 36 products
        </p>
        <div className="shopcategory-sort bg-slate-300 py-3 rounded-full px-6">
          sort by <img className="ml-5" src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products gap-5 mx-4 lg:mx-28 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
    
        {all_product.slice(0, visible).map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
<div className="flex justify-center mb-10">
<button className=" py-5 px-8 rounded-full bg-black mt-10 justify-self-center text-white" onClick={showMoreItems}>Show More</button>

</div>
    </div>
  );
};

export default ShopCategory;
