/*
 *  fetch data from api following the apollographql docs
 */

import Image from "next/image";
import { gql, useQuery } from "@apollo/client";

const CHARACTERS = gql`
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
`;
export function Characters() {
  const { loading, error, data } = useQuery(CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return data.characters.results.map(({ id, image, name, status, species }) => (
    <div
      key={id}
      className="transition-all bg-white shadow flex flex-col justify-center items-center m-4 p-6 border border-solid border-gray-400 rounded-lg w-full md:max-w-xs hover:text-blue-600 hover:border-blue-600"
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
  ));
}
