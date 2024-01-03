import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

const Product = (props) => {
  const { category } = props;

  const [data, setData] = useState([]);

  const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  let url = "https://fakestoreapi.com/products";

  if (category) {
    url =  `https://fakestoreapi.com/products/category/${category}?limit=5`;
  }
  const products = async () => {
    const res = await fetch(url);
    const pasrsedData = await res.json();
    setData(pasrsedData);
  };
  useEffect(() => {
    products();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="pl-8 mt-5">
        <h2 className="font-bold w-fit text-2xl sm:text-3xl md:text-4xl pb-2 border-b-4 border-indigo-800 mx-1 sm:mx-10 md:mx-20">
          {category ? capitalize(category ): "All Products"}
        </h2>
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

Product.propTypes = {
  category: PropTypes.string,
};
export default Product;
