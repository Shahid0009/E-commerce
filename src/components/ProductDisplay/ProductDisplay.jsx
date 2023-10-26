import React, {useContext} from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from './../../Context/ShopContext';
const ProductDisplay = (props) => {
  const { product } = props;
  const {addTocart} = useContext(ShopContext);
  return (
    <div className="productDisplay mx-28 flex h-[100vh] px-28">
      <div className="productdisplay-left flex gap-5 w-[70%] ">
        <div className="product-images flex flex-col w-28 gap-5">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-image ">
          <img className="h-[600px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right w-[60%]">
        <h1 className="text-4xl font-semibold pb-2">{product.name}</h1>
        <div className="product-stars flex pb-5">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(234)</p>
        </div>
        <div className="product-prices flex gap-5 text-2xl font-semibold pb-5">
          <div className="product-old-price line-through">${product.old_price}</div>
          <div className="product-new-price text-pink-700">
            ${product.new_price}{" "}
          </div>
        </div>
        <div className="product-discription font-sans text-gray-600 pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi
          dolorem provident aperiam maxime quasi deleniti, porro inventore! Modi
          rem sit tempora fugiat dicta.
        </div>
        <div className="product-select-size text-xl pb-9">
          <h1 className="pb-5">Select Size</h1>
          <div className="product-right-size flex gap-3 text-xl">
            <div className="bg-gray-300 py-3 px-4 cursor-pointer border-gray-950 border-2">
              S
            </div>
            <div className="bg-gray-300 py-3 px-4 cursor-pointer border-gray-950 border-2">
              M
            </div>
            <div className="bg-gray-300 py-3 px-4 cursor-pointer border-gray-950 border-2">
              L
            </div>
            <div className="bg-gray-300 py-3 px-4 cursor-pointer border-gray-950 border-2">
              XL
            </div>
            <div className="bg-gray-300 py-3 px-4 cursor-pointer border-gray-950 border-2">
              XXL
            </div>
          </div>
        </div>
        <button onClick={()=>{addTocart(product.id)}} className="py-4 px-9 mb-10 bg-pink-600 text-white rounded-full">
          ADD TO CART
        </button>
        <div className="product-Tag">
          <p className="flex gap-4">
            {" "}
            <p className="font-bold">Category:</p> <span>women</span>{" "}
            <span>men</span> <span>price</span> <span>kids</span>
          </p>
          <p className="flex gap-4 ">
            {" "}
            <p className="font-bold">Tags:</p> <span>women </span>
            <span>men</span> <span>price</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
