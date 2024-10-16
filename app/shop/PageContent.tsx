"use client"
import { useState } from "react"
import Filter from "../components/filter"
import Products from "../components/products"
import data from "../data"
import "./index.css"
import { ShopContext } from "./ShopContext"

export default function Home() {
  const [products, setProducts] = useState(data)

  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      <div className="shop-container">
        <div className="filter-container">
          <Filter />
        </div>
        <Products />
      </div>
    </ShopContext.Provider>
  )
}
