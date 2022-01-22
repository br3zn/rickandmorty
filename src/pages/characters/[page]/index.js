import { Characters } from "../../../components/Characters";

export default function Page({ page }) {
  return (
    <>
      <p className="mt-16 text-2xl text-center">Characters - Page {page}</p>

      <div className="flex items-center justify-center flex-wrap w-5/6">
        <Characters />
      </div>
    </>
  );
}
