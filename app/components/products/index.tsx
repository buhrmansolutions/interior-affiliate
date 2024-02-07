"use client"
import { useState, useMemo, useContext, useEffect } from "react"
import Product from "../product"
import PageSelector from "../pageselector"
import "./index.css"
import { ShopContext } from "@/app/shop/ShopContext"

const Products = () => {
  const { products } = useContext(ShopContext)
  const [productsPerPage, setProductsPerPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const batch = useMemo(
    () =>
      products.slice(
        currentPage * productsPerPage,
        (currentPage + 1) * productsPerPage
      ),
    [currentPage, products, productsPerPage]
  )
  console.log(batch.length, productsPerPage)

  useEffect(() => {
    const MOBILE_THRESHOLD_WIDTH = 1080
    const WINDOW_WIDTH = window.innerWidth
    const IS_MOBILE = WINDOW_WIDTH < MOBILE_THRESHOLD_WIDTH
    const NUMBER_OF_ROWS = IS_MOBILE ? 16 : 4
    const ITEM_WIDTH = 300
    const GAP_WIDTH = 39
    const GRID_WIDTH = WINDOW_WIDTH - (IS_MOBILE ? 40 : 400 + 100 * 2)
    const SPACE_LEFT_FOR_ITEM =
      GRID_WIDTH % (ITEM_WIDTH + GAP_WIDTH) > ITEM_WIDTH
    const ITEMS_PER_ROW = IS_MOBILE
      ? 1
      : Math.floor(GRID_WIDTH / (ITEM_WIDTH + GAP_WIDTH)) +
        (SPACE_LEFT_FOR_ITEM ? 1 : 0)
    const PRODUCTS_PER_PAGE = ITEMS_PER_ROW * NUMBER_OF_ROWS
    setProductsPerPage(PRODUCTS_PER_PAGE)
  }, [])

  useEffect(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentPage])

  useEffect(() => setCurrentPage(0), [products])
  const numberOfPages = useMemo(
    () => Math.ceil(products.length / productsPerPage),
    [products, productsPerPage]
  )

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
  )
}

export default Products
