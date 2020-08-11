import React from "react";
import "./Search.scss";
import SearchInput from "./Input";
import Filter from "./Filter";

const Search = () => {
  return (
    <div className="search">
      <div className="search-input">
        <SearchInput />
      </div>
      <div className="filter-container">
        <Filter name="Bids" />
        <Filter name="Status" />
      </div>
     </div>
  )
}

export default Search;
