"use client";
import { useState, useMemo, useContext } from "react";
import Product from "../product";
import PageSelector from "../pageselector";
import "./index.css";
import { ShopContext } from "@/app/shop/ShopContext";

const NUMBER_OF_ROWS = 2;
const ITEM_WIDTH = 300;
const GAP_WIDTH = 39;
const GRID_WIDTH = window.innerWidth - 400 - 100 * 2;
const SPACE_LEFT_FOR_ITEM = GRID_WIDTH % (ITEM_WIDTH + GAP_WIDTH) > ITEM_WIDTH;
const ITEMS_PER_ROW =
  Math.floor(GRID_WIDTH / (ITEM_WIDTH + GAP_WIDTH)) +
  (SPACE_LEFT_FOR_ITEM ? 1 : 0);
const PRODUCTS_PER_PAGE = ITEMS_PER_ROW * NUMBER_OF_ROWS;

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
    [products]
  );

  // const finalBatch =
  //   batch.length < PRODUCTS_PER_PAGE
  //     ? [...batch, ...new Array(PRODUCTS_PER_PAGE - batch.length).fill(null)]
  //     : batch;

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
