import { useEffect, useState } from "react";

const Cart = () => {
  const [data, setData] = useState([]);
  const loadCart = async () => {
    const cartItems = await fetch("https://fakestoreapi.com/carts/user/1");

    setData(await cartItems.json());
  };

  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <div className="font-bold text-3xl">
        {data.map((element) => {
          return <p key={element.userId}>{element.userId}</p>;
        })}
      </div>
    </>
  );
};

export default Cart;
