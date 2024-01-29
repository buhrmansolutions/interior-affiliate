import Image from "next/image";
import "./index.css";

const DiscountBadge = ({ discount }) => {
  if (!discount) return null;
  return <div className="discount-badge">- {discount}</div>;
};

const Product = (product) => {
  return (
    <div className="product">
      <Image
        src={product.img}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h4>{product.title}</h4>
      <p>
        {new Intl.NumberFormat("sv-SE", {
          style: "currency",
          currency: product.price.currency,
        }).format(product.price.amount)}
      </p>
      <DiscountBadge discount={product.discount} />
    </div>
  );
};

export default Product;
