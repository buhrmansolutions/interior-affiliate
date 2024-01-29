"use client";
import { useState, useMemo, useContext } from "react";
import Product from "../product";
import PageSelector from "../pageselector";
import "./index.css";
import { ShopContext } from "@/app/shop/ShopContext";

const PRODUCTS_PER_PAGE = 16;
const Products = () => {
  const { products } = useContext(ShopContext);

  const [currentPage, setCurrentPage] = useState(0);
  const batch = useMemo(
    () =>
      products.slice(
        currentPage * PRODUCTS_PER_PAGE,
        (currentPage + 1) * PRODUCTS_PER_PAGE
      ),
    [currentPage, products]
  );

  const numberOfPages = useMemo(
    () => Math.ceil(products.length / PRODUCTS_PER_PAGE),
    []
  );

  return (
    <div className="product-container">
      <div className="product-grid">{batch.map(Product)}</div>
      <PageSelector
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Products;
