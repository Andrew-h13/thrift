import React from "react";
import Sidebar from "../components/sidebar";
import '../styles/categories.module.css'


const Categories = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="logo-container">
          <div className="filler"></div>
          <h1>ThriftSea</h1>
        </div>
        <div className="line"></div>
        <div className="header-categories">
          <div className="header-items">
            <h1>Inventory</h1>
            {/* <div className="spacer1"></div> */}
            {/* <div className="searchbar">
            <i className="bx bx-search iconam"></i>
            <input placeholder="Search a product" className="search"/>
            </div> */}
          </div>
          </div>
          <div className="spacer2"></div>
          <div  className="main-container">
          <div className="categories-sidebar">
            <div className="sidebar-main">
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
        <div className="product-container">
          <div className="product-header">
            <div className="main-items">
              <h1> placeholder(Mens) </h1>
            </div>
          </div>
          <div className="product-body">

          </div>

          </div>
        </div>
      </div>


    </>
  );
};

export default Categories;
