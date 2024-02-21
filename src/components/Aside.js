import React from "react";
import LatestNews from "./LatestNews";

function Aside() {
  return (
    <>
      {/**latest news */}
      <div className="my-4 bg-white w-full shadow-xl  rounded-br-xl rounded-tl-xl">
        <h2 className="uppercase font-bold text-md w-full rounded-tl-xl pl-2 py-1 bg-[#4C64FF] text-white">
          Latest news
        </h2>
        <div className="px-3 pb-4">
          <LatestNews
            title={"Manchester"}
            newsCont={"Shooting outside local pub"}
          />
          <LatestNews
            title={"Sweden"}
            newsCont={"Gang-related crimes are going up"}
          />
          <LatestNews title={"News"} newsCont={"Liverpool takes the lead"} />
          <LatestNews title={"London"} newsCont={"Prins Harry has landed"} />
          <LatestNews title={"USA"} newsCont={"Super Bowl fever"} />

          <div className="pt-4 flex justify-center">
            <button className="uppercase tracking-wider text-sm text-slate-700 cursor-pointer">
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aside;
