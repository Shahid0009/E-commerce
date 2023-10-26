import React, { useContext } from "react";
import { ShopContext } from "./../Context/ShopContext";
import Breadcrum from "./../components/breadcrum/Breadcrum";
import ProductDisplay from "./../components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import DescriptionBox from "./../components/DescriptionBox/DescriptionBox";
import ReleatedProduct from './../components/ReleatedProduct/ReleatedProduct';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <ReleatedProduct />
    </div>
  );
};

export default Product;
