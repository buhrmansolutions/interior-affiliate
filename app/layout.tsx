import type { Metadata } from "next"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
import { DM_Sans } from "next/font/google"

config.autoAddCss = false /* eslint-disable import/first */

import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import Message from "./components/message"

const inter = DM_Sans({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "allyourgolf",
  description: "Din samlade golfbutik online",
  keywords:
    "Golf, golfshop, golfbutik, allyourgolf, golfprodukter, online, golfprylar",
  openGraph: {
    title: "allyourgolf",
    description: "Din samlade golfbutik online",
    siteName: "allyourgolf.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <Header />
        {children}
        <Message />
        <Footer />
      </body>
    </html>
  )
}
