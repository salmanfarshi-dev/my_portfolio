import React from "react";
import Icon from "../Component/Icon";
import { FaReact } from "react-icons/fa";
import CardTittle from "../Component/CardTittle";
import CardPera from "../Component/CardPera";
import Tools from "../Component/Tools";
import { FaMobileAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { MdColorLens } from "react-icons/md";

function ServiceCard() {
  return (
    <section className="mt-15">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <div className="card">
            <Icon
              icon={<FaReact className="text-2xl text-text-primary" />}
              className="bg-primary/30"
            />
            <CardTittle
              head="React Frontend Development"
              className="mt-2 mb-3"
            />
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
        <div className="col-span-12 md:col-span-4">
          <div className="card">
            <Icon
              icon={<FaMobileAlt className="text-2xl text-text-primary" />}
              className="bg-accent/20 border-accent/30 border"
            />
            <CardTittle head="Responsive UI" className="mt-2 mb-3" />
            <CardPera pera="Pixel-perfect UI across all screen sizes, built with a mobile-first approach." />

            <div className="mt-6 flex items-center flex-wrap gap-4">
              <Tools
                tool="CSS3"
                className="bg-accent/10! border border-border-hover/50"
              />
              <Tools
                tool="Grid"
                className="bg-accent/10! border border-border-hover/50"
              />
              <Tools tool="Flexbox" />
              <Tools tool="Media Query" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card">
            <CardTittle head="My process" />

            <div className="mt-6 flex flex-col gap-y-4">
              <div className="flex gap-x-3 border-b pb-6 border-border">
                <Icon icon="01" className="myprocess" />

                <div className="flex flex-col gap-y-1">
                  <h5 className="text-xl text-text-primary font-medium ">
                    Understand
                  </h5>
                  <p className="text-sm text-text-secondary/60">
                    I understand your requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-3 border-b pb-6 border-border">
                <Icon icon="02" className="myprocess" />

                <div className="flex flex-col gap-y-1">
                  <h5 className="text-xl text-text-primary font-medium">
                    Design
                  </h5>
                  <p className="text-sm text-text-secondary/60">
                    I plan the UI..
                  </p>
                </div>
              </div>
              <div className="flex gap-x-3 border-b pb-6 border-border">
                <Icon icon="03" className="myprocess" />

                <div className="flex flex-col gap-y-1">
                  <h5 className="text-xl text-text-primary font-medium">
                    Build
                  </h5>
                  <p className="text-sm text-text-secondary/60">
                    I code and deliver the final product.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-3 border-b pb-6 border-border">
                <Icon icon="04" className="myprocess" />

                <div className="flex flex-col gap-y-1">
                  <h5 className="text-xl text-text-primary font-medium ">
                    Revise
                  </h5>
                  <p className="text-sm text-text-secondary/60">
                    I refine and improve based on feedback..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="card">
            <Icon
              icon={<FiFigma className="text-primary text-2xl" />}
              className="bg-primary/10 border border-primary/20"
            />

            <CardTittle head="Figma to Code" className="mt-2 mb-3" />
            <CardPera pera="I convert designs into responsive, pixel-perfect user interfaces that match the original concept." />

            <div className="mt-6 flex items-center flex-wrap gap-4">
              <Tools
                tool="Figma"
                className="bg-pink-200/10! border border-border-hover/50"
              />
              <Tools
                tool="HTML"
                className="bg-pink-200/10! border border-border-hover/50"
              />
              <Tools tool="CSS" />
              <Tools tool="Responsive Design" />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="card">
            <Icon icon={<MdColorLens className="text-white text-2xl"/>} className="bg-accent/20 border border-accent/40"/>
            <CardTittle head="Landing Pages" className="mt-2 mb-3"/>
            <CardPera pera="Any type of page — personal portfolio, startup landing page, or product showcase. Fast, animated, and SEO-friendly."/>

             <div className="mt-6 flex items-center flex-wrap gap-4">
              <Tools
                tool="HTML/CSS"
                className="bg-purple-400/10! border border-border-hover/20"
              />
              <Tools
                tool="JavaScript"
                className="bg-purple-400/10! border border-border-hover/20"
              />
              <Tools tool="React" />
              <Tools tool="Animation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
