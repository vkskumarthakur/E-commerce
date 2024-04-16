import React from "react";

const Filter = () => {
  return (
    <div className="px-8 py-2 flex items-center justify-end">
      <div className="cursor-pointer relative group">
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
            <li className="hover:bg-gray-100 p-1 rounded-lg text-center">
              Smartphone
            </li>
            <li className="hover:bg-gray-100 p-1 rounded-lg text-center">
              Smartwatch
            </li>
            <li className="hover:bg-gray-100 p-1 rounded-lg text-center">
              Electronics
            </li>
            <li className="hover:bg-gray-100 p-1 rounded-lg text-center">
              Gadgets
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
