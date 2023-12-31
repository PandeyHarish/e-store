// import React from 'react'
import download from "../assets/download.jpg";

const ProductPage = () => {
  return (
    <div className="flex mx-20 mt-8 p-5">
      <div className=" w-[50%] flex-3">
        <img src={download} alt="" className="h-60" />
      </div>
      <div className="p-3">
        <p className="text-xl font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt hic aliquid similique omnis voluptate. Porro sed soluta sint
          voluptatibus fugit itaque ex sequi accusantium enim libero! Neque, reprehenderit fugit!
        </p>
        <p className="text-2xl mt-6">
          <sub> rs </sub> 1000
        </p>
        <div className=" mt-14">
          <button className=" bg-indigo-600 hover:bg-indigo-800 px-4 py-1 mt-3 rounded-md w-60 text-white">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
