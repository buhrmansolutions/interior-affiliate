import type { Metadata } from "next";

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
import Message from "./components/message";

const inter = DM_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Sovrumsmöbler och Inredning | Skapa Ditt Drömrum",
  description:
    "Upptäck vårt stora utbud av högkvalitativa sovrumsmöbler och inredning. Från sängar och nattduksbord till sängkläder och dekorationer – skapa ditt perfekta sovrum hos oss!",
  keywords:
    "sovrumsmöbler, inredning, sängar, nattduksbord, sängkläder, dekorationer, modern inredning, sovrumsdesign",
  robots: "index, follow",
  authors: { name: "Sovrumsinredning" },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}
