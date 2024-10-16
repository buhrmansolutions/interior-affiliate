"use client";
import Image from "next/image";
import Link from "next/link";
import Product from "./components/product";
import data from "./data";
import { blogPosts } from "./blog/blogPosts";
import "./index.css";

const BRANDS = [
  {
    merchant_image_url:
      "https://www.awin1.com/cshow.php?s=3003483&v=16339&q=424590&r=1556248",
    aw_deep_link:
      "https://www.awin1.com/cread.php?s=3003483&v=16339&q=424590&r=1556248",
    product_name: "Nike",
  },
];

const Page = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-image-container">
          <Image
            alt="bed image"
            src="https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            layout="fill"
            objectFit="cover"
          />
          <div className="image-content">
            <h1>sovrumsinredning - Premium sovrumsmöbler på ett ställe!</h1>
            <p>
              Upptäck det bästa inom sovrumsinredning. Sängbord, lakan,
              belysning. Gör varje natt minnesvärd. Välkommen till
              sovrumsinredning!
            </p>
            <Link href="/shop">
              <button className="primary-button">
                Ta mig till produkterna!
              </button>
            </Link>
          </div>
        </div>
        <div className="headings">
          <h2>Nya produkter</h2>
          <Link href="/shop">Visa alla produkter</Link>
        </div>
        <div className="latest-products">{data.slice(0, 5).map(Product)}</div>
        <div className="headings">
          <h2>Nya varumärken</h2>
        </div>
        <div className="latest-products">
          {BRANDS.slice(0, 5).map(Product as any)}
        </div>
        <div className="headings">
          <h2>Senaste blogg-inlägget</h2>
        </div>
        <div className="latest-blog-post">
          <h3>{blogPosts[0].title}</h3>
          <h4>
            av <span className="author">{blogPosts[0].author}</span> -{" "}
            {blogPosts[0].date}
          </h4>
          <Link href="/blog">Läs mer</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
