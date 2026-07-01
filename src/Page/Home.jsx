import React from "react";
import { Element } from "react-scroll";
import Button from "@mui/material/Button";
import Salman from '../assets/salman.jpeg'

function Home() {
  return (
   <Element name="home">
     <section id="home" className="min-h-screen max-w-330 mx-auto md:pt-20 mt-30 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h1 className="tittle " >
            <span className="text-white text-[45px] md:text-[55px]">Hello, I'm </span>Salman
            Farshi
          </h1>
          <p className="text-text-secondary text-[16px] md:text-[18px] font-normal w-full md:w-[65%] md:mt-5 mt-3 "  >
            I’m a{" "}
            <span className="text-accent font-medium">
              Frontend Web Developer
            </span>{" "}
            specializing in responsive, user-focused, and modern web
            applications. Passionate about clean code and intuitive interfaces,
            I’m currently expanding my expertise in the MERN Stack.
          </p>

          <div className="flex gap-x-4 items-center mt-7">
            <Button
              component="a"
              href=""
              download
              variant="contained"
              sx={{
                background: "#1E293B",
                borderRadius: "12px",
                padding: {
                  md:"10px 20px"
                },
                textTransform: "capitalize",
                fontSize: {
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                },
                border: "1px solid #334155",
                "&:hover": {
                  backgroundColor: "#3b82f617",
                  borderColor: "#3B82F6",
                },
              }}
            >
              Download CV
            </Button>
            <Button 
            sx={{
               borderRadius: "12px",
                 padding: {
                  md:"10px 20px"
                },
                textTransform: "capitalize",
                background:"#3B82F6",
                fontSize: {
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                },
            }}
            variant="contained">Hire Me</Button>
          </div>
        </div>
        <div>
         <div>
           <img src={Salman} alt=""  className="image"/>
         </div>

        </div>
      </div>
    </section>

   </Element>
  );
}

export default Home;
