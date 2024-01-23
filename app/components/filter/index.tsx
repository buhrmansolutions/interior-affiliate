"use client";

import "./style.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PriceRangeSlider from "./PriceRangeSlider";
import Dropdown from "./Dropdown";
import enabledFilters, { sortByOptions, shopByOptions } from "./config";

export default function Layout() {
  return (
    <div className="filter">
      {enabledFilters.search && (
        <div className="input-container">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      )}
      {enabledFilters.shopBy && (
        <Dropdown options={shopByOptions} label="Shop by" />
      )}
      {enabledFilters.sortBy && (
        <Dropdown options={sortByOptions} label="Sort by" />
      )}
      {enabledFilters.priceRange && <PriceRangeSlider />}
    </div>
  );
}
