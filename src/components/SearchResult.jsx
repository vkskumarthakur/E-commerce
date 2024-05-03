import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "./ProductsData";
import Products from "./Products";

const SearchResult = () => {
  const { term } = useParams();
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    const filteredData = productsData.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    console.log(filteredData);
    setfilterData(filteredData);
  }, [term]);

  return <Products productsdata={filterData} />;
};

export default SearchResult;
