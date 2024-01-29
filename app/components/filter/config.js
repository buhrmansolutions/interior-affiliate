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
export const priceRange = { minPrice: 2000, maxPrice: 199999 };
