/*
 *  fetch data from api following the apollographql docs
 */

import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
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
export function CharactersList({ page }) {
  const { loading, error, data } = useQuery(CHARACTERS, {
    variables: { page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error}</p>;

  return (
    <>
      <div className="flex items-center justify-center flex-wrap w-5/6">
        {data.characters.results.map(({ id, image, name, status, species }) => (
          <a href={"/character/" + id} id={id} key={id} className="m-4">
            <div className="transition-all bg-white shadow flex flex-col justify-center items-center  p-6 border border-solid border-gray-400 rounded-lg w-full md:max-w-xs hover:text-blue-600 hover:border-blue-600 hover:scale-105">
              <Image src={image} alt={name} width={256} height={256} />
              <h3 className="text-lg">{name}</h3>
              <p>
                {species}
                <small> - {status}</small>
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex w-full md:w-2/3 lg:w-1/3 justify-between">
        {page > 1 && (
          <Link href={`/characters/${page - 1}`}>Previous Page</Link>
        )}
        {data && `Page ${page} of ${data.characters.info.pages}`}
        {data && page < data.characters.info.pages && (
          <Link href={`/characters/${page + 1}`}>Next Page</Link>
        )}
      </div>
    </>
  );
}
