import React from "react";
import new_collections from "./../Assets/new_collections";
import Item from "./../Item/Item";
const NewCollections = () => {
  return (
    <div className="newcollection mb-32">
      <h1 className="flex justify-center text-7xl font-bold pb-20">New Collections</h1>
      <div className="collections ">
        <div className="mx-4 lg:mx-28 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 md:mx-10  gap-5">
          {new_collections.map((item, i) => {
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
    </div>
  );
};

export default NewCollections;
