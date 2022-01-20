import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-400">
      <main className="bg-gray-300 min-h-screen py-16 flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
