import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <Link href="/" className="no-underline">
       <h2 className="uppercase text-[#4C64FF]">Chas News</h2>
        </Link>
    <nav className="bg-[#4C64FF] flex flex-row  h-20">
      <ul className="list-none flex flex-row gap-8">
        <li className="">
          <Link href="/sports" className="no-underline uppercase text-white">Sports</Link>
        </li>
        <li className="">
          <Link href="/sports" className="no-underline uppercase text-white">Sports</Link>
        </li>
        <li className="">
          <Link href="/sports" className="no-underline uppercase text-white">Sports</Link>
        </li>
        <li className="">
          <Link href="/sports" className="no-underline uppercase text-white">Sports</Link>
        </li>

      </ul>
    </nav>
    </header>
  );
}

export default Navbar;
