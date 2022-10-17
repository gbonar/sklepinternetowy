import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-5xl mx-auto w-full">
      <nav className="bg-gray-700 text-white px-4 py-4">Nawigacja
      <Link href="/">
          <a>Główna</a>
          </Link> 
        
        <Link href="/about">
          <a className="px-2">About</a>
          </Link> 

          <Link href="/products">
          <a className="px-2">Products SSG</a>
          </Link> 

          <Link href="/products-csr">
          <a className="px-2">Products CSR</a>
          </Link> 

      </nav>
    </header>
  );
};
