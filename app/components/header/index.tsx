'use client'
import { useState } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'


const headings = [{
    heading: "Shop",
    path: "/shop"
}, {
    heading: "Our Story",
    path: "/about"
}
]

export default function Layout() {
    const pathname = usePathname()
    const { push } = useRouter()
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

    if (pathname === "/") {
        push(headings[0].path)
    }


    const toggleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu)

    return (
        <div className='header'>
            <div className="header-top-container">
                <Image src="/logo.png" alt="Sholf logo" width={100} height={23.83} />
                <button className={`hamburger-menu-container ${showHamburgerMenu && "active"}`} onClick={toggleHamburgerMenu}>
                    <FontAwesomeIcon icon={faBars} className="menu-icon-bars" />
                    <FontAwesomeIcon icon={faTimes} className="menu-icon-cross" />
                </button>
            </div>
            <div className="desktop-headings-container">
                {headings.map(({ heading, path }) =>
                    <Link href={path} key={heading}>
                        <h2>
                            {heading}
                        </h2>
                        {path === pathname && <div className='active-indicator' />}
                    </Link>)}
            </div>
            <div className={`mobile-headings-container ${showHamburgerMenu ? "active" : "inActive"}`}>
                {headings.map(({ heading, path }) =>
                    <Link href={path} key={heading} onClick={() => setShowHamburgerMenu(false)}>
                        <h2>
                            {path === pathname ?
                                <b>
                                    {heading}
                                </b> : heading
                            }
                        </h2>
                    </Link>)}
            </div>
            <div className='empty-element' />
        </div>
    )
}
