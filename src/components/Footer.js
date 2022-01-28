export default function Footer() {
  return (
    <footer className="z-30 landscape:static landscape:lg:sticky sticky bottom-0 left-0 w-full bg-opacity-40 backdrop-blur-sm bg-gray-400 flex flex-1 py-4 border-t border-solid border-gray-400 justify-center items-center">
      <a
        href="https://github.com/br3zn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 justify-center items-center grow"
      >
        Build by <span className="font-serif font-semibold">br3zn</span>
      </a>
    </footer>
  );
}
