import React from "react";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa6";

function Navbar() {
  return (
    <header>
      <div className="flex flex-row justify-between items-center xl:max-w-[80%] 2xl:max-w-[50%] mx-auto">
        <Link href="/" className="no-underline">
          <h2 className="uppercase text-[#4C64FF] tracking-tighter font-bold text-2xl italic py-2 xl:mx-0  mx-2 sm:mx-6">
            Chas News
          </h2>
        </Link>
        <div className="py-2 mx-2 ">
          <Link href="/bookmarkedNews">
            <FaRegBookmark size={20} />
          </Link>
        </div>
      </div>
      <nav className="bg-[#4C64FF] flex flex-row h-10 items-center w-full">
        <ul className="list-none flex flex-row gap-4 sm:gap-6 xl:w-full mx-2 sm:mx-6 xl:max-w-[80%] 2xl:max-w-[50%] xl:mx-auto">
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
            <Link href="/business" className="navLinks">
              Business
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
