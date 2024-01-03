// import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const url = `https://fakestoreapi.com/products/${id}`;
  const product = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setDetails(responseJSON);
  };
  useEffect(() => {
    product();
    //eslint-disable-next-line 
  }, []);
  return (
    <div className="flex mx-20 mt-8 p-5">
      <div className=" w-[50%] flex-3">
        <img src={details.image} alt={details.title} className="h-60" />
      </div>
      <div className="p-3">
        <p className="text-xl font-semibold">{details.title}</p>
        <p className="text-xl font-light mt-10">{details.description}</p>
        <p className="text-sm text-gray-700 mt-6 mb-2">{capitalize(details.category)}</p>
        <p className="text-2xl ">
          <sub> $ </sub> {details.price}
        </p>
        <div className=" mt-14">
          <button className=" bg-indigo-600 hover:bg-indigo-800 px-4 py-1 mt-3 rounded-md w-60 text-white">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
