import { Metadata } from "next";
import Head from "next/head";
export const metadata: Metadata = {
  title: "All golf you need",
};

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
    </main>
  );
}
