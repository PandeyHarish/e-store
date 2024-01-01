// import React from 'react'
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const ProductItem = (props) => {
  const history = useNavigate();
   const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };
  
  function viewproduct(k) {
    history(`/product/${k}`);
  }
  const { title, imageUrl, price,category,rating,id } = props;
  return (
    <>
      <div className="sm:w-[200px] border-2 p-2 overflow-hidden shadow-sm hover:scale-105 rounded-md" onClick={()=>{viewproduct(id)}}>
        <div>
          <img src={imageUrl} alt={title} className="h-36 block mx-auto" />
        </div>
        <div className="mt-7">
          <p className="font-medium mb-2">{title}</p>
          
          <p className="font-bold mt-3 my-3">${price}</p>
          <span className="text-sm text-gray-700">{capitalize(category)}</span>
          <p className="my-1 text-sm">Ratings: {rating.rate}</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-2 py-1 text-sm md:px-4 md:py-2 md:text-lg w-full rounded-md">
          <i className="ri-shopping-cart-2-line" ></i>
        </button>
      </div>
    </>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.object,
};
export default ProductItem;
