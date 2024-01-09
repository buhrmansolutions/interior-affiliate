'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './style.css'


const headings = [{
    heading: "Shop",
    path: "/"
}, {
    heading: "Our Story",
    path: "/about"
}
]

export default function Layout() {
    const pathname = usePathname()

    return (
        <div className='header'>
            <img src="https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png" className="logo" />
            <div className="headings-container">
                {headings.map(({ heading, path }) =>
                    <Link href={path}>
                        <h2>
                            {heading}
                        </h2>
                        {path === pathname && <div className='active-indicator' />}
                    </Link>)}
            </div>
            <div />
        </div>
    )
}
