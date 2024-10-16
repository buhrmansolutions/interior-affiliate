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
              src="https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="snooze"
              fill
            />
          </div>
          <h2>Oops!</h2>
          <p>
            Det ser ut som att du ännu inte har några favoritprodukter sparade!
            <br />
            <br />
            Ingen fara, alla inredningsentusiaster börjar någonstans. Utforska
            vårt sortiment och lägg till dina favoriter så att du enkelt kan
            hitta dem igen. Ditt drömrum väntar på att bli skapat!
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
