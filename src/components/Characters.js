/*
 *  fetch data from api following the apollographql docs
 */

import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";

const CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        image
      }
      info {
        pages
      }
    }
  }
`;
export function Characters() {
  const { query } = useRouter();
  const page = Number.parseInt(query.page);

  const { loading, error, data } = useQuery(CHARACTERS, {
    variables: { page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error}</p>;

  return (
    <>
      {data.characters.results.map(({ id, image, name, status, species }) => (
        <div
          key={id}
          className="transition-all bg-white shadow flex flex-col justify-center items-center m-4 p-6 border border-solid border-gray-400 rounded-lg w-full md:max-w-xs hover:text-blue-600 hover:border-blue-600 hover:scale-105"
        >
          <a href={"#" + id} aria-hidden="true" className="aal_anchor" id={id}>
            <Image src={image} alt={name} width={256} height={256} />
          </a>
          <h3 className="text-lg">{name}</h3>
          <p>
            {species}
            <small> - {status}</small>
          </p>
        </div>
      ))}
      {page > 1 && <Link href={`/characters/${page - 1}`}>Previous Page</Link>}
      {data && page < data.characters.info.pages && (
        <Link href={`/characters/${page + 1}`}>Next Page</Link>
      )}
    </>
  );
}
