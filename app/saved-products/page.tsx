"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Products from "../components/products";
import Link from "next/link";
import "./index.css";

type Props = {
  title: string;
  date: string;
  author: string;
  image?: string;
  introText: string;
  sections: Array<{ title: string; text: string; image?: string }>;
  Component?: any;
};

const Page = () => {
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    const updateData = () => {
      setSavedProducts(
        JSON.parse(localStorage.getItem("savedProducts") || "[]")
      );
    };

    updateData();
  }, [localStorage.getItem("savedProducts")]);

  if (savedProducts.length === 0) {
    return (
      <main className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-image-container">
            <Image
              src="https://images.pexels.com/photos/15877158/pexels-photo-15877158/free-photo-of-man-falt-spelar-gras.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="in the bunker"
              fill
            />
          </div>
          <h2>Oops!</h2>
          <p>
            Det verkar som att du inte har sparat några favoriter ännu. Då
            kanske det är dags!
            <br />
            Leta dig tillbaka till vår <Link href="/shop">butik</Link> så
            hjälper vi dig att hitta nya favoriter!
          </p>
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Link href="/shop">
              <button className="primary-button">
                Ta mig till produkterna!
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <div className="saved-products-page">
      <Products savedProducts={savedProducts} />
    </div>
  );
};

export default Page;
