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
  title: "Din destination för Golfprodukter från Toppvarumärken",
  description:
    "Utforska det mest omfattande urvalet av golfprodukter från olika varumärken på allyourgolf. Hitta allt du behöver för din golfupplevelse på ett och samma ställe",
  keywords:
    "Golfkläder, golfskor, golfutrustning, golfaccessoarer, varumärkesgolfprodukter, toppvarumärken, golfshopping, allyourgolf",
  openGraph: {
    title: "Din destination för Golfprodukter från Toppvarumärken",
    description:
      "Upptäck det bästa inom golfshopping på allyourgolf.com. Vi samlar premium golfprodukter från olika varumärken för att göra din golfupplevelse enklare och roligare.",
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
