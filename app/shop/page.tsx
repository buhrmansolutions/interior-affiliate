import Filter from "../components/filter";
import Products from "../components/products";
import "./index.css";

export default function Home() {
  return (
    <div className="shop-container">
      <div>
        <h1>Shop the latest</h1>
        <Filter />
      </div>
      <Products />
    </div>
  );
}
