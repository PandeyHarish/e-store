// import React from 'react'
import download from "../assets/download.jpg";

const ProductItem = () => {
  return (
    <>
      <div className="sm:w-[200px] border-2 p-2 overflow-hidden shadow-sm hover:scale-105 rounded-md">
        <div>
          <img src={download} alt="" />
        </div>
        <p className="">
          <span>Lorem ipsum dolor sit.</span>
          <br />
          <p className="font-bold mt-3 my-3">Rs.100</p>
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-2 py-1 text-sm md:px-4 md:py-2 md:text-lg w-full rounded-md">
          <i className="ri-shopping-cart-2-line"></i>
        </button>
      </div>
    </>
  );
};

export default ProductItem;
