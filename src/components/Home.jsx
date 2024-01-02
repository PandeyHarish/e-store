import { useEffect, useState } from "react";
import Products from "./Product";

const Home = () => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const category = await fetch("https://fakestoreapi.com/products/categories");
    setCategory(await category.json());
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div>
        {category.map((element) => {
          return <Products key={element} category={element} />;
        })}
      </div>
    </>
  );
};

export default Home;
