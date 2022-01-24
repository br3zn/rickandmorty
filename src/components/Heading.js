/*
 *  heading with project name as svg graphic - no custom font to load
 */

import Image from "next/image";
import Link from "next/link";
import Logo from "./LogoGraphic";

export default function Heading() {
  return (
    <header className="max-w-full sticky top-0 left-0 z-30 bg-white bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center">
      <Link href="/" passHref>
        <div className="cursor-pointer hover:scale-105 transition-all py-5 flex justify-center">
          <Logo fillColor="green" strokeColor="yellow" />
        </div>
      </Link>
      <small className="text-gray-600">Rick and Morty Database</small>
    </header>
  );
}
