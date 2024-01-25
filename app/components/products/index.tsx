"use client";

import { useState } from "react";
import Product from "../product";
import PageSelector from "../pageselector";
import "./index.css";

const PRODUCTS = [
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524500-717d056bc8ad?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver Taylormade",
    price: { amount: 2000, currency: "USD" },
    discount: "",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524524-99416ed5dbba?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Irons Taylormade",
    price: { amount: 199999, currency: "SEK" },
    discount: "20%",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524500-717d056bc8ad?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver Taylormade",
    price: { amount: 2000, currency: "USD" },
    discount: "",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524524-99416ed5dbba?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Irons Taylormade",
    price: { amount: 199999, currency: "SEK" },
    discount: "20%",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524500-717d056bc8ad?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver Taylormade",
    price: { amount: 2000, currency: "USD" },
    discount: "",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524524-99416ed5dbba?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Irons Taylormade",
    price: { amount: 199999, currency: "SEK" },
    discount: "20%",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524500-717d056bc8ad?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver Taylormade",
    price: { amount: 2000, currency: "USD" },
    discount: "",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524524-99416ed5dbba?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Irons Taylormade",
    price: { amount: 199999, currency: "SEK" },
    discount: "20%",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524500-717d056bc8ad?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver Taylormade",
    price: { amount: 2000, currency: "USD" },
    discount: "",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524524-99416ed5dbba?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Irons Taylormade",
    price: { amount: 199999, currency: "SEK" },
    discount: "20%",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524500-717d056bc8ad?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver Taylormade",
    price: { amount: 2000, currency: "USD" },
    discount: "",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524524-99416ed5dbba?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Irons Taylormade",
    price: { amount: 199999, currency: "SEK" },
    discount: "20%",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524500-717d056bc8ad?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver Taylormade",
    price: { amount: 2000, currency: "USD" },
    discount: "",
  },
  {
    href: "",
    img: "https://images.unsplash.com/photo-1697448524524-99416ed5dbba?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Irons Taylormade",
    price: { amount: 199999, currency: "SEK" },
    discount: "20%",
  },
];
const mockNumberOfPages = 14;
const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="product-container">
      <div className="product-grid">{PRODUCTS.map(Product)}</div>
      <PageSelector
        numberOfPages={mockNumberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Products;
