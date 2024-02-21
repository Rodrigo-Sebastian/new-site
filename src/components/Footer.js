import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="absolute bottom-0 py-4 bg-[#6EC4E4] w-full">
      <div className="ml-6 leading-5 sm:items-center justify-center flex flex-col sm:flex-row gap-6 text-[16px]">
        <div>
          <b>Leave news tips</b>
          <div className="pt-2">
            <p>
              <b>Phone:</b> 010-112231
            </p>
            <p>
              <b>Email:</b> tips@chasnews.se
            </p>
            <p>
              <Link href="/">Work with us</Link>
            </p>
          </div>
        </div>
        <div className="">
          <b>Responsible publishers</b>
          <div className="grid sm:grid-cols-2 pt-2">
            <div className="mr-4">
              <p>Rebecka Gamble</p>
              <p>Amanda Jonört</p>
              <p>Elias Burhan</p>
            </div>
            <div>
              <p>Qasim Khan</p>
              <p>Yaser E</p>
              <p>Rodrigo Sebastian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
