/*
 *  fetch data from api following the apollographql docs
 */

import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";

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
      <Head>
        <title>C-137 - {data.character.name}</title>
      </Head>
      <div className="flex items-center justify-center flex-wrap">
        <div className="overflow-hidden transition-all shadow flex flex-col justify-center items-center border border-solid border-gray-400 rounded-lg min-h-full w-full md:max-w-2xl hover:text-blue-600 hover:border-blue-600">
          <div className="overflow-hidden w-full max-h-64 object-fill">
            <Image
              src={data.character.image}
              alt={data.character.name}
              width={256}
              height={256}
              layout="responsive"
            />
          </div>
          <div className="bg-white w-full h-full text-center p-3">
            <h3 className="text-lg">{data.character.name}</h3>
            <p>
              {data.character.species}
              <small> - {data.character.status}</small>
            </p>
            <p>Location: {data.character.origin.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
