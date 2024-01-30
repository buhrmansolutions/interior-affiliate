import type { Metadata } from "next";
import { Inter } from "next/font/google";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import { DM_Sans } from "next/font/google";

config.autoAddCss = false; /* eslint-disable import/first */

import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = DM_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "allyourgolf",
  description: "Where your passion for golf meets convenience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
