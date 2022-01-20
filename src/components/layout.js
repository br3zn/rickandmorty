/*
 *  base layout for every page
 */

import Head from "next/head";
import Heading from "./Heading";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-400">
      <Head>
        <title>C-137 - Rick and Morty Database</title>
        <meta name="description" content="Interface for Rick and Morty API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <main className="px-8 bg-gray-300 min-h-screen flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
