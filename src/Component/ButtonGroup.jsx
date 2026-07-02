import React from 'react'
import {Button} from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-scroll';


function ButtonGroup() {
  return (
    <div  className="flex items-center gap-x-3 md:gap-x-4">
    <Link
  to="project"
  smooth={true}
  duration={1000}
  offset={-80}
  className="inline-flex items-center justify-center text-xl md:px-10 px-5 py-3 md:py-4 font-normal bg-accent/10 border border-accent/30 rounded-xl cursor-pointer hover:bg-accent/15 hover:border-accent/25 duration-300"
>
  View Projects
</Link>
    </div>
  )
}

export default ButtonGroup