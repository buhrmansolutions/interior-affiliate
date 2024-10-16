"use client";
import { useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

const headings = [
  {
    heading: "Butik",
    path: "/shop",
  },
  {
    heading: "Om oss",
    path: "/about",
  },
  {
    heading: "Blogg",
    path: "/blog",
  },
  {
    heading: "Sparade produkter",
    path: "/saved-products",
  },
];

export default function Layout() {
  const pathname = usePathname();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu);

  return (
    <div className="header-container">
      <div className="header">
        <div className="header-top-container">
          <Link href="/">
            <h2>sovrumsinredning</h2>
          </Link>
          <button
            className={`hamburger-menu-container ${
              showHamburgerMenu && "active"
            }`}
            onClick={toggleHamburgerMenu}
          >
            <FontAwesomeIcon icon={faBars} className="menu-icon-bars" />
            <FontAwesomeIcon icon={faTimes} className="menu-icon-cross" />
          </button>
        </div>
        <div
          className={`headings-container ${
            showHamburgerMenu ? "active" : "inActive"
          }`}
        >
          {headings.map(({ heading, path }) => (
            <Link
              href={path}
              key={heading}
              onClick={() => setShowHamburgerMenu(false)}
            >
              <h2>{path === pathname ? <b>{heading}</b> : heading}</h2>
              {path === pathname && <div className="active-indicator" />}
            </Link>
          ))}
        </div>
        <div className="empty-element" />
      </div>
    </div>
  );
}
