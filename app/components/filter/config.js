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
  "Price (Descending)",
  "Price (Ascending)",
  "Date added (Newest first)",
  "Date added (Oldest first)",
]
export const shopByOptions = ["Drivers", "Irons"]
export const priceRange = { minPrice: 0, maxPrice: 5000 }
