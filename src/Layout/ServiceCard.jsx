import React from "react";
import Icon from "../Component/Icon";
import { FaReact } from "react-icons/fa";
import CardTittle from "../Component/CardTittle";
import CardPera from "../Component/CardPera";
import Tools from "../Component/Tools";
import { FaMobileAlt } from "react-icons/fa";

function ServiceCard() {
  return (
    <section className="mt-15">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="card">
            <Icon
              icon={<FaReact className="text-2xl text-text-primary" />}
              className="bg-primary/30"
            />
            <CardTittle head="React Frontend Development" className="my-3" />
            <CardPera pera="I build component-based UIs that are reusable, clean, and responsive. I create scalable frontends using hooks, state management, and modern React patterns." />

            <div className="mt-7 flex gap-x-5">
              <div className="flex flex-col">
                <h4 className="text-[40px] font-bold text-primary">15%</h4>
                <p className="text-sm text-text-secondary font-normal">
                  Conponernts built
                </p>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[40px] font-bold text-primary">100%</h4>
                <p className="text-sm text-text-secondary font-normal">
                  Responsive
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center flex-wrap gap-4">
              <Tools
                tool="React.Js"
                className="bg-primary/10! border-border-hover"
              />
              <Tools
                tool="Hooks"
                className="bg-primary/10! border-border-hover"
              />
              <Tools
                tool="Javascript"
                className="bg-primary/10! border-border-hover"
              />
              <Tools tool="React Router" />
              <Tools tool="Tailwind" />
              <Tools tool="Context API" />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="card">
            <Icon icon={<FaMobileAlt className="text-2xl text-text-primary"/>} className="bg-accent/20 border-accent/30 border"/>
            <CardTittle head="Responsive UI" className="my-3"/>
            <CardPera pera="Pixel-perfect UI across all screen sizes, built with a mobile-first approach."/>

             <div className="mt-6 flex items-center flex-wrap gap-4">
             
              <Tools tool="CSS3" className="bg-accent/30! border border-border-hover/70"/>
              <Tools tool="Grid" className="bg-accent/30! border border-border-hover/70"/>
              <Tools tool="Flexbox" />
              <Tools tool="Media Query" />
             
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
