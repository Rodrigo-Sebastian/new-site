import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <Link href="/" className="no-underline">
        <h2 className="uppercase text-[#4C64FF] tracking-tighter font-bold text-2xl italic py-2 mx-2 sm:mx-6">Chas News</h2>
      </Link>
      <nav className="bg-[#4C64FF] flex flex-row h-10 items-center w-full">
        <ul className="list-none flex flex-row gap-4 sm:gap-6 mx-2 sm:mx-6">
          <li className="">
            <Link href="/" className="navLinks">
              Start
            </Link>
          </li>
          <li className="">
            <Link href="/sports" className="navLinks">
              Sports
            </Link>
          </li>
          <li className="">
            <Link href="/technology" className="navLinks">
            Technology
            </Link>
          </li>
          <li className="">
            <Link href="/health" className="navLinks">
            Health
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
