import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

function LandingCard({
  Image,
  title,
  description,
  link,
  firsttools,
  secondtools,
  thirdtools,
}) {
  return (
    <div className='className="w-full md:w-90 lg:w-100 bg-bg-card  rounded-2xl border border-border hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-primary/70 duration-300 overflow-hidden px-4 py-6 mt-2'>
      <div className="w-full h-70 md:h-60 rounded-xl relative">
        <img
          src={Image}
          alt=""
          className="object-cover h-full w-full rounded-xl"
        />

        <a href={link}>
          <div className="w-14 h-14 rounded-full flex justify-center items-center bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] absolute -bottom-3 -right-3 transition-all duration-300 text-2xl">
            <LuSquareArrowOutUpRight />
          </div>
        </a>
      </div>
      <div className="mt-2 flex flex-col">
        <h6 className="text-xl font-medium text-text-primary">{title}</h6>
        <p className="text-text-secondary flex items-center gap-x-2 font-normal text-sm">
          {description}
        </p>

        <div className="flex items-center gap-x-2">
          <p className="text-sm font-medium border-border border px-4 py-2 rounded-[5px]">
            {firsttools}
          </p>
          <p className="text-sm font-medium border-border border px-4 py-2 rounded-[5px]">
            {secondtools}
          </p>
          <p className="text-sm font-medium border-border border px-4 py-2 rounded-[5px]">
            {thirdtools}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingCard;
