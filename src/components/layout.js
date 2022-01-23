/*
 *  base layout for entire app
 */

import Head from "next/head";
import Heading from "./Heading";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>C-137 - Rick and Morty Database</title>
        <meta name="description" content="Interface for Rick and Morty API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <main className="min-h-screen px-8 flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
