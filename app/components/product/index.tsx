import Image from "next/image";
import { useEffect, useState } from "react";
import "./index.css";

const DiscountBadge = ({ discount }) => {
  if (!discount) return null;
  return <div className="discount-badge">- {discount}</div>;
};

const Product = (product, index) => {
  if (!product)
    return <div className="empty-product" key={`empty-product-${index}`} />;
  return (
    <div className="product" key={product.title}>
      <div className="image-container">
        <Image
          alt={product.title}
          src={product.img}
          width={0}
          height={0}
          sizes="100vw"
          style={
            product.wide
              ? { width: "80%", height: "auto" }
              : { width: "auto", height: "80%" }
          }
        />
      </div>
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
