import { CharactersList } from "../../components/CharactersList";
import { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  const page = Number.parseInt(query.page);
  return (
    <>
      <p className="mt-16 text-2xl text-center">
        Characters - {page && `Page ${page}`}
      </p>
      <CharactersList page={page} />
    </>
  );
}
