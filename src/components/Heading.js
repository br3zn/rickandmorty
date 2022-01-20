import Image from "next/image";

export default function Heading() {
  return (
    <header className="flex flex-col justify-center items-center">
      <div className="w-full py-5 flex justify-center">
        <Image src="/c-137.svg" width={256} height={128} alt="C-137" />
      </div>
      <small className="text-gray-600">Rick and Morty Database</small>
    </header>
  );
}
