import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-md p-4 px-8 flex items-center justify-between">
      <div className="nav-logo">
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
      </div>
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
        <input
          type="text"
          placeholder="Search product here"
          className="focus:outline-none rounded-md w-full bg-transparent p-2 text-sm"
        />
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
          <div className="cart-count"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
