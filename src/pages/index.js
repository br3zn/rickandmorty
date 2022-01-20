/* fetch data at build time, maybe stale */

import Head from "next/head";
import { Characters } from "../components/Characters";

export default function Home() {
  return (
    <>
      <p className="mt-16 text-2xl text-center">Character overview:</p>

      <div className="flex items-center justify-center flex-wrap max-w-3xl">
        <Characters />
      </div>
    </>
  );
}

/*
 ? whats the difference between the method used
 ? on this site and static-site.js which uses staticProps
 * static-site.js has a slightly faster loading time
*/
