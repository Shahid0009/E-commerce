import React from "react";
import data_product from "./../Assets/data";
import Item from "./../Item/Item";

const ReleatedProduct = () => {
  return (
    <>
    
      <h1 className="text-6xl font-bold flex justify-center py-10 px-28">Releated products</h1>
      <hr className=" rounded-3xl h-20" />
    <div className="popular flex justify-center px-28 mb-32">
      <div className="popular_item flex items-center gap-10">
        {data_product.map((item, i) => {
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
    </>
  );
};

export default ReleatedProduct;
