import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsData from "../ProductsData";

const Navbar = ({ setData }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const filterByCategory = (category) => {
    const filteredData = productsData.filter(
      (product) => product.category === category
    );
    console.log(filteredData);
    setData(filteredData);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <nav className="shadow-md p-4 px-8 flex items-center justify-between sticky top-0 z-50 bg-white">
        <Link to={"/"}>
          <div className="nav-logo flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={35}
              height={35}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shell"
            >
              <path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
            </svg>
            <span className="text-lg font-bold">E-Store</span>
          </div>
        </Link>
        <div className="search-bar w-96 border border-gray-200 rounded-sm flex items-center px-2">
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search text-gray-400"
            >
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product here"
              className="focus:outline-none rounded-md w-full bg-transparent p-2 text-sm"
            />
          </form>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="user cursor-pointer" title="User">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-user-round"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx={12} cy={10} r={4} />
              <circle cx={12} cy={12} r={10} />
            </svg>
          </div>
          <div className="cart-container">
            <Link to={"/cart"}>
              <div className="shopping-cart cursor-pointer" title="Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-bag"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
            </Link>
            <div className="cart-count"></div>
          </div>
        </div>
      </nav>
      <div className="px-8 py-2 flex items-center justify-end">
        <div className="cursor-pointer relative group flex items-center gap-3">
          <span>Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-filter"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <div className="hidden filter-list bg-gray-50 absolute w-28 top-5 -right-4 rounded-md p-1 py-2 group-hover:block">
            <ul className="flex flex-col gap-2">
              <li
                className="hover:bg-gray-100 p-1 rounded-lg text-center"
                onClick={() => setData(productsData)}
              >
                No Filter
              </li>
              <li
                className="hover:bg-gray-100 p-1 rounded-lg text-center"
                onClick={() => filterByCategory("mobiles")}
              >
                Mobiles
              </li>
              <li
                className="hover:bg-gray-100 p-1 rounded-lg text-center"
                onClick={() => filterByCategory("laptops")}
              >
                Laptops
              </li>
              <li
                className="hover:bg-gray-100 p-1 rounded-lg text-center"
                onClick={() => filterByCategory("tablets")}
              >
                Tablets
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
