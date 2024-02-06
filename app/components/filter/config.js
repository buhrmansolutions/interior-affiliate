import { CATEGORIES, default as data } from "../../data"
const config = {
  search: true,
  priceRange: true,
  sortBy: true,
  shopBy: true,
  onSaleSwitch: false,
  inStockSwitch: false,
}

export default config

export const sortByOptions = [
  "Sjunkande pris",
  "Ökande pris",
  "Nyast först",
  "Äldst först",
]

export const priceRange = data.reduce(
  (prev, curr) => ({
    minPrice:
      parseInt(curr.search_price) < prev.minPrice
        ? parseInt(curr.search_price)
        : prev.minPrice,
    maxPrice:
      parseInt(curr.search_price) > prev.maxPrice
        ? parseInt(curr.search_price)
        : prev.maxPrice,
  }),
  { minPrice: 9999, maxPrice: 0 }
)
export const shopByOptions = Object.keys(CATEGORIES).map(
  (key) => CATEGORIES[key]
)
