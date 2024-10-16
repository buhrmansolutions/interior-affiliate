"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { useCallback, useEffect, useState } from "react";

const DiscountBadge = ({ discount }: { discount: string }) => {
  if (!discount) return null;
  return <div className="discount-badge">- {discount}</div>;
};

const Save = ({ product }: any) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const currentLocalStorage = JSON.parse(
      localStorage.getItem("savedProducts") || "[]"
    );

    const isSaved = currentLocalStorage.some(
      ({ merchant_product_id }: any) =>
        merchant_product_id === product.merchant_product_id
    );
    setIsSaved(isSaved), [];
  });

  const saveProduct = () => {
    const currentLocalStorage = JSON.parse(
      localStorage.getItem("savedProducts") || "[]"
    );
    const newStorage = [...currentLocalStorage, product];
    localStorage.setItem("savedProducts", JSON.stringify(newStorage));
    setIsSaved(true);
  };

  const removeProduct = () => {
    const currentLocalStorage = JSON.parse(
      localStorage.getItem("savedProducts") || "[]"
    );
    const newStorage = currentLocalStorage.filter(
      ({ merchant_product_id }: any) =>
        merchant_product_id !== product.merchant_product_id
    );
    localStorage.setItem("savedProducts", JSON.stringify(newStorage));
    setIsSaved(false);
  };

  return (
    <div
      className={`save-icon ${isSaved ? "saved" : ""}`}
      onClick={isSaved ? removeProduct : saveProduct}
    >
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export type Product = {
  aw_deep_link: string;
  product_name: string;
  aw_product_id: string;
  merchant_product_id: string;
  merchant_image_url: string;
  description: string;
  merchant_category: string;
  search_price: string;
  category_name: string;
  aw_image_url: string;
  store_price: string;
  display_price: string;
  currency: string;
  dateAdded: string;
};

const Product = (product: Product, index: number) => {
  if (!product)
    return <div className="empty-product" key={`empty-product-${index}`} />;
  return (
    <div className="product" key={product.product_name}>
      <div className="image-container">
        <Save product={product} />
        <Link href={product.aw_deep_link} target="_blank">
          <Image
            alt={product.product_name}
            src={product.merchant_image_url}
            width={0}
            height={0}
            sizes="100vw"
            style={
              false
                ? { width: "80%", height: "auto" }
                : { width: "auto", height: "80%" }
            }
          />
        </Link>
      </div>
      <h4>{product.product_name}</h4>
      {product.search_price && (
        <p>
          {new Intl.NumberFormat("sv-SE", {
            style: "currency",
            currency: "SEK",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }).format(parseInt(product.search_price, 10))}
        </p>
      )}
      {/* <DiscountBadge discount={product.discount} /> */}
    </div>
  );
};

export default Product;
