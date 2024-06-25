import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="px-8 p-2 flex items-center justify-start flex-wrap gap-2">
      {
         cart.length ==0?(
          <div className="w-full text-center flex flex-col items-center gap-5 p-3">
            <p className="text-center font-bold">Cart is empty</p>
            <img src="https://img.freepik.com/free-vector/shopping-cart-market_24908-81206.jpg?t=st=1719252613~exp=1719256213~hmac=5190d4131deb805380a45a3ca8b802e655afa138e2fece99051473c3597ba744&w=740" className="w-[200px] m-auto opacity-[.5]"/>
            <Link to={"/"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm transition duration-300">Continue To Shop</Link>
          </div>
        ):
      cart.map((cartProduct) => {
        return (
          <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={cartProduct.imgSrc}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-black">
                    {cartProduct.title}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {cartProduct.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-black">
                    {cartProduct.price}
                  </span>
                  <a
                    href="#"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm transition duration-300"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
