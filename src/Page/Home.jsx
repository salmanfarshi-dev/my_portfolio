import { Element, Link as ScrollLink } from "react-scroll";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiCode,
} from "react-icons/fi";
import Salman from "../assets/salman.jpeg";
import CV from "../assets/Salman-farshi-CV.pdf";

function Home() {
  return (
    <Element name="home">
      <section
        id="home"
        className="relative isolate mx-auto flex min-h-screen max-w-[1320px] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:w-[92%] md:pt-28 lg:px-0"
      >
        <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full blur-[100px]" />
        <div className="pointer-events-none absolute right-0 top-40 -z-10 h-72 w-72 rounded-full blur-[100px]" />

        <div className="grid w-full items-center gap-14 md:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="order-1 md:order-1">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-slate-300 sm:text-sm">
                Available for opportunities
              </span>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-400 sm:text-base">
              Hello, I'm
            </p>

            <h1 className="font-Jakarta text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Salman
              <br />
              <span className="gradient-text">Farshi.</span>
            </h1>

            <h2 className="mt-6 font-Jakarta text-xl font-semibold text-slate-200 sm:text-2xl lg:text-3xl">
              Frontend Web Developer
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I build modern, responsive, and user-friendly web interfaces using
              React and JavaScript. I care about clean code, thoughtful details,
              and creating smooth experiences across devices. I'm currently
              expanding my skills through MERN Stack Development.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind CSS", "Responsive UI"].map(
                (tech) => (
                  <span key={tech} className="tech">
                    {tech}
                  </span>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ScrollLink
                to="project"
                smooth
                duration={600}
                offset={-85}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-500  px-2 md:px-5 py-3 md:py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-500/30 sm:text-base"
              >
                Explore My Work
                <FiArrowUpRight size={18} />
              </ScrollLink>

              <a
                href={CV}
                download="Salman-Farshi-CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/4 px-2 md:px-5 py-3 md:py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/10 sm:text-base"
              >
                <FiDownload size={17} />
                Download CV
              </a>
            </div>

           
          </div>

          <div className="order-2 mx-auto w-full max-w-85 md:order-2 md:max-w-none">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-90">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/25 via-violet-500/15 to-transparent blur-2xl" />

              <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/2 p-3 shadow-2xl shadow-black/30">
                <div className="overflow-hidden rounded-[20px] bg-slate-800">
                  <img
                    src={Salman}
                    alt="Salman Farshi, Frontend Web Developer"
                    className="aspect-4/5 w-full object-cover object-center"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <div className="glass-panel absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl p-3.5 shadow-xl sm:-left-9 sm:p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <FiCode size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    React Developer
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Building for the web
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 top-8 flex h-14 w-14 rotate-6 items-center justify-center rounded-2xl border border-violet-300/20 bg-[#17152d] text-xl font-bold text-violet-300 shadow-xl sm:-right-5">
                {"</>"}
              </div>
            </div>
          </div>
        </div>

        <ScrollLink
          to="skill"
          smooth
          duration={600}
          offset={-85}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 cursor-pointer items-center gap-2 text-xs text-slate-500 transition-colors hover:text-blue-400 md:flex"
        >
          <FiArrowDownRight size={16} />
          Scroll to explore
        </ScrollLink>
      </section>
    </Element>
  );
}

export default Home;
