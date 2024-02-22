import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" py-4 bg-[#6EC4E4] w-full">
      <div className="ml-6 mr-6 leading-5 sm:items-center justify-between flex flex-col sm:flex-row gap-6 text-[16px]">
        <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
          <b>Leave news tips:</b>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <p>
              <b>Phone:</b> 010-112231
            </p>
            <p className="italic">
              <b>Email:</b> tips@chasnews.se
            </p>
            <p className="py-2">
              <Link className="border rounded-full p-3 bg-[#4C64FF] text-[#fefefe]" href="/">Work with us</Link>
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-5 lg:flex-row">
          <b>Responsible publishers:</b>
          <div className="grid sm:grid-cols-2 pt-2">
            <div className="mr-4 italic">
              <p>Rebecka Gamble</p>
              <p>Amanda Jonört</p>
              <p>Elias Burhan</p>
            </div>
            <div className="italic">
              <p>Qasim Khan</p>
              <p>Yaser E</p>
              <p>Rodrigo Sebastian</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
