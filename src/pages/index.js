import Link from "next/link";
export default function Home() {
  return (
    <>
      <p className="mt-16 text-2xl text-center text-blue-500 hover:text-blue-400">
        <Link href="/characters/1">Character overview</Link>
      </p>
    </>
  );
}

/*
 ? whats the difference between the method used
 ? on this site and static-site.js which uses staticProps
 * static-site.js has a slightly faster loading time
 ! not slightly faster, cut the loading time down to half on build
*/
