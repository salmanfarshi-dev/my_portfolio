import React from "react";
import { useState } from "react";
import { projects } from "../Component/MiniData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MiniCard from "../Component/MiniCard";
import Arrow from "../Component/Arrow";

const categories = ["All", "JavaScript", "React",, "HTML"];

function MiniProjects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <div className=" mt-30 mb-0 md:mb-35.5">
      <h1 className="text-2xl md:text-5xl text-center font-Jakarta font-semibold  ">
        {" "}
        Mini{" "}
        <span className="bg-gradient-to-r from-[#8d60f6] to-[#206ce6] bg-clip-text text-transparent">
          Projects
        </span>{" "}
      </h1>
      <p className="text-sm md:text-[16px] text-text-secondary font-normal w-full md:w-80 mx-auto text-center mt-3">
        A collection of small projects built with HTML, CSS, JavaScript and
        React
      </p>

      <div className="flex justify-center gap-2 md:gap-4  mt-5 md:mt-10 flex-wrap">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 md:px-6 py-1 text-sm md:text-[16px] md:py-2 rounded-full transition hover:bg-accent/30 cursor-pointer

            ${active === item ? "bg-blue-600 text-white" : "bg-accent/20 "}`}
          >
            {item}
          </button>
        ))}
      </div>


    <div className="relative">
    <Arrow/>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
       pagination={{
  clickable: true,
}}
        modules={[Navigation,Pagination]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        className="mt-12"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {filtered.map((project) => (
          <SwiperSlide key={project.id}>
            <MiniCard
              Image={project.image}
              title={project.title}
              description={project.description}
              live={project.live}
              github={project.github}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}

export default MiniProjects;
