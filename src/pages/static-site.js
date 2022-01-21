/*
 *  fetch data at build time, maybe stale if updated after site building
 */

import Image from "next/image";
import client from "../apollo-client";
import { gql } from "@apollo/client";

export default function Home({ characters }) {
  return (
    <>
      <p className="mt-16 text-2xl text-center">Character overview:</p>

      <div className="flex items-center justify-center flex-wrap max-w-3xl">
        {characters.map((char) => (
          <div
            key={char.id}
            className="bg-white shadow flex flex-col justify-center items-center m-4 p-6 border border-solid border-gray-400 rounded-lg w-full md:max-w-xs hover:text-blue-600 hover:border-blue-600 transition-all"
          >
            <a
              href={"#" + char.id}
              aria-hidden="true"
              className="aal_anchor"
              id={char.id}
            >
              <Image
                src={char.image}
                alt={char.name}
                width={256}
                height={256}
              />
            </a>
            <h3 className="text-lg">{char.name}</h3>
            <p>
              {char.species}
              <small> - {char.status}</small>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Characters {
        characters {
          results {
            id
            name
            species
            status
            image
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}
