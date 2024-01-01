import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";


const Product = () => {
  const [data,setData]= useState([])
  const products = async () => {
    const url = `https://fakestoreapi.com/products/`;
    const res = await fetch(url);
    const pasrsedData = await res.json();
    setData(pasrsedData);
  };
useEffect(() => {
  products();

  
}, [])

  return (
    <>
      <div className="pl-8 mt-5">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl"></h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-2 p-8 mx-1 sm:mx-10 md:mx-20">
        {data.map((element) => {
          return (
            <ProductItem
              key={element.id}
              id={element.id}
              title={element.title ? `${element.title.slice(0, 20)}...` : "No Title"}
              imageUrl={element.image || ""}
              price={element.price || "#"}
              category={element.category || "Unknown category"}
              rating={element.rating}
            />
          );
        })}
      </div>
    </>
  );
};

export default Product;
