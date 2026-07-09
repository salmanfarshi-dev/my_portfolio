import React from "react";
import { BiSolidMessageRounded } from "react-icons/bi";

import { GiCardboardBox } from "react-icons/gi";
import FeatureCard from "./FeatureCard";
import { GrShieldSecurity } from "react-icons/gr";
import { MdTv } from "react-icons/md";
import { TbLayout2Filled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

function Features() {
  return (
    <div className="mt-5 md:mt-20 border-b border-border pb-16">
      <div className="flex justify-center gap-x-3 items-center">
        <GiCardboardBox className="text-primary text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
        <p className="text-text-primary font-Jakarta text-xl font-semibold">
          Key Features
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <FeatureCard
            tittle="Real-time Messaging"
            pera="Send and receive messages instantly using Firebase Firestore."
            Icon={<BiSolidMessageRounded />}
            Iconbg="bg-primary/40 text-primary text-2xl"
          />
        </div>
        <div>
          <FeatureCard
            tittle=" Authentication"
            pera="Secure login and registration using Firebase Authentication."
            Icon={<GrShieldSecurity />}
            Iconbg="bg-yellow-100 text-yellow-600 text-2xl"
          />
        </div>
        <div>
          <FeatureCard
            tittle="Responsive Design"
            pera="Fully responsive layout for desktop, tablet, and mobile devices."
            Icon={<MdTv />}
            Iconbg="bg-green-100 text-green-500 text-2xl"
          />
        </div>
        <div>
          <FeatureCard
            tittle="Modern Interface"
            pera="Clean and intuitive interface built with Tailwind CSS."
            Icon={<TbLayout2Filled />}
            Iconbg="bg-primary/40 text-primary text-2xl"
          />
        </div>
        <div>
          <FeatureCard
            tittle="User Friendly"
            pera="Simple navigation and smooth user experience."
            Icon={<FaUsers />}
            Iconbg="bg-red-100 text-red-400 text-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
