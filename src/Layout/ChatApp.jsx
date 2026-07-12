import React from "react";
import ChattingImage from "../assets/chatingapp.png";
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

function ChatApp() {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row gap-y-5 md:gap-y-0 md:gap-x-6 lg:gap-x-10 items-center bg-bg-card border border-border px-4 py-5 rounded-2xl">
        <div className="w-full md:w-1/2">
          <div className="py-1 px-4 text-[#636A9B] bg-[#242547] w-fit font-semibold rounded-[7px]">
            02
          </div>
          <div className="border-b pb-3 lg:pb-8 border-border">
            <h2 className=" text-xl lg:text-2xl font-semibold font-Jakarta my-4 text-text-primary">
              Talkify - Real Time Chat App
            </h2>
            <p className="text-text-secondary text-xs md:text-sm font-medium w-full lg:text-[16px] lg:w-[75%] ">
              Talkify is a modern real-time chat application built with React
              and Firebase, offering secure authentication, instant messaging,
              friend management, and a responsive user experience.
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
                    Real-time Messaging
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    User Authentication
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    Group Chats
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                   Profile Management
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    Responsive Design
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    Friend Requests
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                    User Search
                  </p>
                </div>
                <div className="flex gap-x-2 items-center ">
                  <FaCheckCircle className="text-primary" />
                  <p className="text-xs md:text-sm lg:text-[16px] text-text-secondary font-sans font-normal">
                   Message Notifications
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-3 mt-7">
            <a href="https://talkify-tau.vercel.app">
              <Button
                className="hover:bg-primary/20 text-white rounded-[10px] border border-primary/40 bg-primary hover:border-primary/80 duration-300 lg:py-5 lg:px-10"
                variant="secondary"
              >
                Live Demo <LuSquareArrowUpRight />
              </Button>
            </a>
            <a href="https://github.com/salmanfarshi-dev/Talkify">
              <Button
                className="bg-primary/20 text-white rounded-[10px] border border-primary/40 hover:bg-primary/10 hover:border-primary/80 duration-300 lg:py-5 lg:px-10"
                variant="secondary"
              >
                Github <FaGithub />
              </Button>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 ">
          <img
            src={ChattingImage}
            alt=""
            className="rounded-4xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ChatApp;
