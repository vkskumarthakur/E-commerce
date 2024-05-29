import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "./ProductsData";
import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
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
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProduct] = useState([]);
  useEffect(() => {
    const filterProduct = productsData.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
    const relatedProducts = productsData.filter(
      (similarProduct) => similarProduct.category === product.category
    );
    console.log("related Product", relatedProducts);
    setRelatedProduct(relatedProducts);
  }, [id, product.category]);
  return (
    <>
      <div className="flex flex-col p-2 px-8 max-w-[1367px] md:flex-row">
        <div className="flex-1 max-h-[400px]">
          <img src={product.imgSrc} className="max-h-[inherit] m-auto" />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start pt-10">
          <p className="text-center font-bold">{product.title}</p>
          <p className="text-center py-2">{product.description}</p>
          <p className="text-center py-2 font-bold text-xl">
            &#x20B9;{product.price}
          </p>
          <div className="h-5 bg-gray-500 rounded-full flex items-center justify-between p-2 text-white">
            <span>{product.rating} &nbsp;</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="#ffffff"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
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
            className="mt-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm transition duration-300"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="p-2 px-8 max-w-[1367px]">
        <h2 className="text-center px-8 font-bold md:text-left">
          Similar Products
        </h2>
        <Products
          productsdata={relatedProducts}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </>
  );
};

export default ProductDetail;
