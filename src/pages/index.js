/* fetch data at build time, maybe stale */

import Head from "next/head";
import { Characters } from "../components/Characters";

export default function Home() {
  return (
    <div className="px-8">
      <Head>
        <title>C-137 - Rick and Morty Database</title>
        <meta name="description" content="Interface for Rick and Morty API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-9xl font-['Get_Schwifty'] text-center">C-137</h1>
      <small className="text-gray-600">Rick and Morty Database</small>

      <p className="my-16 text-2xl text-center">Character overview:</p>

      <div className="flex items-center justify-center flex-wrap max-w-3xl">
        <Characters />
      </div>
    </div>
  );
}

/*
 ? whats the difference between the method used
 ? on this site and static-site.js which uses staticProps
 * static-site.js has a slightly faster loading time
*/
