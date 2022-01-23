import { useRouter } from "next/router";
import { CharacterDetails } from "../../components/CharacterDetails";

export default function DisplayCharacterDetails() {
  const { query } = useRouter();
  const charId = Number.parseInt(query.id);
  return (
    <>
      <p className="mt-16 text-2xl text-center">Character {charId}</p>
      <CharacterDetails charId={charId} />
    </>
  );
}
