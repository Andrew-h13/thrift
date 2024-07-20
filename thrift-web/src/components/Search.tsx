import React from "react";
import "../styles/searchbar.css";

const Search = () => {
  return (
    <>
      <div className="wrapper-search">
        <i className="bx bx-search iconam"></i>
        <input placeholder="Type to search" />
      </div>
    </>
  );
};

export default Search;
