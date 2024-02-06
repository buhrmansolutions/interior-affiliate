"use client"
import { useEffect, useState } from "react"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./style.css"

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
]

export default function Layout() {
  const pathname = usePathname()
  const { push } = useRouter()
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

  useEffect(() => {
    if (pathname === "/") {
      push(headings[0].path)
    }
  }, [])

  const toggleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu)

  return (
    <div className="header-container">
      <div className="header">
        <div className="header-top-container">
          <Link href="/shop">
            <h1>allyourgolf</h1>
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
        <div className="desktop-headings-container">
          {headings.map(({ heading, path }) => (
            <Link href={path} key={heading}>
              <h5>{heading}</h5>
              {path === pathname && <div className="active-indicator" />}
            </Link>
          ))}
        </div>
        <div
          className={`mobile-headings-container ${
            showHamburgerMenu ? "active" : "inActive"
          }`}
        >
          {headings.map(({ heading, path }) => (
            <Link
              href={path}
              key={heading}
              onClick={() => setShowHamburgerMenu(false)}
            >
              <h5>{path === pathname ? <b>{heading}</b> : heading}</h5>
            </Link>
          ))}
        </div>
        <div className="empty-element" />
      </div>
    </div>
  )
}
