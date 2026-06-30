import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import Skills from "../Component/Skills";
import { FaRegCalendarCheck } from "react-icons/fa6";

function Education() {
  return (
   <>
    <h4 className="text-3xl md:text-6xl text-center font-Jakarta font-semibold text-text-primary">Skills</h4>
    <p className="text-text-secondary text-center text-xl md:text-2xl font-medium mt-3">My technical level</p>
    <div className="flex flex-col md:flex-row gap-y-5  gap-x-20 mt-15">
      <div className="md:w-130 bg-bg-card px-6 py-10 rounded-[20px] border border-border flex-1">
        <div className="flex gap-x-4">
          <div className="w-14 h-14 rounded-md bg-primary/10 flex justify-center items-center border border-border-hover">
            <FaGraduationCap className="text-2xl md:text-3xl text-primary" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-text-primary text-2xl md:text-3xl font-Jakarta font-semibold">
              Education
            </h3>
            <p className="text-text-secondary font-medium ">
              My academic background
            </p>
          </div>
        </div>

        <div className="border border-border mt-5 p-4 rounded">
          <div className="flex flex-col pb-5">
            <div className="flex gap-x-3 items-start">
              <div className="w-14 h-14 bg-primary/10 rounded-full border border-primary/30 flex justify-center items-center">
                <MdComputer className="text-2xl text-text-secondary" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[18px] font-Jakarta font-semibold text-text-primary">
                  Diploma in Computer Engineering
                </h3>
                <p className="text-sm font-semibold text-primary mt-1">
                  UCEP Institute of Science & Technology
                </p>

                <div className="flex items-center gap-x-2 mt-2">
                  <FaCalendarDays className="text-text-secondary" />
                  <p className="p-0 m-0 text-sm text-text-secondary font-Jakarta">
                    2023 - Present
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-text-secondary text-[16px]">
              I am currently pursuing a Diploma in Computer Technology to
              strengthen my technical knowledge and practical skills
            </p>
          </div>

          <div className="flex flex-col border-t border-border pt-6">
            <div className="flex gap-x-3 items-start">
              <div className="w-14 h-14 bg-primary/10 rounded-full border border-primary/30 flex justify-center items-center">
                <FaRegCalendarCheck className="text-2xl text-text-secondary" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[18px] font-Jakarta font-semibold text-text-primary">
                  SSC ( Science )
                </h3>
                <p className="text-sm font-semibold text-primary mt-1">
                  Setabgonj Ideal Academy
                </p>

                <div className="flex items-center gap-x-2 mt-2">
                  <FaCalendarDays className="text-text-secondary" />
                  <p className="p-0 m-0 text-sm text-text-secondary font-Jakarta">
                    2022
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-text-secondary text-[16px]">
              Completed Secondary School Certificate (SSC) with Science
              background
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-130 bg-bg-card px-6 py-10 rounded-[20px] border border-border items-stretch">
        <Skills />
      </div>
    </div>
   </>
  );
}

export default Education;
