import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-5xl mx-auto w-full">
      <nav className="bg-gray-700 text-white px-4 py-2">Nawigacja
      <Link href="/">
          <a>Główna</a>
          </Link> 
        
        <Link href="/about">
          <a>About</a>
          </Link> 

      </nav>
    </header>
  );
};
