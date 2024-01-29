export default {
  search: true,
  priceRange: true,
  sortBy: true,
  shopBy: true,
  onSaleSwitch: false,
  inStockSwitch: false,
};

export const sortByOptions = [
  "Price (Descending)",
  "Price (Ascending)",
  "Date added (Newest first)",
  "Date added (Oldest first)",
];
export const shopByOptions = ["Drivers", "Irons"];
export const priceRange = { minPrice: 7.95, maxPrice: 999.99 };
