import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";


const ProductItem = (props) => {
  const { theme } = useContext(ThemeContext);
  const history = useNavigate();
  const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  function viewproduct(k) {
    history(`/product/${k}`);
  }
  const date = new Date();
  const addTocart = async (id) => {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 2,
        date: date.getDate(),
        products: [{ productId: id, quantity: 1 }],
      }),
    });
    alert("Product added successfully");
    console.log(await response.json());
  };
  const { title, imageUrl, price, category, rating, id } = props;
  return (
    <>
      <div className="sm:w-[200px] border-2 p-2 overflow-hidden shadow-sm hover:scale-105 rounded-md">
        <div
          onClick={() => {
            viewproduct(id);
          }}
          className="cursor-pointer"
        >
          <img src={imageUrl} alt={title} className="h-36 block mx-auto" />
        </div>
        <div className="mt-7">
          <p className="font-medium mb-2">{title}</p>

          <p className="font-bold mt-3 my-3">${price}</p>
          <span className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>{capitalize(category)}</span>
          <p className="my-1 text-sm">Ratings: {rating.rate}</p>
        </div>
        <button
          className="bg-indigo-600 hover:bg-indigo-800 text-white px-2 py-1 text-sm md:px-4 md:py-2 md:text-lg w-full rounded-md"
          onClick={() => {
            addTocart(id);
          }}
        >
          <i className="ri-shopping-cart-2-line"></i>
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
