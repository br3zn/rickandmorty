import { useRouter } from "next/router";
import { CharacterDetails } from "../../components/CharacterDetails";

export default function DisplayCharacterDetails() {
  const { query } = useRouter();
  const router = useRouter();
  const charId = Number.parseInt(query.id);
  return (
    <>
      <button
        className="mt-4 text-blue-600"
        type="button"
        onClick={() => router.back()}
      >
        Back to overview
      </button>
      <p className="mt-16 text-2xl text-center">Character #{charId}</p>
      <CharacterDetails charId={charId} />
    </>
  );
}
