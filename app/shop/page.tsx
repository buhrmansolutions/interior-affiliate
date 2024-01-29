"use client";
import { createContext, useState } from "react";
import Filter from "../components/filter";
import Footer from "../components/footer";
import Products from "../components/products";
import { PRODUCTS } from "../components/products/products";
import "./index.css";
import { ShopContext } from "./ShopContext";

export default function Home() {
  const [products, setProducts] = useState(PRODUCTS);
  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      <div className="shop-container">
        <div className="filter-container">
          <h1>Shop the latest</h1>
          <Filter />
        </div>
        <Products />
      </div>
    </ShopContext.Provider>
  );
}
