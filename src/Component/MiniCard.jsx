import React from 'react'
import { Button } from "@heroui/react";
import { LuSquareArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function MiniCard({Image,title,description,live,github}) {
  return (
     <div className="w-full md:w-90 lg:w-100 bg-bg-card  rounded-2xl border border-border hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-primary/70 duration-300 overflow-hidden">
          <div className="w-full h-70 md:h-50">
            <img src={Image} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="px-4 py-6 mt-2">
            <h6 className="text-xl font-medium text-text-primary">{title}</h6>
            <p className="text-text-secondary flex items-center gap-x-2 font-normal text-sm">{description} <FaArrowRight /></p>
            <div className="flex gap-x-3 mt-3">
              <a href={live}>
                <Button
                  className="bg-primary/20 text-white rounded-[10px] border border-primary/40 hover:bg-primary hover:border-primary/80 duration-300"
                  variant="secondary"
                >
                  Live Demo <LuSquareArrowUpRight />
                </Button>
              </a>
              <a href={github}>
                <Button
                  className="bg-primary/20 text-white rounded-[10px] border border-primary/40 hover:bg-primary/10 hover:border-primary/80 duration-300"
                  variant="secondary"
                >
                  Github <FaGithub />

                </Button>
              </a>
            </div>
          </div>
        </div>
  )
}

export default MiniCard