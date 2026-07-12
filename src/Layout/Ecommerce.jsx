import React from "react";
import EcommerceImage from "../assets/ecommerce.png";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { LuSquareArrowUpRight } from "react-icons/lu";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiReactrouter,
  SiAxios,
  SiVite,
  SiSwiper,
  SiFirebase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Ecommerce() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-6 lg:gap-x-10 items-center bg-bg-card border border-border px-4 py-5 rounded-2xl">
        <div className="w-full md:w-1/2 ">
          <img
            src={EcommerceImage}
            alt=""
            className="rounded-4xl object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="py-1 px-4 text-[#636A9B] bg-[#242547] w-fit font-semibold rounded-[7px]">
            01
          </div>
          <div className="border-b pb-3 lg:pb-8 border-border">
            <h2 className=" text-xl lg:text-2xl font-semibold font-Jakarta my-4 text-text-primary">
              E-Commerce Platform
            </h2>
            <p className="text-text-secondary text-xs md:text-sm font-medium w-full lg:text-[16px] lg:w-[75%] ">
              Exclusive is a fully responsive frontend e-commerce website built
              with React, Tailwind CSS, and Dummy JSON API. It features product
              listings, category filtering, search, wishlist, shopping cart, and
              a clean, modern user interface.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-3 mt-3 md:mt-5">
            <div className="flex items-center gap-2  px-4 py-2">
              <SiReact className="text-[#61DAFB] text-xl lg:text-2xl" />
              <span>React</span>
            </div>

            <div className="flex items-center gap-2 ">
              <SiJavascript className="text-[#F7DF1E] text-xl lg:text-2xl" />
              <span>JavaScript</span>
            </div>

            <div className="flex items-center gap-2  px-4 py-2 rounded-xl">
              <SiTailwindcss className="text-[#06B6D4] text-xl lg:text-2xl" />
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl">
              <SiRedux className="text-[#764ABC] text-xl lg:text-2xl" />
              <span>Redux Toolkit</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl">
              <SiReactrouter className="text-[#CA4245] text-xl lg:text-2xl" />
              <span>React Router</span>
            </div>

            <div className="flex items-center gap-2  px-4 py-2 rounded-xl">
              <TbApi className="text-[#10B981] text-xl lg:text-2xl" />
              <span>DummyJSON API</span>
            </div>

            <div className="flex items-center gap-2  px-4 py-2 rounded-xl">
              <SiSwiper className="text-[#0080FF] text-xl lg:text-2xl" />
              <span>Swiper</span>
            </div>

            <div className="flex items-center gap-2  px-4 py-2 rounded-xl">
              <SiVite className="text-[#646CFF] text-xl lg:text-2xl" />
              <span>Vite</span>
            </div>
            <div className="flex items-center gap-2  px-4 py-2 rounded-xl">
              <SiFirebase className="text-[#FFCA28] text-xl lg:text-2xl" />
              <span>Firebase</span>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:gap-x-4 lg:gap-x-30">
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    User Authentication
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    Product Filtering & Search
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    Add To Cart & Wishlish
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    Product Details View
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    REST API Integration
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className=" md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    Responsive User Interface
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-3 mt-7">
            <a href="https://salmanfarshi-dev.github.io/Exclusive/">
              <Button
                className="hover:bg-primary/20 text-white rounded-[10px] border border-primary/40 bg-primary hover:border-primary/80 duration-300 lg:py-5 lg:px-10"
                variant="secondary"
              >
                Live Demo <LuSquareArrowUpRight />
              </Button>
            </a>
            <a href="https://github.com/salmanfarshi-dev/Exclusive">
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

export default Ecommerce;
