import React from "react";
import { Button } from "@heroui/react";
import { LuSquareArrowUpRight } from "react-icons/lu";
import projectImage from "../assets/Folio-Library.png";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiReactrouter,
  SiLucide,
  SiVite,
  SiVercel,
} from "react-icons/si";
import { TbDatabase, TbBooks } from "react-icons/tb";
import { FaCheckCircle, FaGithub } from "react-icons/fa";

const project = {
  number: "02",
  category: "Library Management",
  title: "Folio - Library Management System",
  description:
    "Folio is a modern, fully responsive library management system built as a frontend-only React app. It helps manage books, members, and circulation with a live dashboard, search and genre filters, borrow and return tracking with overdue detection, and data saved right in the browser.",
  liveUrl: "https://folio-beige-seven.vercel.app/",
  githubUrl: "https://github.com/salmanfarshi-dev/Folio",
};

const techStack = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "React Router", icon: SiReactrouter, color: "text-[#CA4245]" },
  { name: "Lucide React", icon: SiLucide, color: "text-[#F56565]" },
  { name: "Local Storage", icon: TbDatabase, color: "text-[#10B981]" },
  { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
];

const features = [
  "Live Dashboard Stats",
  "Catalog Search & Genre Filter",
  "Add, Edit & Delete Books",
  "Member Management",
  "Borrow & Return Desk",
  "Overdue Loan Detection",
  "Generated Book Covers",
  "Responsive Design",
];

function Folio() {
  return (
    <section>
      <div className="group flex flex-col md:flex-row-reverse gap-y-6 md:gap-y-0 md:gap-x-8 lg:gap-x-12 items-center bg-bg-card border border-border px-4 py-5 md:p-6 lg:p-8 rounded-2xl transition-colors duration-300 hover:border-primary/40">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border bg-primary/5">
            {projectImage ? (
              <img
                src={projectImage}
                alt="Bibliotheca library management system preview"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-text-secondary">
                <TbBooks className="text-4xl opacity-60" />
                <span className="text-xs md:text-sm font-medium">
                  Project image here
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap items-center gap-3">
            <div className="py-1 px-4 text-[#636A9B] bg-[#242547] w-fit font-semibold rounded-[7px]">
              {project.number}
            </div>
            <span className="text-xs md:text-sm font-medium text-text-secondary">
              {project.category}
            </span>
          </div>

          <div className="border-b border-border pb-4 lg:pb-8">
            <h2 className="text-xl lg:text-2xl font-semibold font-Jakarta mt-4 mb-3 text-text-primary">
              {project.title}
            </h2>
            <p className="text-text-secondary text-xs md:text-sm lg:text-[16px] leading-relaxed font-medium w-full lg:w-[85%]">
              {project.description}
            </p>
          </div>

          <div className="mt-4 md:mt-5">
            <h3 className="text-sm font-semibold text-text-primary">
              Built with
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {techStack.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-xl border border-border bg-primary/5 px-3 py-1.5 text-xs md:text-sm text-text-secondary transition-colors duration-300 hover:border-primary/40"
                >
                  <Icon className={`${color} text-base lg:text-xl`} />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 md:mt-6">
            <h3 className="text-sm font-semibold text-text-primary">
              Key features
            </h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-x-2">
                  <FaCheckCircle className="shrink-0 text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 md:mt-7">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button
                className="hover:bg-primary/20 text-white rounded-[10px] border border-primary/40 bg-primary hover:border-primary/80 duration-300 lg:py-5 lg:px-10"
                variant="secondary"
              >
                Live Demo <LuSquareArrowUpRight />
              </Button>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-primary/20 text-white rounded-[10px] border border-primary/40 hover:bg-primary/10 hover:border-primary/80 duration-300 lg:py-5 lg:px-10"
                variant="secondary"
              >
                Github <FaGithub />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Folio;
