// import React from 'react'
// import download from "../assets/download.jpg";
import ProductItem from "./ProductItem";
const Product = () => {
  const items = Array.from({ length: 9 }, (_, index) => <ProductItem key={index} />);

  return (
    <>
      <div className="pl-8 mt-5">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">Title</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-2 p-8 mx-1 sm:mx-10 md:mx-20">{items}</div>
    </>
  );
};

export default Product;
