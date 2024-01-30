"use client";

import "./style.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PriceRangeSlider from "./PriceRangeSlider";
import Dropdown from "./Dropdown";
import Switch from "./Switch";
import enabledFilters, {
  sortByOptions,
  shopByOptions,
  priceRange,
} from "./config";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/app/shop/ShopContext";
import { PRODUCTS } from "../products/products";

export default function Layout() {
  const { setProducts } = useContext(ShopContext);
  const [searchFilter, setSearchFilter] = useState("");
  const [shopByFilter, setShopByFilter] = useState("");
  const [sortByFilter, setSortByFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState(priceRange);

  useEffect(() => {
    const filteredProducts = PRODUCTS.filter((product) => {
      if (!product.title.toLowerCase().includes(searchFilter.toLowerCase())) {
        return false;
      }
      if (
        shopByFilter !== "All categories" &&
        !product.category.includes(shopByFilter)
      ) {
        return false;
      }
      if (
        !(
          product.price.amount >= priceRangeFilter.minPrice &&
          product.price.amount <= priceRangeFilter.maxPrice
        )
      ) {
        return false;
      }
      return true;
    });
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortByFilter === "Price (Descending)")
        return b.price.amount - a.price.amount;
      if (sortByFilter === "Price (Ascending)")
        return a.price.amount - b.price.amount;
      if (sortByFilter === "Date added (Newest first)")
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      if (sortByFilter === "Date added (Oldest first)")
        return new Date(a.dateAdded) - new Date(b.dateAdded);
    });
    setProducts(sortedProducts);
  }, [searchFilter, shopByFilter, sortByFilter, priceRangeFilter]);

  return (
    <div className="filter">
      {enabledFilters.search && (
        <div className="input-container">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      )}
      {enabledFilters.shopBy && (
        <Dropdown
          options={shopByOptions}
          label="Shop by"
          onChange={setShopByFilter}
          defaultOption="All categories"
        />
      )}
      {enabledFilters.sortBy && (
        <Dropdown
          options={sortByOptions}
          label="Sort by"
          onChange={setSortByFilter}
        />
      )}
      {enabledFilters.priceRange && (
        <PriceRangeSlider {...priceRange} onChange={setPriceRangeFilter} />
      )}
    </div>
  );
}
