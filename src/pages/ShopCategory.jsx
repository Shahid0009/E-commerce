import React, { useContext } from "react";
import Item from "./../components/Item/Item";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import { ShopContext } from './../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
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
      <div className="shopcategory-products gap-5 mx-28 grid grid-cols-4 ">
       {/* {all_product.map((item, i) => {
        props.category===item.category ?
        <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
        : null
       })}  */}
        {/* {all_product.map((item, i) => {
          if (props.category === item.me) {
            return
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          } else {
            return null;
          }
        })} */}
        {all_product.map((item, i) => {
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
    </div>
  );
};

export default ShopCategory;
