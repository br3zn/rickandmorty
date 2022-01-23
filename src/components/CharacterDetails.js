/*
 *  fetch data from api following the apollographql docs
 */

import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const CHARACTER_DETAILS = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

export function CharacterDetails({ charId }) {
  const { loading, error, data } = useQuery(CHARACTER_DETAILS, {
    variables: { characterId: charId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error}</p>;

  return (
    <>
      <div className="flex items-center justify-center flex-wrap w-5/6">
        <div className="transition-all bg-white shadow flex flex-col justify-center items-center  p-6 border border-solid border-gray-400 rounded-lg w-full md:max-w-xs hover:text-blue-600 hover:border-blue-600 hover:scale-105">
          <Image
            src={data.character.image}
            alt={data.character.name}
            width={256}
            height={256}
          />
          <h3 className="text-lg">{data.character.name}</h3>
          <p>
            {data.character.species}
            <small> - {data.character.status}</small>
          </p>
        </div>
      </div>
    </>
  );
}
