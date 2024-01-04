import { useEffect, useState } from "react";

const Cart = () => {
  const uID = parseInt(localStorage.getItem("userID"));
  const [data, setData] = useState([]);
  const loadCart = async () => {
    const cartItems = await fetch(`https://fakestoreapi.com/carts/user/${uID}`);

    const products = await cartItems.json();

    console.log(products);

    setData(await cartItems.json());
  };

  useEffect(() => {
    loadCart();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div>
        <main className="flex justify-between p-8">
          <section className="w-2/3 border border-gray-300 p-4">
            {data.map((element) => {
              return (
                <div key={element.products} className="w-11/12 p-4 m-4 border-2 border-gray-400 grid grid-cols-2 gap-4 mx-auto">
                  <div className="grid grid-cols-3 gap-4">
                    <img src="https://i.pravatar.cc/200" className="col-span-1" alt="" />
                    <div className="col-span-2">
                      <p>this is title</p>
                      <p>This is category</p>
                    </div>
                  </div>

                  <div className="col-span-1 grid grid-cols-2 text-center">
                    <div>
                      <p className="text-xl text-purple-900">this is price</p>
                    </div>
                    <div>
                      <p className="text-xl text-purple-900">this is qty</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
          <aside className="w-1/3 border border-gray-300 p-4">
            <h3>Order Summary</h3>
            <p>Subtotal (0 items) Rs. 0</p>
            <button className="bg-blue-500 text-white p-2 rounded">PROCEED TO CHECKOUT (0)</button>
            {/* Add more summary details here */}
          </aside>
        </main>
      </div>
    </>
  );
};

export default Cart;
