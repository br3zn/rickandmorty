import { Characters } from "../../../components/Characters";

export default function Page() {
  return (
    <>
      <p className="mt-16 text-2xl text-center">Character overview</p>

      <div className="flex items-center justify-center flex-wrap max-w-3xl">
        <Characters />
      </div>
    </>
  );
}
