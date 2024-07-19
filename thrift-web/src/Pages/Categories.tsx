import React from "react";
import Sidebar from "../components/sidebar";
import "../styles/categories.css";

const Categories = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="inventory-logo-container">
          <div className="filler"></div>
          <h1>ThriftSea</h1>
        </div>
        <div className="inventory-line"></div>
        <div className="inventory-header-categories">
          <div className="inventory-header-items">
            <h1>Inventory</h1>
            {/* <div className="spacer1"></div> */}
            {/* <div className="searchbar">
            <i className="bx bx-search iconam"></i>
            <input placeholder="Search a product" className="search"/>
            </div> */}
          </div>
        </div>
        <div className="inventory-spacer2"></div>
        <div className="inventory-main-container">
          <div className="inventory-categories-sidebar">
            <div className="inventory-sidebar-main">
              <h1>Categories</h1>
              <button> Mens</button>
              <button> Women</button>
              <button> Children</button>
              <button> Unisex</button>
              <button> Electronics</button>
              <button> Toys</button>
              <button> Sporting good</button>
              <button> Home goods</button>
            </div>
          </div>
          <div className="inventory-product-container">
            <div className="inventory-product-header">
              <div className="inventory-main-items">
                <h1> placeholder(Mens) </h1>
              </div>
            </div>
            <div className="inventory-product-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
