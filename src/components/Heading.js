/*
 *  heading with project name as svg graphic - no custom font to load
 */

import Image from "next/image";

export default function Heading() {
  return (
    <header className="sticky top-0 left-0 z-10 bg-white bg-opacity-60 after:blur flex flex-col justify-center items-center">
      <div className="w-full py-5 flex justify-center">
        <Image src="/c-137.svg" width={256} height={128} alt="C-137" />
      </div>
      <small className="text-gray-600">Rick and Morty Database</small>
    </header>
  );
}
