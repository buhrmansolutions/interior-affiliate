import { Head } from "next/document";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All golf you need",
};

export default function Home() {
  return (
    <main>
      <Head>
        {/**
         * Kommentera ut dessa scripten om det dyker upp problem med TypeError: Class extends value undefined is not a constructor or null
         */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/e20sdfsd9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </main>
  );
}
