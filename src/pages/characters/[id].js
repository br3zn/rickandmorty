/* import client from "../../apollo-client";

export default function Character({ character }) {}

export async function getStaticPaths() {
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

  const paths = data.characters.results.map((character) => ({
    params: { id: character.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {}
 */
