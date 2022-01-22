/*
 *  heading with project name as svg graphic - no custom font to load
 */

import Image from "next/image";
import Link from "next/link";

export default function Heading() {
  return (
    <header className="sticky top-0 left-0 z-10 bg-white bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center">
      <Link href="/" passHref>
        <div className="cursor-pointer hover:scale-105 transition-all w-full py-5 flex justify-center">
          <Image src="/c-137.svg" width={256} height={128} alt="C-137" />
        </div>
      </Link>
      <small className="text-gray-600">Rick and Morty Database</small>
    </header>
  );
}
