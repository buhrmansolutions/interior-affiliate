"use client"

import "./style.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PriceRangeSlider from "./PriceRangeSlider"
import Dropdown from "./Dropdown"
import Switch from "./Switch"
import enabledFilters, {
  sortByOptions,
  shopByOptions,
  priceRange,
} from "./config"
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "@/app/shop/ShopContext"
import data from "../../data"

export default function Layout() {
  const { setProducts } = useContext(ShopContext)
  const [searchFilter, setSearchFilter] = useState("")
  const [shopByFilter, setShopByFilter] = useState("")
  const [sortByFilter, setSortByFilter] = useState("")
  const [priceRangeFilter, setPriceRangeFilter] = useState(priceRange)

  useEffect(() => {
    const filteredProducts = data.filter((product) => {
      if (
        !product.product_name.toLowerCase().includes(searchFilter.toLowerCase())
      ) {
        return false
      }
      if (
        shopByFilter !== "All categories" &&
        !product.category_name.includes(shopByFilter)
      ) {
        return false
      }
      if (
        !(
          parseInt(product.search_price) >= priceRangeFilter.minPrice &&
          parseInt(product.search_price) <= priceRangeFilter.maxPrice
        )
      ) {
        return false
      }
      return true
    })

    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortByFilter === "Price (Descending)")
        return parseInt(b.search_price) - parseInt(a.search_price)
      if (sortByFilter === "Price (Ascending)")
        return parseInt(a.search_price) - parseInt(b.search_price)
      if (sortByFilter === "Date added (Newest first)")
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      if (sortByFilter === "Date added (Oldest first)")
        return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
      return -1
    })
    setProducts(sortedProducts)
  }, [searchFilter, shopByFilter, sortByFilter, priceRangeFilter, setProducts])

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
  )
}
