import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ productsdata, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    console.log(obj);
    setCart([...cart, obj]);
    toast.success("Item Added To Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition: Bounce,
      />
      <div className="products p-2 px-8 max-w-[1367px] m-auto">
        <div className="sm:flex sm:flex-col md:flex md:flex-row  md:flex-wrap md:justify-start gap-2">
          {productsdata.map((product, key) => {
            return (
              <div
                key={product.id}
                className="max-w-full md:max-w-[24%] border-2 border-gray-100 rounded-lg overflow-hidden shadow-sm p-2 min-h-full flex flex-col"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="max-w-[100%] min-h-[150px]  cursor-pointer">
                    <img
                      src={product.imgSrc}
                      className="max-w-[100%] min-h-[inherit] cursor-pointer transition duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <p className="text-center font-bold">{product.title}</p>
                <p className="text-center py-2">{product.description}</p>
                <p className="font-semibold text-center py-2">
                  &#x20B9;{product.price}
                </p>
                <div className="mt-auto flex gap-2 flex-col md:flex-row">
                  <Link to={`/products/${product.id}`}>
                    <button className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-sm transition duration-300">
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm transition duration-300"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
